import { ct_infraestructura_suministro_agua } from "../../models/ct_infraestructura_suministro_agua";

class ctSuministroDeAguaService {
  //* Obtener todos los suministros de agua
  async obtenerSuministrosDeAgua() {
    try {
      const suministrosDeAgua =
        await ct_infraestructura_suministro_agua.findAll();
      return suministrosDeAgua;
    } catch (error) {
      console.error("Error al obtener los suministros de agua service:", error);
      throw error;
    }
  }
}

export default new ctSuministroDeAguaService();
