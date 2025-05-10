import { ct_infraestructura_almacenamiento_agua } from "../../models/ct_infraestructura_almacenamiento_agua";
import { Op } from "sequelize";

class rlUnidadAlmacenamientoAguaService {
  async obtenerAlmacenamientoAgua() {
    try {
      const almacenamientoAgua =
        await ct_infraestructura_almacenamiento_agua.findAll();
      return almacenamientoAgua;
    } catch (error) {
      console.error("Error al obtener almacenamiento de agua:", error);
      throw error;
    }
  }
}

export default new rlUnidadAlmacenamientoAguaService();
