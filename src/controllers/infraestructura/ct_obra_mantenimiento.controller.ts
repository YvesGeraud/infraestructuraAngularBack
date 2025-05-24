import { Request, Response } from "express";
import ctInfraestructuraObraMantenimientoService from "../../services/infraestructura/ct_obra_mantenimiento.service";

class ctInfraestructuraObraMantenimientoController {
  //* Obtener todos los tipos de obra de mantenimiento
  async obtenerTiposObraMantenimiento(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const tiposObraMantenimiento =
        await ctInfraestructuraObraMantenimientoService.obtenerTiposObraMantenimiento();
      res.status(200).json(tiposObraMantenimiento);
    } catch (error) {
      console.error(
        "Error al obtener tipos de obra de mantenimiento controller:",
        error
      );
      res.status(500).json({
        error: "Error al obtener tipos de obra de mantenimiento controller",
      });
    }
  }
}

export default new ctInfraestructuraObraMantenimientoController();
