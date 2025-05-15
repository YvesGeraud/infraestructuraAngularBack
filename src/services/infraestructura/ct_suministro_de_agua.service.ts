import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_suministro_agua: SuministroAgua } = models;

class ctSuministroDeAguaService {
  //* Obtener todos los suministros de agua
  async obtenerSuministrosDeAgua() {
    try {
      const suministrosDeAgua = await SuministroAgua.findAll();
      return suministrosDeAgua;
    } catch (error) {
      console.error("Error al obtener los suministros de agua:", error);
      throw error;
    }
  }
}

export default new ctSuministroDeAguaService();
