import { Request, Response } from "express";
import { Like } from "typeorm";
import { Unidad } from "../entity/CtUnidad";
import { AppDataSource } from "../data-source";

export class UnidadController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const unidadRepo = AppDataSource.getRepository(Unidad);
            let query = unidadRepo.createQueryBuilder("unidad");

            // Aplicar filtros si existen
            if (req.query.nombre) {
                query = query.andWhere("unidad.nombre_unidad LIKE :nombre", {
                    nombre: `%${req.query.nombre}%`
                });
            }

            if (req.query.cct) {
                query = query.andWhere("unidad.cct = :cct", {
                    cct: req.query.cct
                });
            }

            if (req.query.municipio_id) {
                query = query.andWhere("unidad.municipio_id = :municipio_id", {
                    municipio_id: req.query.municipio_id
                });
            }

            const unidades = await query.getMany();
            res.json(unidades);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo unidades" });
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const unidadRepo = AppDataSource.getRepository(Unidad);
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

    static async getByCct(req: Request, res: Response): Promise<void> {
        try {
            const { cct } = req.params;
            const unidadRepo = AppDataSource.getRepository(Unidad);
            const unidad = await unidadRepo.findOne({ where: { cct: cct } });
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

    static async getSugerencias(req: Request, res: Response): Promise<void> {
        try {
            const termino = req.query.busqueda as string;
            if (!termino || termino.trim() === '') {
                res.json([]);
                return;
            }
            const unidadRepo = AppDataSource.getRepository(Unidad);
            // Busca Unidades cuyo nombre_unidad o cct contengan el término
            // Ajusta segun tu el modelo de datos
            const unidades = await unidadRepo.find({
                where: [
                    { nombre_unidad: Like(`%${termino}%`) },
                    { cct: Like(`%${termino}%`) }
                ],
                take: 10
            });
            // Devuelve solo un array de strings, por ejemplo el nombre_unidad
            const sugerencias = unidades.map(u => `${u.nombre_unidad} (CCT: ${u.cct})`);
            res.json(sugerencias);
            return;
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo sugerencias" });
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        try {
            const unidadRepo = AppDataSource.getRepository(Unidad);
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
            const unidadRepo = AppDataSource.getRepository(Unidad);
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
