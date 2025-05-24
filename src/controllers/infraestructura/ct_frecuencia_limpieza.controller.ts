import { Request, Response } from "express";
import ctFrecuenciaLimpiezaService from "../../services/infraestructura/ct_frecuencia_limpieza.service";

class ctFrecuenciaLimpiezaController {
  //* Obtener todos los tipos de frecuencia de limpieza
  async obtenerTiposFrecuenciaLimpieza(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const tiposFrecuenciaLimpieza =
        await ctFrecuenciaLimpiezaService.obtenerTiposFrecuenciaLimpieza();
      res.status(200).json(tiposFrecuenciaLimpieza);
    } catch (error) {
      console.error(
        "Error al obtener tipos de frecuencia de limpieza controller:",
        error
      );
      res.status(500).json({
        error: "Error al obtener tipos de frecuencia de limpieza controller",
      });
    }
  }
}

export default new ctFrecuenciaLimpiezaController();
