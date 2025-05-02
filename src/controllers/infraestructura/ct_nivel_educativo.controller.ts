import { Request, Response } from "express";
import ctNivelEducativoService from "../../services/infraestructura/ct_nivel_educativo.service";

class ctNivelEducativoController {
  async obtenerNivelesEducativos(req: Request, res: Response) {
    const nivelesEducativos =
      await ctNivelEducativoService.obtenerNivelesEducativos();
    res.status(200).json(nivelesEducativos);
  }
}

export default new ctNivelEducativoController();
