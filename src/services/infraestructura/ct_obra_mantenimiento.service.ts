import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_obra_mantenimiento: ObraMantenimiento } = models;

class ctInfraestructuraObraMantenimientoService {
  //* Obtener todos los tipos de obra de mantenimiento
  async obtenerTiposObraMantenimiento() {
    try {
      const tiposObraMantenimiento = await ObraMantenimiento.findAll({
        attributes: ["id_obra", "descripcion"],
      });
      if (tiposObraMantenimiento.length === 0) {
        throw new Error("No hay tipos de obra de mantenimiento");
      }
      return tiposObraMantenimiento;
    } catch (error) {
      console.error(
        "Error al obtener los tipos de obra de mantenimiento service:",
        error
      );
      throw new Error(
        "Error al obtener los tipos de obra de mantenimiento service"
      );
    }
  }
}

export default new ctInfraestructuraObraMantenimientoService();
