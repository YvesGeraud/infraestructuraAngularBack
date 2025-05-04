import { Request, Response } from "express";
import ctNivelEducativoService from "../../services/infraestructura/ct_nivel_educativo.service";

class ctNivelEducativoController {
  async obtenerNivelesEducativos(req: Request, res: Response) {
    const nivelesEducativos =
      await ctNivelEducativoService.obtenerNivelesEducativos();
    res.status(200).json(nivelesEducativos);
  }

  async guardarNivelAcademico(req: Request, res: Response) {
    const { id_unidad, id_nivel, activo } = req.body;
    const nivelAcademico = await ctNivelEducativoService.guardarNivelAcademico(
      id_unidad,
      id_nivel,
      activo
    );
    res.status(200).json(nivelAcademico);
  }

  async eliminarNivelAcademico(req: Request, res: Response) {
    const { id_unidad, id_nivel } = req.params;
    await ctNivelEducativoService.eliminarNivelAcademico(
      parseInt(id_unidad),
      parseInt(id_nivel)
    );
    res.status(200).json({ message: "Nivel académico eliminado" });
  }
}

export default new ctNivelEducativoController();
