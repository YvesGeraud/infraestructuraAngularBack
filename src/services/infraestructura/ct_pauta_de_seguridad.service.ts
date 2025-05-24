import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_pauta_de_seguridad: PautaSeguridad } = models;

class ctInfraestructuraPautaSeguridadService {
  //* Obtener todas las pautas de seguridad
  async obtenerPautasSeguridad() {
    try {
      const pautasSeguridad = await PautaSeguridad.findAll({
        attributes: ["id_pauta", "descripcion"],
      });
      if (pautasSeguridad.length === 0) {
        throw new Error("No hay pautas de seguridad");
      }
      return pautasSeguridad;
    } catch (error) {
      console.error("Error al obtener las pautas de seguridad service:", error);
      throw new Error("Error al obtener las pautas de seguridad service");
    }
  }
}

export default new ctInfraestructuraPautaSeguridadService();
