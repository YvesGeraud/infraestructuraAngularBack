import {
  ct_infraestructura_unidad,
  ct_infraestructura_unidadCreationAttributes,
} from "../models/ct_infraestructura_unidad";
import { ct_infraestructura_sostenimiento } from "../models/ct_infraestructura_sostenimiento";
import { ct_infraestructura_tipo_escuela } from "../models/ct_infraestructura_tipo_escuela";
import { Op, Transaction } from "sequelize";
import { ct_localidad } from "../models/ct_localidad";
import { ct_municipio } from "../models/ct_municipio";
import db from "../config/database";

class ctInfraestructuraUnidadService {
  //* Obtener todas las unidades
  async obtenerUnidades() {
    const unidades = await ct_infraestructura_unidad.findAll();
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
      attributes: ["id_unidad", "nombre_unidad", "cct", "ubicacion"],
      // Buscar en el nombre de la unidad
      where: {
        [Op.or]: [
          { nombre_unidad: { [Op.like]: `%${termino}%` } },
          { cct: { [Op.like]: `%${termino}%` } },
        ],
      },
      // Incluir el sostenimiento de la unidad
      include: [
        {
          model: ct_infraestructura_sostenimiento,
          as: "sostenimiento",
          attributes: ["id_sostenimiento", "sostenimiento"],
        },
        {
          model: ct_infraestructura_tipo_escuela,
          as: "tipo_escuela",
          attributes: ["id_tipo_escuela", "tipo_escuela"],
        },
        {
          model: ct_localidad,
          as: "localidad",
          attributes: ["id_localidad", "localidad"],
          include: [
            {
              model: ct_municipio,
              as: "municipio",
              attributes: ["id_municipio", "nombre"],
            },
          ],
        },
      ],
      limit,
    });
  }

  //* Obtener unidades por id_municipio
  async obtenerUnidadesPorMunicipio(idMunicipio: number) {
    try {
      const unidades = await ct_infraestructura_unidad.findAll({
        include: [
          {
            model: ct_localidad,
            as: "localidad",
            where: {
              id_municipio: idMunicipio,
            },
            include: [
              {
                model: ct_municipio,
                as: "municipio",
                attributes: ["id_municipio", "nombre"],
              },
            ],
          },
          {
            model: ct_infraestructura_sostenimiento,
            as: "sostenimiento",
            attributes: ["id_sostenimiento", "sostenimiento"],
          },
          {
            model: ct_infraestructura_tipo_escuela,
            as: "tipo_escuela",
            attributes: ["id_tipo_escuela", "tipo_escuela"],
          },
        ],
        attributes: ["id_unidad", "nombre_unidad", "cct", "ubicacion"],
      });
      return unidades;
    } catch (error) {
      throw new Error("Error al obtener unidades por municipio");
    }
  }

  //* Crear una unidad
  async crearUnidad(data: ct_infraestructura_unidadCreationAttributes) {
    const transaction = await db.transaction();
    try {
      const unidad = await ct_infraestructura_unidad.create(data, {
        transaction,
      });
      await transaction.commit();
      return unidad;
    } catch (error: any) {
      await transaction.rollback();
      throw new Error("Error al crear la unidad: " + error.message);
    }
  }

  //* Actualizar una unidad por su ID
  async actualizarUnidad(
    id: number,
    data: ct_infraestructura_unidadCreationAttributes
  ) {
    const transaction = await db.transaction();
    try {
      const unidad = await ct_infraestructura_unidad.findByPk(id, {
        transaction,
      });
      if (!unidad) {
        await transaction.rollback();
        throw new Error("Unidad no encontrada");
      }
      await unidad.update(data, { transaction });
      await transaction.commit();
      return unidad;
    } catch (error: any) {
      await transaction.rollback();
      throw new Error("Error al actualizar la unidad: " + error.message);
    }
  }

  //* Eliminar una unidad por su ID
  async eliminarUnidad(id: number) {
    const transaction = await db.transaction();
    try {
      const unidad = await ct_infraestructura_unidad.findByPk(id, {
        transaction,
      });
      if (!unidad) {
        await transaction.rollback();
        throw new Error("Unidad no encontrada");
      }
      await unidad.destroy({ transaction });
      await transaction.commit();
      return true;
    } catch (error: any) {
      await transaction.rollback();
      throw new Error("Error al eliminar la unidad: " + error.message);
    }
  }
}

export default new ctInfraestructuraUnidadService();
