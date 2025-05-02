import { ct_infraestructura_nivel_educativo } from "../models/ct_infraestructura_nivel_educativo";
import { Op } from "sequelize";

class ctNivelEducativoService {
  async obtenerNivelesEducativos() {
    const nivelesEducativos =
      await ct_infraestructura_nivel_educativo.findAll();
    if (!nivelesEducativos) {
      throw new Error("No se encontraron niveles educativos");
    }
    return nivelesEducativos;
  }
}

export default new ctNivelEducativoService();
