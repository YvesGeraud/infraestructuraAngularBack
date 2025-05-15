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
      const municipios = await Municipio.findAll();
      return municipios;
    } catch (error) {
      console.error("Error al obtener municipios:", error);
      throw error;
    }
  }
}

export default new ctMunicipiosService();
