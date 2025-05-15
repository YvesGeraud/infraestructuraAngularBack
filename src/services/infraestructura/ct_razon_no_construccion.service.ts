import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_razon_no_construccion: RazonNoConstruccion } =
  models;

class ctRazonNoConstruccionService {
  //* Obtener todas las razones de no construcción
  async obtenerRazonesNoConstruccion() {
    try {
      const razonesNoConstruccion = await RazonNoConstruccion.findAll();
      return razonesNoConstruccion;
    } catch (error) {
      console.error("Error al obtener las razones de no construcción:", error);
      throw error;
    }
  }
}

export default new ctRazonNoConstruccionService();
