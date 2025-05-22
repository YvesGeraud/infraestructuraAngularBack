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
      const tiposFinInmueble = await FinInmueble.findAll({
        attributes: ["id_fin_inmueble", "descripcion"],
      });
      if (tiposFinInmueble.length === 0) {
        throw new Error("No hay tipos de fin de inmueble");
      }
      return tiposFinInmueble;
    } catch (error) {
      console.error(
        "Error al obtener los tipos de fin de inmueble service:",
        error
      );
      throw new Error("Error al obtener los tipos de fin de inmueble service");
    }
  }
}

export default new ctInfraestructuraFinInmuebleService();
