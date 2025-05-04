import { rl_infraestructura_unidad_nivel } from "../../models/rl_infraestructura_unidad_nivel";
import { Op } from "sequelize";

class rlNivelEducativoService {
  async obtenerNivelesEducativos() {
    const nivelesEducativos = await rl_infraestructura_unidad_nivel.findAll();
    return nivelesEducativos;
  }

  async actualizarNivelUnidad(
    id_unidad: number,
    id_nivel: number,
    valor: boolean
  ) {
    if (valor === true) {
      const nivelEducativo = await rl_infraestructura_unidad_nivel.create({
        id_unidad: id_unidad,
        id_nivel: id_nivel,
      });
      return { message: "Nivel creado" };
    } else {
      await rl_infraestructura_unidad_nivel.destroy({
        where: { id_unidad: id_unidad, id_nivel: id_nivel },
      });
      return { message: "Nivel eliminado" };
    }
  }
}

export default new rlNivelEducativoService();
