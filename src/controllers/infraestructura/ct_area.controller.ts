import { Request, Response } from "express";
import CtAreaService from "../../services/infraestructura/ct_area.service";

export class CtAreaController {
  async obtenerArea(req: Request, res: Response) {
    try {
      const area = await CtAreaService.obtenerArea();
      res.json(area);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las áreas controller" });
      console.error("Error al obtener las áreas controller:", error);
    }
  }

  async obtenerAreaById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const area = await CtAreaService.obtenerAreaById(parseInt(id));
      res.json(area);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la área controller" });
      console.error("Error al obtener la área controller:", error);
    }
  }
}

export default new CtAreaController();
