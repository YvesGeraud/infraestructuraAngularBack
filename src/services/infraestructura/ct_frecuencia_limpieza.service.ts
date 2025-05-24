import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_frecuencia_limpieza: FrecuenciaLimpieza } = models;

class ctFrecuenciaLimpiezaService {
  //* Obtener todos los tipos de frecuencia de limpieza
  async obtenerTiposFrecuenciaLimpieza() {
    try {
      const tiposFrecuenciaLimpieza = await FrecuenciaLimpieza.findAll({
        attributes: ["id_frecuencia", "descripcion"],
      });
      if (tiposFrecuenciaLimpieza.length === 0) {
        throw new Error("No hay tipos de frecuencia de limpieza");
      }
      return tiposFrecuenciaLimpieza;
    } catch (error) {
      console.error(
        "Error al obtener los tipos de frecuencia de limpieza service:",
        error
      );
      throw new Error(
        "Error al obtener los tipos de frecuencia de limpieza service"
      );
    }
  }
}

export default new ctFrecuenciaLimpiezaService();
