import { initModels } from "../../models/init-models";
import { Op } from "sequelize";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_almacenamiento_agua: AlmacenamientoAgua } = models;

export class CtAlmacenamientoAguaService {
  //* Obtener todos los almacenamientos de agua
  async obtenerAlmacenamientoAgua() {
    try {
      const almacenamientoAgua = await AlmacenamientoAgua.findAll();
      return almacenamientoAgua;
    } catch (error) {
      console.error("Error al obtener almacenamiento de agua:", error);
      throw error;
    }
  }
}

export default new CtAlmacenamientoAguaService();
