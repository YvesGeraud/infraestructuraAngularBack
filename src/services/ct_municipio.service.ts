import { ct_municipio } from "../models/ct_municipio";
import { Op } from "sequelize";

class ctMunicipiosService {
  async obtenerMunicipios() {
    const municipios = await ct_municipio.findAll();
    if (!municipios) {
      throw new Error("No se encontraron municipios");
    }
    return municipios;
  }
}

export default new ctMunicipiosService();
