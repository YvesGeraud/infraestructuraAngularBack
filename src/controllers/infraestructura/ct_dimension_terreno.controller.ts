import { Request, Response } from "express";
import CtDimencionTerrenoService from "../../services/infraestructura/ct_dimension_terreno.service";

export class CtDimencionTerrenoController {
  async obtenerDimencionTerreno(req: Request, res: Response) {
    try {
      const dimencionTerreno =
        await CtDimencionTerrenoService.obtenerDimencionTerreno();
      res.json(dimencionTerreno);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener las dimensiones del terreno" });
    }
  }
}

export default new CtDimencionTerrenoController();
