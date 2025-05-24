import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_construccion_inmueble: ConstruccionInmueble } =
  models;

class ctConstruccionInmuebleService {
  //* Obtener todos los tipos de construccion inmueble
  async obtenerTiposConstruccionInmueble() {
    try {
      const tiposConstruccionInmueble = await ConstruccionInmueble.findAll({
        attributes: ["id_construccion", "descripcion"],
      });
      if (tiposConstruccionInmueble.length === 0) {
        throw new Error("No hay tipos de construccion inmueble");
      }
      return tiposConstruccionInmueble;
    } catch (error) {
      console.error(
        "Error al obtener los tipos de construccion inmueble service:",
        error
      );
      throw new Error(
        "Error al obtener los tipos de construccion inmueble service"
      );
    }
  }
}

export default new ctConstruccionInmuebleService();
