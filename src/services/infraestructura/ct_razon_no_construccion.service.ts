import { ct_infraestructura_razon_no_construccion } from "../../models/ct_infraestructura_razon_no_construccion";
import { Op } from "sequelize";

class ctRazonNoConstruccionService {
  async obtenerRazonesNoConstruccion() {
    try {
      const razonesNoConstruccion =
        await ct_infraestructura_razon_no_construccion.findAll();
      return razonesNoConstruccion;
    } catch (error) {
      throw new Error("Error al obtener las razones de no construcción");
    }
  }
}

export default new ctRazonNoConstruccionService();
