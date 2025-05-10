import { ct_infraestructura_suministro_agua } from "../../models/ct_infraestructura_suministro_agua";
import { Op } from "sequelize";

class ctSuministroDeAguaService {
  async obtenerSuministrosDeAgua() {
    try {
      const suministrosDeAgua =
        await ct_infraestructura_suministro_agua.findAll();
      return suministrosDeAgua;
    } catch (error) {
      throw new Error("Error al obtener los suministros de agua");
    }
  }
}

export default new ctSuministroDeAguaService();
