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
      const direcciones = await Direccion.findAll();
      return direcciones;
    } catch (error) {
      console.error("Error al obtener direcciones:", error);
      throw error;
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
      console.error("Error al obtener la dirección:", error);
      throw error;
    }
  }
}

export default new CtDireccionService();
