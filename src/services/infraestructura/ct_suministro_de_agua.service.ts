import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { Op } from "sequelize";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_suministro_agua: SuministroAgua } = models;

class ctSuministroDeAguaService {
  //* Obtener todos los suministros de agua
  async obtenerSuministrosDeAgua() {
    try {
      const suministrosDeAgua = await SuministroAgua.findAll({
        attributes: ["id_suministro_agua", "descripcion"],
      });
      if (suministrosDeAgua.length === 0) {
        throw new Error("No hay suministros de agua");
      }
      return suministrosDeAgua;
    } catch (error) {
      console.error("Error al obtener los suministros de agua service:", error);
      throw new Error("Error al obtener los suministros de agua service");
    }
  }
}

export default new ctSuministroDeAguaService();
