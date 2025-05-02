import { Request, Response } from "express";
import ctRazonNoConstruccionService from "../../services/infraestructura/ct_razon_no_construccion.service";

class ctRazonNoConstruccionController {
  async obtenerRazonesNoConstruccion(req: Request, res: Response) {
    const razonesNoConstruccion =
      await ctRazonNoConstruccionService.obtenerRazonesNoConstruccion();
    res.status(200).json(razonesNoConstruccion);
  }
}

export default new ctRazonNoConstruccionController();
