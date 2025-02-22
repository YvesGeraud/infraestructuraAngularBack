import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Unidad } from "../entity/CtUnidad";

export class UnidadController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const unidadRepo = getRepository(Unidad);
            const unidades = await unidadRepo.find();
            res.json(unidades);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo unidades" });
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const unidadRepo = getRepository(Unidad);
            const unidad = await unidadRepo.findOne({ where: { id_unidad: parseInt(id) } });
            if (!unidad) {
                res.status(404).json({ error: "Unidad no encontrada" });
            } else {
                res.json(unidad);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo unidad" });
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        try {
            const unidadRepo = getRepository(Unidad);
            const unidad = unidadRepo.create(req.body);
            const result = await unidadRepo.save(unidad);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error creando unidad" });
        }
    }

    // Puedes agregar métodos para actualizar y eliminar si lo consideras necesario.
}
