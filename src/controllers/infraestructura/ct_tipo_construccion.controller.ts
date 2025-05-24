import { Request, Response } from "express";
import ctTipoConstruccionService from "../../services/infraestructura/ct_tipo_construccion.service";

class ctTipoConstruccionController {
  async obtenerTiposDeConstruccion(req: Request, res: Response) {
    try {
      const tiposDeConstruccion =
        await ctTipoConstruccionService.obtenerTiposDeConstruccion();
      res.status(200).json(tiposDeConstruccion);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener los tipos de construccion controller",
      });
      console.error(
        "Error al obtener los tipos de construccion controller:",
        error
      );
    }
  }
}

export default new ctTipoConstruccionController();
