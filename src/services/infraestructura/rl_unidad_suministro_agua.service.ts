import { rl_infraestructura_unidad_suministro_agua } from "../../models/rl_infraestructura_unidad_suministro_agua";
import { Op } from "sequelize";

class rlSuministroDeAguaService {
  async obtenerSuministrosDeAgua() {
    try {
      const suministrosDeAgua =
        await rl_infraestructura_unidad_suministro_agua.findAll();
      return suministrosDeAgua;
    } catch (error) {
      throw new Error("Error al obtener los suministros de agua");
    }
  }
}

export default new rlSuministroDeAguaService();
