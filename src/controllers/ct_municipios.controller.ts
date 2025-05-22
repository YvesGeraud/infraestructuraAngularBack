import { Request, Response } from "express";
import ctInfraestructuraMunicipiosService from "../services/ct_municipio.service";

class ctMunicipiosController {
  async obtenerMunicipios(req: Request, res: Response) {
    try {
      const municipios =
        await ctInfraestructuraMunicipiosService.obtenerMunicipios();
      res.status(200).json(municipios);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener los municipios controller",
      });
      console.error("Error al obtener los municipios controller:", error);
    }
  }
}

export default new ctMunicipiosController();
