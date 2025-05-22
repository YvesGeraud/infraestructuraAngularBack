import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { Op } from "sequelize";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const {
  ct_infraestructura_unidad: Unidad,
  ct_localidad: Localidad,
  ct_municipio: Municipio,
  ct_infraestructura_sostenimiento: Sostenimiento,
  ct_infraestructura_tipo_escuela: TipoEscuela,
  ct_infraestructura_nivel_educativo: NivelEducativo,
  rl_infraestructura_unidad_nivel: UnidadNivel,
  ct_infraestructura_suministro_agua: SuministroAgua,
  rl_infraestructura_unidad_suministro_agua: UnidadSuministroAgua,
  ct_infraestructura_almacenamiento_agua: AlmacenamientoAgua,
  rl_infraestructura_unidad_almacenamiento_agua: UnidadAlmacenamientoAgua,
} = models;

export class ctInfraestructuraUnidadService {
  //* Obtener todas las unidades
  async obtenerUnidades() {
    try {
      const unidades = await Unidad.findAll({
        attributes: ["id_unidad", "nombre_unidad", "cct", "ubicacion"],
      });
      if (unidades.length === 0) {
        throw new Error("No hay unidades");
      }
      return unidades;
    } catch (error) {
      console.error("Error al obtener las unidades service:", error);
      throw new Error("Error al obtener las unidades service");
    }
  }

  //* Obtener una unidad por su ID
  async obtenerUnidadPorId(id: number) {
    try {
      const unidad = await Unidad.findByPk(id);
      if (!unidad) {
        throw new Error("Unidad no encontrada");
      }
      return unidad;
    } catch (error) {
      console.error("Error al obtener la unidad service:", error);
      throw new Error("Error al obtener la unidad service");
    }
  }

  //* Buscar unidades por nombre
  async buscarPorNombre(termino: string, limit = 10) {
    try {
      return await Unidad.findAll({
        attributes: ["id_unidad", "nombre_unidad", "cct", "ubicacion"],
        where: {
          [Op.or]: [
            { nombre_unidad: { [Op.like]: `%${termino}%` } },
            { cct: { [Op.like]: `%${termino}%` } },
          ],
        },
        include: [
          {
            model: Sostenimiento,
            as: "ct_infraestructura_sostenimiento",
            attributes: ["id_sostenimiento", "sostenimiento"],
          },
          {
            model: TipoEscuela,
            as: "ct_infraestructura_tipo_escuela",
            attributes: ["id_tipo_escuela", "tipo_escuela"],
          },
          {
            model: Localidad,
            as: "ct_localidad",
            attributes: ["id_localidad", "localidad"],
            include: [
              {
                model: Municipio,
                as: "ct_municipio",
                attributes: ["id_municipio", "nombre"],
              },
            ],
          },
        ],
        limit,
      });
    } catch (error) {
      console.error("Error al buscar unidades por nombre service:", error);
      throw new Error("Error al buscar unidades por nombre service");
    }
  }

  //* Obtener unidades por municipio
  async obtenerUnidadesPorMunicipio(idMunicipio: number) {
    try {
      const unidades = await Unidad.findAll({
        include: [
          {
            model: Localidad,
            as: "ct_localidad",
            where: { id_municipio: idMunicipio },
            include: [
              {
                model: Municipio,
                as: "ct_municipio",
                attributes: ["id_municipio", "nombre"],
              },
            ],
          },
          {
            model: Sostenimiento,
            as: "ct_infraestructura_sostenimiento",
            attributes: ["id_sostenimiento", "sostenimiento"],
          },
          {
            model: TipoEscuela,
            as: "ct_infraestructura_tipo_escuela",
            attributes: ["id_tipo_escuela", "tipo_escuela"],
          },
        ],
        attributes: ["id_unidad", "nombre_unidad", "cct", "ubicacion"],
      });
      return unidades;
    } catch (error) {
      console.error("Error al obtener unidades por municipio service:", error);
      throw new Error("Error al obtener unidades por municipio service");
    }
  }

