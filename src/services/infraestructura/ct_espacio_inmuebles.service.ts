import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_espacio_inmueble: EspacioInmueble } = models;

export class CtEspacioInmueblesService {
  //* Obtener todos los espacios de inmuebles
  async obtenerEspaciosInmuebles() {
    try {
      const espaciosInmuebles = await EspacioInmueble.findAll({
        attributes: ["id_espacio_inmueble", "descripcion"],
      });
      if (espaciosInmuebles.length === 0) {
        throw new Error("No hay espacios de inmuebles");
      }
      return espaciosInmuebles;
    } catch (error) {
      console.error(
        "Error al obtener los espacios de inmuebles service:",
        error
      );
      throw new Error("Error al obtener los espacios de inmuebles service");
    }
  }
}

export default new CtEspacioInmueblesService();
