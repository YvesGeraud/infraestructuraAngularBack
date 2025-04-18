import { ct_localidad } from "../models/ct_localidad";
import { Op } from "sequelize";

class ctLocalidadService {
  async obtenerLocalidades() {
    const localidades = await ct_localidad.findAll();
    if (!localidades) {
      throw new Error("No se encontraron localidades");
    }
    return localidades;
  }

  async obtenerLocalidadPorId(id: number) {
    const localidad = await ct_localidad.findByPk(id);
    if (!localidad) {
      throw new Error("No se encontró la localidad");
    }
    return localidad;
  }
}

export default new ctLocalidadService();
