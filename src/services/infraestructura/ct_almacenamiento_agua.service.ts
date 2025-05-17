import { initModels } from "../../models/init-models";
import { Op } from "sequelize";
import { sequelize } from "../../config/database";
import {
  IAlmacenamientoAgua,
  IAlmacenamientoAguaResponse,
} from "../../interfaces/ct_almacenamiento_agua.interface";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_almacenamiento_agua: AlmacenamientoAgua } = models;

export class CtAlmacenamientoAguaService {
  //* Obtener todos los almacenamientos de agua
  async obtenerAlmacenamientoAgua(): Promise<IAlmacenamientoAguaResponse[]> {
    try {
      const almacenamientoAgua = await AlmacenamientoAgua.findAll({
        attributes: ["id_almacenamiento", "descripcion"],
      });
      return almacenamientoAgua.map((almacenamiento) => ({
        id_almacenamiento_agua: almacenamiento.id_almacenamiento,
        nombre: almacenamiento.descripcion,
      }));
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `Error al obtener almacenamiento de agua: ${error.message}`
        );
        throw new Error(
          `Error al obtener almacenamiento de agua: ${error.message}`
        );
      }
      console.error(
        "Error inesperado al obtener almacenamiento de agua:",
        error
      );
      throw new Error("Error inesperado al obtener almacenamiento de agua");
    }
  }
}

export default new CtAlmacenamientoAguaService();
