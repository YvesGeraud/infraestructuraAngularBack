import { ct_infraestructura_nivel_educativo } from "../../models/ct_infraestructura_nivel_educativo";
import { rl_infraestructura_unidad_nivel } from "../../models/rl_infraestructura_unidad_nivel";
import { Op } from "sequelize";

class ctNivelEducativoService {
  async obtenerNivelesEducativos() {
    try {
      const nivelesEducativos =
        await ct_infraestructura_nivel_educativo.findAll();
      return nivelesEducativos;
    } catch (error) {
      throw new Error("Error al obtener los niveles educativos");
    }
  }

  async guardarNivelAcademico(
    id_unidad: number,
    id_nivel: number,
    activo: boolean
  ) {
    try {
      const nivelAcademico = await rl_infraestructura_unidad_nivel.create({
        id_unidad,
        id_nivel,
      });
      return nivelAcademico;
    } catch (error) {
      throw new Error("Error al guardar el nivel académico");
    }
  }

  async eliminarNivelAcademico(id_unidad: number, id_nivel: number) {
    try {
      await rl_infraestructura_unidad_nivel.destroy({
        where: { id_unidad, id_nivel },
      });
    } catch (error) {
      throw new Error("Error al eliminar el nivel académico");
    }
  }
}

export default new ctNivelEducativoService();
