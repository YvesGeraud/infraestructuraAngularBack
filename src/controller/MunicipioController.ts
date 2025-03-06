import { Request, Response } from "express";
import { MunicipioService } from "../services/MunicipioService";

export class MunicipioController {
    private static municipioService = new MunicipioService();

    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const municipios = await MunicipioController.municipioService.obtenerTodos();
            res.json(municipios);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo municipios" });
        }
    }

    static async getGeoJson(req: Request, res: Response): Promise<void> {
        try {
            const municipioId = parseInt(req.params.id);
            const geoJson = await MunicipioController.municipioService.obtenerGeoJson(municipioId);

            if (!geoJson) {
                res.status(404).json({ error: "GeoJSON no encontrado para este municipio" });
                return;
            }

            res.json(geoJson);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo GeoJSON del municipio" });
        }
    }

    static async getEstadoGeoJson(req: Request, res: Response): Promise<void> {
        try {
            const geoJson = await MunicipioController.municipioService.obtenerGeoJsonEstado();

            if (!geoJson) {
                res.status(404).json({ error: "GeoJSON del estado no encontrado" });
                return;
            }

            res.json(geoJson);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error obteniendo GeoJSON del estado" });
        }
    }
} 