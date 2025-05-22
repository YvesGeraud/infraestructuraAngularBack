import {
  ct_infraestructura_unidad,
  ct_infraestructura_unidadCreationAttributes,
} from "../../models/ct_infraestructura_unidad";
import { ct_infraestructura_sostenimiento } from "../../models/ct_infraestructura_sostenimiento";
import { ct_infraestructura_tipo_escuela } from "../../models/ct_infraestructura_tipo_escuela";
import { Op } from "sequelize";
import { ct_localidad } from "../../models/ct_localidad";
import { ct_municipio } from "../../models/ct_municipio";
import { sequelize } from "../../config/database";
import { ct_infraestructura_nivel_educativo } from "../../models/ct_infraestructura_nivel_educativo";
import { rl_infraestructura_unidad_nivel } from "../../models/rl_infraestructura_unidad_nivel";
import { rl_infraestructura_unidad_suministro_agua } from "../../models/rl_infraestructura_unidad_suministro_agua";
import { ct_infraestructura_suministro_agua } from "../../models/ct_infraestructura_suministro_agua";
import { rl_infraestructura_unidad_almacenamiento_agua } from "../../models/rl_infraestructura_unidad_almacenamiento_agua";
import { ct_infraestructura_almacenamiento_agua } from "../../models/ct_infraestructura_almacenamiento_agua";

export class ctInfraestructuraUnidadService {
  //* Obtener todas las unidades
  async obtenerUnidades() {
    try {
      const unidades = await ct_infraestructura_unidad.findAll();
      return unidades;
    } catch (error) {
      throw new Error("Error al obtener las unidades");
    }
  }

  //* Obtener una unidad por su ID
  async obtenerUnidadPorId(id: number) {
    try {
      const unidad = await ct_infraestructura_unidad.findByPk(id);
      if (!unidad) {
        throw new Error("Unidad no encontrada");
      }
      return unidad;
    } catch (error) {
      throw new Error("Error al obtener la unidad");
    }
  }

  //* Buscar unidades por nombre
  async buscarPorNombre(termino: string, limit = 10) {
    try {
      return await ct_infraestructura_unidad.findAll({
        attributes: ["id_unidad", "nombre_unidad", "cct", "ubicacion"],
        where: {
          [Op.or]: [
            { nombre_unidad: { [Op.like]: `%${termino}%` } },
            { cct: { [Op.like]: `%${termino}%` } },
          ],
        },
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
    } catch (error) {
      throw new Error("Error al buscar unidades por nombre");
    }
  }

  //* Obtener unidades por municipio
  async obtenerUnidadesPorMunicipio(idMunicipio: number) {
    try {
      const unidades = await ct_infraestructura_unidad.findAll({
        include: [
          {
            model: ct_localidad,
            as: "localidad",
            where: { id_municipio: idMunicipio },
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

  //* Obtener niveles educativos de una unidad
  async obtenerNivelesEducativosDeUnaUnidad(idUnidad: number) {
    try {
      const niveles = await ct_infraestructura_unidad.findOne({
        attributes: ["id_unidad"],
        where: { id_unidad: idUnidad },
        include: [
          {
            model: rl_infraestructura_unidad_nivel,
            as: "niveles",
            attributes: ["id_nivel"],
            include: [
              {
                model: ct_infraestructura_nivel_educativo,
                as: "nivel",
                attributes: ["id_nivel", "descripcion"],
              },
            ],
          },
        ],
      });
      if (!niveles) {
        throw new Error("Unidad no encontrada");
      }
      return niveles;
    } catch (error) {
      throw new Error(
        "Error al obtener niveles educativos de la unidad service"
      );
    }
  }

  //* Obtener suministros de agua de una unidad
  async obtenerSuministrosDeAguaDeUnaUnidad(idUnidad: number) {
    try {
      const suministros = await ct_infraestructura_unidad.findOne({
        attributes: ["id_unidad"],
        where: { id_unidad: idUnidad },
        include: [
          {
            model: rl_infraestructura_unidad_suministro_agua,
            as: "suministros",
            attributes: ["id_suministro_agua"],
            include: [
              {
                model: ct_infraestructura_suministro_agua,
                as: "suministro",
                attributes: ["id_suministro_agua", "descripcion"],
              },
            ],
          },
        ],
      });
      if (!suministros) {
        throw new Error("Unidad no encontrada");
      }
      return suministros;
    } catch (error) {
      throw new Error("Error al obtener suministros de agua de la unidad");
    }
  }

  //* Obtener almacenamiento de agua de una unidad
  async obtenerAlmacenamientoAguaDeUnaUnidad(idUnidad: number) {
    try {
      const almacenamientoAgua = await ct_infraestructura_unidad.findOne({
        attributes: ["id_unidad"],
        where: { id_unidad: idUnidad },
        include: [
          {
            model: rl_infraestructura_unidad_almacenamiento_agua,
            as: "almacenamientos",
            attributes: ["id_almacenamiento"],
            include: [
              {
                model: ct_infraestructura_almacenamiento_agua,
                as: "almacenamiento",
                attributes: ["id_almacenamiento", "descripcion"],
              },
            ],
          },
        ],
      });
      if (!almacenamientoAgua) {
        throw new Error("Unidad no encontrada");
      }
      return almacenamientoAgua;
    } catch (error) {
      throw new Error("Error al obtener almacenamiento de agua de la unidad");
    }
  }

  //* Crear una unidad
  async crearUnidad(data: ct_infraestructura_unidadCreationAttributes) {
    const transaction = await sequelize.transaction();
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

  //* Actualizar campos de una unidad
  async actualizarCamposUnidad(id: number, campos: { [key: string]: any }) {
    const transaction = await sequelize.transaction();
    try {
      const unidad = await ct_infraestructura_unidad.findByPk(id, {
        transaction,
      });
      if (!unidad) {
        await transaction.rollback();
        throw new Error("Unidad no encontrada");
      }

      await unidad.update(campos, { transaction });
      await transaction.commit();
      return { message: "Unidad actualizada correctamente" };
    } catch (error: any) {
      await transaction.rollback();
      throw new Error(`Error al actualizar los campos: ${error.message}`);
    }
  }

  //* Helper para actualizar un solo campo
  async actualizarCampoUnidad(id: number, campo: string, valor: any) {
    return this.actualizarCamposUnidad(id, { [campo]: valor });
  }

  //* Eliminar una unidad por su ID
  async eliminarUnidad(id: number) {
    const transaction = await sequelize.transaction();
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
