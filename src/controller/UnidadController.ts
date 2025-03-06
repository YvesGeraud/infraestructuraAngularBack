import { Request, Response } from "express";
import { UnidadService } from "../services/UnidadService";

export class UnidadController {
    private static unidadService = new UnidadService();

    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const unidades = await UnidadController.unidadService.buscarUnidades({
                nombre: req.query.nombre as string,
                cct: req.query.cct as string,
                municipio_id: req.query.municipio_id ? parseInt(req.query.municipio_id as string) : undefined
            });
            res.json(unidades);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo unidades" });
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const unidad = await UnidadController.unidadService.obtenerPorId(parseInt(req.params.id));
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
            const unidad = await UnidadController.unidadService.obtenerPorCct(req.params.cct);
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
            const sugerencias = await UnidadController.unidadService.obtenerSugerencias(req.query.busqueda as string);
            res.json(sugerencias);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo sugerencias" });
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        try {
            const result = await UnidadController.unidadService.crear(req.body);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error creando unidad" });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        try {
            const result = await UnidadController.unidadService.actualizar(parseInt(req.params.id), req.body);
            if (!result) {
                res.status(404).json({ error: "Unidad no encontrada" });
                return;
            }
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al actualizar la unidad" });
        }
    }
}
