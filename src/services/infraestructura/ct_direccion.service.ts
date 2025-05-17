import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import {
  IDireccion,
  IDireccionResponse,
} from "../../interfaces/ct_direccion.interface";
//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_direccion: Direccion } = models;

export class CtDireccionService {
  //* Obtener todas las direcciones
  async obtenerDirecciones(): Promise<IDireccionResponse[]> {
    try {
      const direcciones = await Direccion.findAll({
        attributes: ["id_direccion", "nombre"],
      });
      return direcciones.map((direccion) => ({
        id_direccion: direccion.id_direccion,
        nombre: direccion.nombre,
      }));
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error al obtener direcciones:", error.message);
        throw new Error(`Error al obtener direcciones: ${error.message}`);
      }
      console.error("Error inesperado al obtener direcciones:", error);
      throw new Error("Error inesperado al obtener direcciones");
    }
  }

  //* Obtener una dirección por su ID
  async obtenerDireccionPorId(id: number): Promise<IDireccionResponse> {
    try {
      if (!id || id <= 0) {
        throw new Error("ID de dirección inválido");
      }

      const direccion = await Direccion.findOne({
        attributes: ["id_direccion", "nombre"],
        where: {
          id_direccion: id,
          estado: 1,
        },
      });

      if (!direccion) {
        throw new Error(`No se encontró la dirección con ID: ${id}`);
      }

      return {
        id_direccion: direccion.id_direccion,
        nombre: direccion.nombre,
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al obtener la dirección: ${error.message}`);
        throw new Error(`Error al obtener la dirección: ${error.message}`);
      }
      console.error("Error inesperado al obtener la dirección:", error);
      throw new Error("Error inesperado al obtener la dirección");
    }
  }
}

export default new CtDireccionService();
