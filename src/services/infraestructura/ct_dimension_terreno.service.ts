import { ct_infraestructura_dimension_terreno } from "../../models/ct_infraestructura_dimension_terreno";
import { Op } from "sequelize";

export class CtDimencionTerrenoService {
  async obtenerDimencionTerreno() {
    const dimencionTerreno =
      await ct_infraestructura_dimension_terreno.findAll();
    return dimencionTerreno;
  }
}

export default new CtDimencionTerrenoService();
