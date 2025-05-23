import { Request, Response } from "express";
import ctSuministroGasService from "../../services/infraestructura/ct_suministro_gas.service";

class ctSuministroGasController {
  async obtenerSuministrosDeGas(req: Request, res: Response) {
    try {
      const suministrosDeGas =
        await ctSuministroGasService.obtenerSuministrosDeGas();
      res.status(200).json(suministrosDeGas);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener los suministros de gas controller",
      });
      console.error(
        "Error al obtener los suministros de gas controller:",
        error
      );
    }
  }
}

export default new ctSuministroGasController();
