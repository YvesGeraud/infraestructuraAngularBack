import { Request, Response } from "express";
import ctInfraestructuraPautaSeguridadService from "../../services/infraestructura/ct_pauta_de_seguridad.service";

class ctInfraestructuraPautaSeguridadController {
  //* Obtener todas las pautas de seguridad
  async obtenerPautasSeguridad(req: Request, res: Response): Promise<void> {
    try {
      const pautasSeguridad =
        await ctInfraestructuraPautaSeguridadService.obtenerPautasSeguridad();
      res.status(200).json(pautasSeguridad);
    } catch (error) {
      console.error("Error al obtener pautas de seguridad controller:", error);
      res.status(500).json({
        error: "Error al obtener pautas de seguridad controller",
      });
    }
  }
}

export default new ctInfraestructuraPautaSeguridadController();
