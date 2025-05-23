import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { Op } from "sequelize";

const models = initModels(sequelize);

const { ct_infraestructura_suministro_gas: SuministroGas } = models;

class ctSuministroGasService {
  async obtenerSuministrosDeGas() {
    try {
      const suministrosDeGas = await SuministroGas.findAll({
        attributes: ["id_suministro_gas", "descripcion"],
      });
      if (suministrosDeGas.length === 0) {
        throw new Error("No hay suministros de gas");
      }
      return suministrosDeGas;
    } catch (error) {
      console.error("Error al obtener los suministros de gas service:", error);
      throw new Error("Error al obtener los suministros de gas service");
    }
  }
}

export default new ctSuministroGasService();
