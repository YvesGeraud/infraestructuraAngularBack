import { Request, Response } from "express";
import ctInfraestructuraFinInmuebleService from "../../services/infraestructura/ct_fin_inmueble.service";

class ctInfraestructuraFinInmuebleController {
  //* Obtener todos los tipos de fin de inmueble
  async obtenerTiposFinInmueble(req: Request, res: Response): Promise<void> {
    try {
      const tiposFinInmueble =
        await ctInfraestructuraFinInmuebleService.obtenerTiposFinInmueble();
      res.status(200).json(tiposFinInmueble);
    } catch (error) {
      console.error("Error al obtener tipos de fin de inmueble:", error);
      res
        .status(500)
        .json({ error: "Error al obtener tipos de fin de inmueble" });
    }
  }
}

export default new ctInfraestructuraFinInmuebleController();
