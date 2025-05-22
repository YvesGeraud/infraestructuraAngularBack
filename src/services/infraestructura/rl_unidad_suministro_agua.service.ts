import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { rl_infraestructura_unidad_suministro_agua: UnidadSuministroAgua } =
  models;

class rlSuministroDeAguaService {
  //* Obtener todos los suministros de agua
  async obtenerSuministrosDeAgua() {
    try {
      const suministrosDeAgua = await UnidadSuministroAgua.findAll({
        attributes: ["id_unidad_suministro_agua", "descripcion"],
      });
      if (suministrosDeAgua.length === 0) {
        throw new Error("No hay suministros de agua");
      }
      return suministrosDeAgua;
    } catch (error) {
      console.error("Error al obtener los suministros de agua:", error);
      throw new Error("Error al obtener los suministros de agua");
    }
  }
}

export default new rlSuministroDeAguaService();
