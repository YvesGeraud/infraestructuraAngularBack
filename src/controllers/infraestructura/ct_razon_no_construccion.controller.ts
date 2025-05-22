import { Request, Response } from "express";
import ctRazonNoConstruccionService from "../../services/infraestructura/ct_razon_no_construccion.service";

class ctRazonNoConstruccionController {
  async obtenerRazonesNoConstruccion(req: Request, res: Response) {
    try {
      const razonesNoConstruccion =
        await ctRazonNoConstruccionService.obtenerRazonesNoConstruccion();
      res.status(200).json(razonesNoConstruccion);
    } catch (error) {
      console.error(
        "Error al obtener las razones de no construcción controller:",
        error
      );
      res.status(500).json({
        error: "Error al obtener las razones de no construcción controller",
      });
    }
  }
}

export default new ctRazonNoConstruccionController();
