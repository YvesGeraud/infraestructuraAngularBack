// src/controller/UsuarioController.ts
import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

export class UsuarioController {
    private static usuarioService = new UsuarioService();

    // Obtener todos los usuarios (incluyendo la relación con la unidad)
    static async getAll(req: Request, res: Response) {
        try {
            const usuarios = await UsuarioController.usuarioService.obtenerTodos();
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
            const usuario = await UsuarioController.usuarioService.obtenerPorId(parseInt(id));
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
            const result = await UsuarioController.usuarioService.crear(req.body);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error creando usuario" });
        }
    };

    // Actualizar un usuario existente
    static async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const result = await UsuarioController.usuarioService.actualizar(parseInt(id), req.body);
            
            if (!result) {
                res.status(404).json({ error: "Usuario no encontrado" });
                return;
            }
            
            res.json(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'Error desconocido' });
            }
        }
    };

    // Eliminar un usuario
    static async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deleted = await UsuarioController.usuarioService.eliminar(parseInt(id));
            
            if (!deleted) {
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
