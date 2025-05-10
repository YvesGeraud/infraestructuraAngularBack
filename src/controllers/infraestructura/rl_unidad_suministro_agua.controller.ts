import { Request, Response } from "express";
import rlSuministroDeAguaService from "../../services/infraestructura/rl_unidad_suministro_agua.service";

class rlSuministroDeAguaController {
  async obtenerSuministrosDeAgua(req: Request, res: Response) {
    try {
      const suministrosDeAgua =
        await rlSuministroDeAguaService.obtenerSuministrosDeAgua();
      res.status(200).json(suministrosDeAgua);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener los suministros de agua" });
    }
  }
}

export default new rlSuministroDeAguaController();
