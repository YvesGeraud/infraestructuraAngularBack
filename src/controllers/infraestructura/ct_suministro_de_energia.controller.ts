import { Request, Response } from "express";
import ctSuministroEnergiaService from "../../services/infraestructura/ct_suministro_energia.service";

class ctSuministroEnergiaController {
  async obtenerSuministrosDeEnergia(req: Request, res: Response) {
    try {
      const suministrosDeEnergia =
        await ctSuministroEnergiaService.obtenerSuministrosDeEnergia();
      res.status(200).json(suministrosDeEnergia);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener los suministros de energía controller",
      });
      console.error(
        "Error al obtener los suministros de energía controller:",
        error
      );
    }
  }
}

export default new ctSuministroEnergiaController();
