import { ct_infraestructura_nivel_educativo } from "../../models/ct_infraestructura_nivel_educativo";
import { Op } from "sequelize";

class ctNivelEducativoService {
  async obtenerNivelesEducativos() {
    try {
      const nivelesEducativos =
        await ct_infraestructura_nivel_educativo.findAll();
      return nivelesEducativos;
    } catch (error) {
      throw new Error("Error al obtener los niveles educativos");
    }
  }
}

export default new ctNivelEducativoService();
