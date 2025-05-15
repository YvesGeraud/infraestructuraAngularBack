import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_dimension_terreno: DimensionTerreno } = models;

export class CtDimencionTerrenoService {
  //* Obtener todas las dimensiones de terreno
  async obtenerDimencionTerreno() {
    try {
      const dimencionTerreno = await DimensionTerreno.findAll();
      return dimencionTerreno;
    } catch (error) {
      console.error("Error al obtener dimensiones de terreno:", error);
      throw error;
    }
  }
}

export default new CtDimencionTerrenoService();
