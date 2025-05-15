import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { rl_infraestructura_unidad_nivel: UnidadNivel } = models;

class rlNivelEducativoService {
  //* Obtener todos los niveles educativos
  async obtenerNivelesEducativos() {
    try {
      const nivelesEducativos = await UnidadNivel.findAll();
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
        const nivelEducativo = await UnidadNivel.create({
          id_unidad: id_unidad,
          id_nivel: id_nivel,
        });
        return { message: "Nivel creado" };
      } else {
        await UnidadNivel.destroy({
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
