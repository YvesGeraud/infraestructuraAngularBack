import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { IDimensionTerrenoResponse } from "../../interfaces/ct_dimension_terreno.interface";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_dimension_terreno: DimensionTerreno } = models;

export class CtDimencionTerrenoService {
  //* Obtener todas las dimensiones de terreno
  async obtenerDimencionTerreno(): Promise<IDimensionTerrenoResponse[]> {
    try {
      const dimencionTerreno = await DimensionTerreno.findAll({
        attributes: ["id_dimension", "descripcion"],
      });
      return dimencionTerreno.map((dimension) => ({
        id_dimension: dimension.id_dimension,
        nombre: dimension.descripcion,
      }));
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          "Error al obtener dimensiones de terreno:",
          error.message
        );
        throw new Error(
          `Error al obtener dimensiones de terreno: ${error.message}`
        );
      }
      console.error(
        "Error inesperado al obtener dimensiones de terreno:",
        error
      );
      throw new Error("Error inesperado al obtener dimensiones de terreno");
    }
  }
}

export default new CtDimencionTerrenoService();
