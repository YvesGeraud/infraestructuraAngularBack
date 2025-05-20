import { Request, Response } from "express";
import CtAreaService from "../../services/infraestructura/ct_area.service";

export class CtAreaController {
  async obtenerArea(req: Request, res: Response) {
    try {
      const area = await CtAreaService.obtenerArea();
      res.json(area);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las áreas" });
    }
  }
}

export default new CtAreaController();
