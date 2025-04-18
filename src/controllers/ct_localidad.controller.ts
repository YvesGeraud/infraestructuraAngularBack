import { Request, Response } from "express";
import ctLocalidadService from "../services/ct_localidad.service";

class CtLocalidadController {
  //* Obtener todas las localidades
  async obtenerLocalidades(req: Request, res: Response) {
    const localidades = await ctLocalidadService.obtenerLocalidades();
    res.status(200).json(localidades);
  }

  //* Obtener una localidad por su ID
  async obtenerLocalidadPorId(req: Request, res: Response) {
    const localidad = await ctLocalidadService.obtenerLocalidadPorId(
      parseInt(req.params.id)
    );
    res.status(200).json(localidad);
  }
}

export default new CtLocalidadController();
