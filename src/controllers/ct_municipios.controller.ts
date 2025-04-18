import { Request, Response } from "express";
import ctInfraestructuraMunicipiosService from "../services/ct_municipio.service";

class ctMunicipiosController {
  async obtenerMunicipios(req: Request, res: Response) {
    const municipios =
      await ctInfraestructuraMunicipiosService.obtenerMunicipios();
    res.status(200).json(municipios);
  }
}

export default new ctMunicipiosController();
