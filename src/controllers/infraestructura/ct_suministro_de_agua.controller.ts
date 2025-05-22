import { Request, Response } from "express";
import ctSuministroDeAguaService from "../../services/infraestructura/ct_suministro_de_agua.service";

class ctSuministroDeAguaController {
  async obtenerSuministrosDeAgua(req: Request, res: Response) {
    try {
      const suministrosDeAgua =
        await ctSuministroDeAguaService.obtenerSuministrosDeAgua();
      res.status(200).json(suministrosDeAgua);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener los suministros de agua controller",
      });
      console.error(
        "Error al obtener los suministros de agua controller:",
        error
      );
    }
  }
}

export default new ctSuministroDeAguaController();
