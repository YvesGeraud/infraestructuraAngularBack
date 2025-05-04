import { ct_infraestructura_espacio_inmueble } from "../../models/ct_infraestructura_espacio_inmueble";
import { Op } from "sequelize";

export class CtEspacioInmueblesService {
  async obtenerEspaciosInmuebles() {
    try {
      const espaciosInmuebles =
        await ct_infraestructura_espacio_inmueble.findAll();
      return espaciosInmuebles;
    } catch (error) {
      throw new Error("Error al obtener los espacios de inmuebles");
    }
  }
}

export default new CtEspacioInmueblesService();
