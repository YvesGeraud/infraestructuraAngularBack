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
} 