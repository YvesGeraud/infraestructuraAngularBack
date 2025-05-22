import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const {
  rl_infraestructura_unidad_almacenamiento_agua: UnidadAlmacenamientoAgua,
} = models;

class rlUnidadAlmacenamientoAguaService {
  //* Obtener todos los almacenamientos de agua
  async obtenerAlmacenamientoAgua() {
    try {
      const almacenamientoAgua = await UnidadAlmacenamientoAgua.findAll({
        attributes: ["id_unidad_almacenamiento_agua", "descripcion"],
      });
      if (almacenamientoAgua.length === 0) {
        throw new Error("No hay almacenamientos de agua");
      }
      return almacenamientoAgua;
    } catch (error) {
      console.error("Error al obtener almacenamiento de agua:", error);
      throw new Error("Error al obtener almacenamiento de agua");
    }
  }
}

export default new rlUnidadAlmacenamientoAguaService();
