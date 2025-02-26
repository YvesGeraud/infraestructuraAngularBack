// src/controller/UsuarioController.ts
import { Request, Response } from "express";
import { Usuario } from "../entity/CtUsuario";
import { AppDataSource } from "../data-source";

export class UsuarioController {
    // Obtener todos los usuarios (incluyendo la relación con la unidad)
    static async getAll(req: Request, res: Response) {
        try {
            const usuarioRepo = AppDataSource.getRepository(Usuario);
            const usuarios = await usuarioRepo.find({ relations: ["unidad"] });
            res.json(usuarios);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo usuarios" });
        }
    };

    // Obtener un usuario por su ID
    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const usuarioRepo = AppDataSource.getRepository(Usuario);
            const usuario = await usuarioRepo.findOne({ where: { id_usuario: parseInt(id) }, relations: ["unidad"] });
            if (!usuario) {
                res.status(404).json({ error: "Usuario no encontrado" });
                return;
            }
            res.json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo usuario" });
        }
    };

    // Crear un nuevo usuario
    static async create(req: Request, res: Response): Promise<void> {
        try {
            const usuarioRepo = AppDataSource.getRepository(Usuario);
            // Se crea una nueva instancia con los datos enviados en el body
            const usuario = usuarioRepo.create(req.body);
            const result = await usuarioRepo.save(usuario);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error creando usuario" });
        }
    };

    // Actualizar un usuario existente
    static async update(req: Request, res: Response): Promise<void> {
        const queryRunner = AppDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const { id } = req.params;
            // Usamos el manager de la transacción en lugar del repository directamente
            const usuario = await queryRunner.manager.findOne(Usuario, { 
                where: { id_usuario: parseInt(id) } 
            });

            if (!usuario) {
                res.status(404).json({ error: "Usuario no encontrado" });
                return;
            }

            // Mezclamos y guardamos usando el manager de la transacción
            queryRunner.manager.merge(Usuario, usuario, req.body);
            const result = await queryRunner.manager.save(Usuario, usuario);

            // Si todo sale bien, hacemos commit de la transacción
            await queryRunner.commitTransaction();
            res.json(result);

        } catch (error) {
            // Si hay error, hacemos rollback
            await queryRunner.rollbackTransaction();
            
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'Error desconocido' });
            }
        } finally {
            // Siempre liberamos el queryRunner
            await queryRunner.release();
        }
    };

    // Eliminar un usuario
    static async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const usuarioRepo = AppDataSource.getRepository(Usuario);
            const result = await usuarioRepo.delete(parseInt(id));
            if (result.affected === 0) {
                res.status(404).json({ error: "Usuario no encontrado" });
                return;
            }
            res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'Error desconocido' });
            }
        }
    };
}