  //* Obtener niveles educativos de una unidad
  async obtenerNivelesEducativosDeUnaUnidad(idUnidad: number) {
    try {
      const niveles = await Unidad.findOne({
        attributes: ["id_unidad"],
        where: { id_unidad: idUnidad },
        include: [
          {
            model: UnidadNivel,
            as: "rl_infraestructura_unidad_nivels",
            attributes: ["id_nivel"],
            include: [
              {
                model: NivelEducativo,
                as: "id_nivel_ct_infraestructura_nivel_educativo",
                attributes: ["id_nivel", "descripcion"],
              },
            ],
          },
        ],
      });
      if (!niveles) {
        return null;
      }
      return niveles;
    } catch (error) {
      console.error(
        "Error al obtener niveles educativos de la unidad service:",
        error
      );
      throw new Error(
        "Error al obtener niveles educativos de la unidad service"
      );
    }
  }

  //* Obtener suministros de agua de una unidad
  async obtenerSuministrosDeAguaDeUnaUnidad(idUnidad: number) {
    try {
      const suministros = await Unidad.findOne({
        attributes: ["id_unidad"],
        where: { id_unidad: idUnidad },
        include: [
          {
            model: UnidadSuministroAgua,
            as: "rl_infraestructura_unidad_suministro_aguas",
            attributes: ["id_suministro_agua"],
            include: [
              {
                model: SuministroAgua,
                as: "id_suministro_agua_ct_infraestructura_suministro_agua",
                attributes: ["id_suministro_agua", "descripcion"],
              },
            ],
          },
        ],
      });

      //! Transformación de la respuesta eliminando redundancia
      if (suministros) {
        return {
          id_unidad: suministros.id_unidad,
          suministros:
            suministros.rl_infraestructura_unidad_suministro_aguas.map(
              (suministro) => ({
                id_suministro_agua:
                  suministro
                    .id_suministro_agua_ct_infraestructura_suministro_agua
                    .id_suministro_agua,
                descripcion:
                  suministro
                    .id_suministro_agua_ct_infraestructura_suministro_agua
                    .descripcion,
              })
            ),
        };
      }
      return null;
    } catch (error) {
      console.error(
        "Error al obtener suministros de agua de la unidad service:",
        error
      );
      throw new Error(
        "Error al obtener suministros de agua de la unidad service"
      );
    }
  }

  //* Obtener almacenamiento de agua de una unidad
  async obtenerAlmacenamientoAguaDeUnaUnidad(idUnidad: number) {
    try {
      const almacenamientoAgua = await Unidad.findOne({
        attributes: ["id_unidad"],
        where: { id_unidad: idUnidad },
        include: [
          {
            model: UnidadAlmacenamientoAgua,
            as: "rl_infraestructura_unidad_almacenamiento_aguas",
            attributes: ["id_almacenamiento"],
            include: [
              {
                model: AlmacenamientoAgua,
                as: "id_almacenamiento_ct_infraestructura_almacenamiento_agua",
                attributes: ["id_almacenamiento", "descripcion"],
              },
            ],
          },
        ],
      });
      if (!almacenamientoAgua) {
        return null;
      }
      return almacenamientoAgua;
    } catch (error) {
      console.error(
        "Error al obtener almacenamiento de agua de la unidad service:",
        error
      );
      throw new Error(
        "Error al obtener almacenamiento de agua de la unidad service"
      );
    }
  }

  //* Crear una unidad
  async crearUnidad(data: any) {
    const transaction = await sequelize.transaction();
    try {
      const unidad = await Unidad.create(data, {
        transaction,
      });
      await transaction.commit();
      return unidad;
    } catch (error: any) {
      await transaction.rollback();
      console.error("Error al crear la unidad service:", error);
      throw new Error("Error al crear la unidad service");
    }
  }

  //* Actualizar campos de una unidad
  async actualizarCamposUnidad(id: number, campos: { [key: string]: any }) {
    const transaction = await sequelize.transaction();
    try {
      const unidad = await Unidad.findByPk(id, {
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
      console.error("Error al actualizar los campos service:", error);
      throw new Error("Error al actualizar los campos service");
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
      const unidad = await Unidad.findByPk(id, {
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
      console.error("Error al eliminar la unidad service:", error);
      throw new Error("Error al eliminar la unidad service");
    }
  }
}

export default new ctInfraestructuraUnidadService();
