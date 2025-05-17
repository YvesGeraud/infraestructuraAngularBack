import { Request, Response } from "express";
import CtDireccionService from "../../services/infraestructura/ct_direccion.service";

export class CtDireccionController {
  //* Obtener todas las direcciones
  async obtenerDireccion(req: Request, res: Response) {
    try {
      const direcciones = await CtDireccionService.obtenerDirecciones();
      res.status(200).json(direcciones);
    } catch (error) {
      console.error("Error al obtener direcciones:", error);
      res.status(500).json({ error: "Error al obtener direcciones" });
    }
  }

  //* Obtener una dirección por su ID
  async obtenerDireccionPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const direccion = await CtDireccionService.obtenerDireccionPorId(
        parseInt(id)
      );
      res.status(200).json(direccion);
    } catch (error) {
      console.error("Error al obtener la dirección:", error);
      res.status(500).json({ error: "Error al obtener la dirección" });
    }
  }
}

export default new CtDireccionController();
