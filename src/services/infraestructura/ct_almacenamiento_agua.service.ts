import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { Op } from "sequelize";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_almacenamiento_agua: AlmacenamientoAgua } = models;

export class CtAlmacenamientoAguaService {
  //* Obtener todos los almacenamientos de agua
  async obtenerAlmacenamientoAgua() {
    try {
      const almacenamientoAgua = await AlmacenamientoAgua.findAll({
        attributes: ["id_almacenamiento_agua", "descripcion"],
      });
      if (almacenamientoAgua.length === 0) {
        throw new Error("No hay almacenamientos de agua");
      }
      return almacenamientoAgua;
    } catch (error) {
      console.error("Error al obtener almacenamiento de agua:", error);
      throw new Error("Error al obtener almacenamiento de agua");
    }
  }
}

export default new CtAlmacenamientoAguaService();
