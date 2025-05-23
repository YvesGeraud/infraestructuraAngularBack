import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { Op } from "sequelize";

const models = initModels(sequelize);

const { ct_infraestructura_suministro_energia: SuministroEnergia } = models;

class ctSuministroEnergiaService {
  async obtenerSuministrosDeEnergia() {
    try {
      const suministrosDeEnergia = await SuministroEnergia.findAll({
        attributes: ["id_suministro_energia", "descripcion"],
      });
      if (suministrosDeEnergia.length === 0) {
        throw new Error("No hay suministros de energía");
      }
      return suministrosDeEnergia;
    } catch (error) {
      console.error(
        "Error al obtener los suministros de energía service:",
        error
      );
      throw new Error("Error al obtener los suministros de energía service");
    }
  }
}

export default new ctSuministroEnergiaService();
