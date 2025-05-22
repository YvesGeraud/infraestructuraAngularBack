import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { Op } from "sequelize";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const {
  rl_infraestructura_unidad_nivel: UnidadNivel,
  ct_infraestructura_nivel_educativo: NivelEducativo,
} = models;

class rlUnidadNivelService {
  //? No se usa por ahora
  async obtenerNivelesEducativos() {
    try {
      const nivelesEducativos = await UnidadNivel.findAll({
        include: [
          {
            model: NivelEducativo,
            as: "id_nivel_ct_infraestructura_nivel_educativo",
            attributes: ["id_nivel", "descripcion"],
          },
        ],
      });
      return nivelesEducativos;
    } catch (error) {
      throw new Error("Error al obtener los niveles educativos");
    }
  }

  //* Actualizar un nivel educativo de una unidad
  async actualizarNivelUnidad(
    id_unidad: number,
    id_nivel: number,
    valor: boolean
  ) {
    try {
      if (valor) {
        // Si el valor es true, crear la relación
        await UnidadNivel.create({
          id_unidad,
          id_nivel,
        });
        return { message: "Nivel educativo agregado correctamente" };
      } else {
        // Si el valor es false, eliminar la relación
        await UnidadNivel.destroy({
          where: {
            id_unidad,
            id_nivel,
          },
        });
        return { message: "Nivel educativo eliminado correctamente" };
      }
    } catch (error: any) {
      throw new Error("Error al actualizar nivel: " + error.message);
    }
  }
}

export default new rlUnidadNivelService();
