import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { Op } from "sequelize";

const models = initModels(sequelize);

const { ct_infraestructura_tipo_construccion: TipoConstruccion } = models;

class ctTipoConstruccionService {
  async obtenerTiposDeConstruccion() {
    try {
      const tiposDeConstruccion = await TipoConstruccion.findAll({
        attributes: ["id_construccion", "descripcion"],
      });
      if (tiposDeConstruccion.length === 0) {
        throw new Error("No hay tipos de construccion");
      }
      return tiposDeConstruccion;
    } catch (error) {
      console.error(
        "Error al obtener los tipos de construccion service:",
        error
      );
      throw new Error("Error al obtener los tipos de construccion service");
    }
  }
}

export default new ctTipoConstruccionService();
