import {
  ct_infraestructura_unidad,
  ct_infraestructura_unidadCreationAttributes,
} from "../../models/ct_infraestructura_unidad";
import { ct_infraestructura_sostenimiento } from "../../models/ct_infraestructura_sostenimiento";
import { ct_infraestructura_tipo_escuela } from "../../models/ct_infraestructura_tipo_escuela";
import { Op, Transaction } from "sequelize";
import { ct_localidad } from "../../models/ct_localidad";
import { ct_municipio } from "../../models/ct_municipio";
import { sequelize } from "../../config/database";
import { ct_infraestructura_nivel_educativo } from "../../models/ct_infraestructura_nivel_educativo";
import { rl_infraestructura_unidad_nivel } from "../../models/rl_infraestructura_unidad_nivel";
import { rl_infraestructura_unidad_suministro_agua } from "../../models/rl_infraestructura_unidad_suministro_agua";
import { ct_infraestructura_suministro_agua } from "../../models/ct_infraestructura_suministro_agua";
import { rl_infraestructura_unidad_almacenamiento_agua } from "../../models/rl_infraestructura_unidad_almacenamiento_agua";
import { ct_infraestructura_almacenamiento_agua } from "../../models/ct_infraestructura_almacenamiento_agua";
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

  //* Obtener niveles educativos de una unidad
  async obtenerNivelesEducativosDeUnaUnidad(idUnidad: number) {
    const niveles = await ct_infraestructura_unidad.findOne({
      attributes: ["id_unidad"],
      where: {
        id_unidad: idUnidad,
      },
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
    return niveles;
  }

  //* Obtener suministros de agua de una unidad
  async obtenerSuministrosDeAguaDeUnaUnidad(idUnidad: number) {
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
    return suministros;
  }

  //* Obtener almacenamiento de agua de una unidad
  async obtenerAlmacenamientoAguaDeUnaUnidad(idUnidad: number) {
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
    return almacenamientoAgua;
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
