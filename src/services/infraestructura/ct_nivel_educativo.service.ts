import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const {
  ct_infraestructura_nivel_educativo: NivelEducativo,
  rl_infraestructura_unidad_nivel: UnidadNivel,
} = models;

class ctNivelEducativoService {
  //* Obtener todos los niveles educativos
  async obtenerNivelesEducativos() {
    try {
      const nivelesEducativos = await NivelEducativo.findAll({
        attributes: ["id_nivel", "descripcion"],
      });
      if (nivelesEducativos.length === 0) {
        throw new Error("No hay niveles educativos");
      }
      return nivelesEducativos;
    } catch (error) {
      console.error("Error al obtener los niveles educativos service:", error);
      throw new Error("Error al obtener los niveles educativos service");
    }
  }

  //* Guardar un nivel académico
  async guardarNivelAcademico(
    id_unidad: number,
    id_nivel: number,
    activo: boolean
  ) {
    try {
      const nivelAcademico = await UnidadNivel.create({
        id_unidad,
        id_nivel,
      });
      return nivelAcademico;
    } catch (error) {
      throw new Error("Error al guardar el nivel académico");
    }
  }

  //* Eliminar un nivel académico
  async eliminarNivelAcademico(id_unidad: number, id_nivel: number) {
    try {
      await UnidadNivel.destroy({
        where: { id_unidad, id_nivel },
      });
    } catch (error) {
      throw new Error("Error al eliminar el nivel académico");
    }
  }
}

export default new ctNivelEducativoService();
