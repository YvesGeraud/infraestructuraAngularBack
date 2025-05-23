import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { Op } from "sequelize";

const models = initModels(sequelize);

const { ct_infraestructura_tipo_descarga: TipoDescarga } = models;

class ctTipoDescargaService {
  async obtenerTipoDescarga() {
    try {
      const tipoDescarga = await TipoDescarga.findAll({
        attributes: ["id_tipo_descarga", "descripcion"],
      });
      if (tipoDescarga.length === 0) {
        throw new Error("No hay tipo de descarga");
      }
      return tipoDescarga;
    } catch (error) {
      console.error("Error al obtener los tipo de descarga service:", error);
      throw new Error("Error al obtener los tipo de descarga service");
    }
  }
}

export default new ctTipoDescargaService();
