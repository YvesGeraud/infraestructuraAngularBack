import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_fin_inmueble: FinInmueble } = models;

class ctInfraestructuraFinInmuebleService {
  //* Obtener todos los tipos de fin de inmueble
  async obtenerTiposFinInmueble() {
    try {
      const tiposFinInmueble = await FinInmueble.findAll();
      return tiposFinInmueble;
    } catch (error) {
      console.error("Error al obtener los tipos de fin de inmueble:", error);
      throw error;
    }
  }
}

export default new ctInfraestructuraFinInmuebleService();
