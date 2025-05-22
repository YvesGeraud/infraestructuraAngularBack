import { initModels } from "../models/init-models";
import { sequelize } from "../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_municipio: Municipio } = models;

class ctMunicipiosService {
  //* Obtener todos los municipios
  async obtenerMunicipios() {
    try {
      const municipios = await Municipio.findAll({
        attributes: ["id_municipio", "descripcion"],
      });
      if (municipios.length === 0) {
        throw new Error("No hay municipios");
      }
      return municipios;
    } catch (error) {
      console.error("Error al obtener municipios:", error);
      throw new Error("Error al obtener municipios");
    }
  }
}

export default new ctMunicipiosService();
