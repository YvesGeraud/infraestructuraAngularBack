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
      const espaciosInmuebles = await EspacioInmueble.findAll();
      return espaciosInmuebles;
    } catch (error) {
      console.error("Error al obtener los espacios de inmuebles:", error);
      throw error;
    }
  }
}

export default new CtEspacioInmueblesService();
