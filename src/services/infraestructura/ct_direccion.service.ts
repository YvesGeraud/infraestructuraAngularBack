import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_direccion: Direccion } = models;

export class CtDireccionService {
  //* Obtener todas las direcciones
  async obtenerDirecciones() {
    try {
      const direcciones = await Direccion.findAll({
        attributes: ["id_direccion", "descripcion"],
      });
      if (direcciones.length === 0) {
        throw new Error("No hay direcciones");
      }
      return direcciones;
    } catch (error) {
      console.error("Error al obtener direcciones service:", error);
      throw new Error("Error al obtener direcciones service");
    }
  }

  //* Obtener una dirección por su ID
  async obtenerDireccionPorId(id: number) {
    try {
      const direccion = await Direccion.findByPk(id);
      if (!direccion) {
        throw new Error("Dirección no encontrada");
      }
      return direccion;
    } catch (error) {
      console.error("Error al obtener la dirección service:", error);
      throw new Error("Error al obtener la dirección service");
    }
  }
}

export default new CtDireccionService();
