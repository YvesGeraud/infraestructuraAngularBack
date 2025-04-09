import {
  ct_infraestructura_unidad,
  ct_infraestructura_unidadCreationAttributes,
} from "../models/ct_infraestructura_unidad";
import { Op } from "sequelize";

class ctInfraestructuraUnidadService {
  //* Crear una unidad
  async crearUnidad(data: ct_infraestructura_unidadCreationAttributes) {
    try {
      const unidad = await ct_infraestructura_unidad.create(data);
      return unidad;
    } catch (error) {
      throw new Error("Error al crear la unidad");
    }
  }

  async obtenerUnidades() {
    const unidades = await ct_infraestructura_unidad.findAll();
    return unidades;
  }

  async obtenerUnidadesUbicacion() {
    const unidades = await ct_infraestructura_unidad.findAll({
      attributes: ["id_unidad", "nombre_unidad", "ubicacion"],
    });
    return unidades;
  }

  //* Obtener una unidad por su ID
  async obtenerUnidadPorId(id: number) {
    try {
      const unidad = await ct_infraestructura_unidad.findByPk(id);
      return unidad;
    } catch (error) {
      throw new Error("Error al obtener la unidad");
    }
  }

  //* Buscar unidades por nombre
  async buscarPorNombre(termino: string, limit = 10) {
    return await ct_infraestructura_unidad.findAll({
      // Seleccionar solo los atributos necesarios
      attributes: ["id_unidad", "nombre_unidad", "ubicacion"],
      // Buscar en el nombre de la unidad
      where: {
        nombre_unidad: {
          [Op.like]: `%${termino}%`,
        },
      },
    });
  }

  //* Actualizar una unidad por su ID
  async actualizarUnidad(
    id: number,
    data: ct_infraestructura_unidadCreationAttributes
  ) {
    try {
      const unidad = await ct_infraestructura_unidad.findByPk(id);
      if (!unidad) {
        throw new Error("Unidad no encontrada");
      }
      await unidad.update(data);
      return unidad;
    } catch (error) {
      throw new Error("Error al actualizar la unidad");
    }
  }

  //* Eliminar una unidad por su ID
  async eliminarUnidad(id: number) {
    try {
      const unidad = await ct_infraestructura_unidad.findByPk(id);
      if (!unidad) {
        throw new Error("Unidad no encontrada");
      }
      await unidad.destroy();
      return true;
    } catch (error) {
      throw new Error("Error al eliminar la unidad");
    }
  }
}

export default new ctInfraestructuraUnidadService();
