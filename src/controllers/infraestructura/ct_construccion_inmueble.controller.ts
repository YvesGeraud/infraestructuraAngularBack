import { Request, Response } from "express";
import ctConstruccionInmuebleService from "../../services/infraestructura/ct_construccion_inmueble.service";

class ctConstruccionInmuebleController {
  //* Obtener todos los tipos de construccion inmueble
  async obtenerTiposConstruccionInmueble(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const tiposConstruccionInmueble =
        await ctConstruccionInmuebleService.obtenerTiposConstruccionInmueble();
      res.status(200).json(tiposConstruccionInmueble);
    } catch (error) {
      console.error(
        "Error al obtener tipos de construccion inmueble controller:",
        error
      );
      res.status(500).json({
        error: "Error al obtener tipos de construccion inmueble controller",
      });
    }
  }
}

export default new ctConstruccionInmuebleController();
