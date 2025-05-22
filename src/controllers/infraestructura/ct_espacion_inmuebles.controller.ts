import { Request, Response } from "express";
import CtEspacioInmueblesService from "../../services/infraestructura/ct_espacio_inmuebles.service";

class CtEspacioInmueblesController {
  //* Obtener todos los espacios de inmuebles
  async obtenerEspaciosInmuebles(req: Request, res: Response) {
    try {
      const espaciosInmuebles =
        await CtEspacioInmueblesService.obtenerEspaciosInmuebles();
      res.status(200).json(espaciosInmuebles);
    } catch (error) {
      console.error(
        "Error al obtener los espacios de inmuebles controller:",
        error
      );
      res.status(500).json({
        error: "Error al obtener los espacios de inmuebles controller",
      });
    }
  }
}

export default new CtEspacioInmueblesController();
