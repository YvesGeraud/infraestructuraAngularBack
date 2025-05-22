import { rl_infraestructura_unidad_nivel } from "../../models/rl_infraestructura_unidad_nivel";
import { sequelize } from "../../config/database";

class rlNivelEducativoService {
  //* Obtener todos los niveles educativos
  async obtenerNivelesEducativos() {
    try {
      const nivelesEducativos = await rl_infraestructura_unidad_nivel.findAll();
      return nivelesEducativos;
    } catch (error) {
      console.error("Error al obtener niveles educativos:", error);
      throw error;
    }
  }

  //* Actualizar el nivel de la unidad
  async actualizarNivelUnidad(
    id_unidad: number,
    id_nivel: number,
    valor: boolean
  ) {
    try {
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
    } catch (error) {
      console.error("Error al actualizar el nivel de la unidad:", error);
      throw error;
    }
  }
}

export default new rlNivelEducativoService();
