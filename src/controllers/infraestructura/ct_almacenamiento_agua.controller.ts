import { Request, Response } from "express";
import CtAlmacenamientoAguaService from "../../services/infraestructura/ct_almacenamiento_agua.service";

export class CtAlmacenamientoAguaController {
  async obtenerAlmacenamientoAgua(req: Request, res: Response) {
    try {
      const almacenamientoAgua =
        await CtAlmacenamientoAguaService.obtenerAlmacenamientoAgua();
      res.json(almacenamientoAgua);
    } catch (error) {
      res
        .status(500)
        .json({
          error: "Error al obtener el almacenamiento de agua controller",
        });
      console.error(
        "Error al obtener el almacenamiento de agua controller:",
        error
      );
    }
  }
}

export default new CtAlmacenamientoAguaController();
