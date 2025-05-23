import { Request, Response } from "express";
import ctTipoDescargaService from "../../services/infraestructura/ct_tipo_descarga.service";

class ctTipoDescargaController {
  async obtenerTipoDescarga(req: Request, res: Response) {
    try {
      const tipoDescarga = await ctTipoDescargaService.obtenerTipoDescarga();
      res.status(200).json(tipoDescarga);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener los tipo de descarga controller",
      });
      console.error("Error al obtener los tipo de descarga controller:", error);
    }
  }
}

export default new ctTipoDescargaController();
