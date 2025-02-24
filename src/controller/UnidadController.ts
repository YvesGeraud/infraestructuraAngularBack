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
                return;
            }
            res.json(unidad);
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

    static async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const unidadRepo = getRepository(Unidad);
            const unidad = await unidadRepo.findOne({ where: { id_unidad: parseInt(id) } });
            if (!unidad) {
                res.status(404).json({ error: "Unidad no encontrada" });
                return;
            }
            // Para actualizar, hacemos lo mismo: extraemos lat y lng y actualizamos los demás campos
            const { lat, lng, ...resto } = req.body;
    
            // Si se reciben lat y lng, se actualiza la ubicación
            if (lat !== undefined && lng !== undefined) {
                resto.ubicacion = () => `ST_GeomFromText('POINT(${lng} ${lat})',4326)`;
            }
    
            unidadRepo.merge(unidad, resto);
            const result = await unidadRepo.save(unidad);
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al actualizar la unidad" });
        }
    }
}
