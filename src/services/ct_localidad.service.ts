import { initModels } from "../models/init-models";
import { sequelize } from "../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_localidad: Localidad } = models;

class ctLocalidadService {
  //* Obtener todas las localidades
  async obtenerLocalidades() {
    try {
      const localidades = await Localidad.findAll();
      return localidades;
    } catch (error) {
      console.error("Error al obtener localidades:", error);
      throw error;
    }
  }

  //* Obtener una localidad por su ID
  async obtenerLocalidadPorId(id: number) {
    try {
      const localidad = await Localidad.findByPk(id);
      if (!localidad) {
        throw new Error("No se encontró la localidad");
      }
      return localidad;
    } catch (error) {
      console.error("Error al obtener la localidad por ID:", error);
      throw error;
    }
  }
}

export default new ctLocalidadService();
