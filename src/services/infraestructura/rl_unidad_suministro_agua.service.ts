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
      const suministrosDeAgua = await UnidadSuministroAgua.findAll();
      return suministrosDeAgua;
    } catch (error) {
      console.error("Error al obtener los suministros de agua:", error);
      throw error;
    }
  }
}

export default new rlSuministroDeAguaService();
