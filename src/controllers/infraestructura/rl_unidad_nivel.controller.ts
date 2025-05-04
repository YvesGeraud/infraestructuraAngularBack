import { Request, Response } from "express";
import rlNivelEducativoService from "../../services/infraestructura/rl_unidad_nivel.service";

class rlUnidadNivelController {
  //? No se usa por ahora
  async obtenerNivelesUnidad(req: Request, res: Response) {
    const nivelEducativo =
      await rlNivelEducativoService.obtenerNivelesEducativos();
    res.status(200).json(nivelEducativo);
  }

  //* Actualizar un nivel educativo de una unidad
  async actualizarNivelUnidad(req: Request, res: Response) {
    try {
      const { id_unidad, id_nivel, valor } = req.body;
      const nivelEducativo =
        await rlNivelEducativoService.actualizarNivelUnidad(
          id_unidad,
          id_nivel,
          valor
        );
      res.status(200).json(nivelEducativo);
    } catch (error: any) {
      console.error("Error al actualizar nivel:", error);
      res
        .status(500)
        .json({ error: error.message || "Error al actualizar nivel" });
    }
  }
}

export default new rlUnidadNivelController();
