import { ct_infraestructura_fin_inmueble } from "../../models/ct_infraestructura_fin_inmueble";
import { Op } from "sequelize";

class ctInfraestructuraFinInmuebleService {
  //* Obtener todos los tipos de fin de inmueble
  async obtenerTiposFinInmueble() {
    try {
      return await ct_infraestructura_fin_inmueble.findAll();
    } catch (error) {
      throw new Error("Error al obtener los tipos de fin de inmueble");
    }
  }
}

export default new ctInfraestructuraFinInmuebleService();
