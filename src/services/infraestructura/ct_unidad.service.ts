import {
  ct_infraestructura_unidadCreationAttributes,
  initModels,
} from "../../models/init-models";
import { Op } from "sequelize";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const {
  ct_infraestructura_unidad: Unidad,
  ct_infraestructura_sostenimiento: Sostenimiento,
  ct_infraestructura_tipo_escuela: TipoEscuela,
  ct_localidad: Localidad,
  ct_municipio: Municipio,
  ct_infraestructura_nivel_educativo: NivelEducativo,
  rl_infraestructura_unidad_nivel: UnidadNivel,
  rl_infraestructura_unidad_suministro_agua: UnidadSuministroAgua,
  ct_infraestructura_suministro_agua: SuministroAgua,
  rl_infraestructura_unidad_almacenamiento_agua: UnidadAlmacenamientoAgua,
  ct_infraestructura_almacenamiento_agua: AlmacenamientoAgua,
} = models;

class ctInfraestructuraUnidadService {
  //* Obtener todas las unidades
  async obtenerUnidades() {
    const unidades = await Unidad.findAll();
    return unidades;
  }

  //* Obtener una unidad por su ID
  async obtenerUnidadPorId(id: number) {
    try {
      const unidad = await Unidad.findByPk(id);
      return unidad;
    } catch (error) {
      throw new Error("Error al obtener la unidad");
    }
  }

  //* Buscar unidades por nombre
  async buscarPorNombre(termino: string, limit = 10) {
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
          as: "sostenimiento",
          attributes: ["id_sostenimiento", "sostenimiento"],
        },
        {
          model: TipoEscuela,
          as: "tipo_escuela",
          attributes: ["id_tipo_escuela", "tipo_escuela"],
        },
        {
          model: Localidad,
          as: "localidad",
          attributes: ["id_localidad", "localidad"],
          include: [
            {
              model: Municipio,
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
      const unidades = await Unidad.findAll({
        include: [
          {
            model: Localidad,
            as: "localidad",
            where: {
              id_municipio: idMunicipio,
            },
            include: [
              {
                model: Municipio,
                as: "municipio",
                attributes: ["id_municipio", "nombre"],
              },
            ],
          },
          {
            model: Sostenimiento,
            as: "sostenimiento",
            attributes: ["id_sostenimiento", "sostenimiento"],
          },
          {
            model: TipoEscuela,
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
    const niveles = await Unidad.findOne({
      attributes: ["id_unidad"],
      where: {
        id_unidad: idUnidad,
      },
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

    //! Transformación de la respuesta ya que la relacion requiere dejar esos atributos
    if (niveles) {
      return {
        id_unidad: niveles.id_unidad,
        niveles: niveles.rl_infraestructura_unidad_nivels.map((nivel) => ({
          id_nivel: nivel.id_nivel,
          nivel: {
            id_nivel:
              nivel.id_nivel_ct_infraestructura_nivel_educativo.id_nivel,
            descripcion:
              nivel.id_nivel_ct_infraestructura_nivel_educativo.descripcion,
          },
        })),
      };
    }
    return null;
  }

  //* Obtener suministros de agua de una unidad
  async obtenerSuministrosDeAguaDeUnaUnidad(idUnidad: number) {
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

    //! Transformación de la respuesta ya que la relacion requiere dejar esos atributos
    if (suministros) {
      return {
        id_unidad: suministros.id_unidad,
        suministros: suministros.rl_infraestructura_unidad_suministro_aguas.map(
          (suministro) => ({
            id_suministro_agua: suministro.id_suministro_agua,
            suministro: {
              id_suministro_agua:
                suministro.id_suministro_agua_ct_infraestructura_suministro_agua
                  .id_suministro_agua,
              descripcion:
                suministro.id_suministro_agua_ct_infraestructura_suministro_agua
                  .descripcion,
            },
          })
        ),
      };
    }
    return null;
  }

  //* Obtener almacenamiento de agua de una unidad
  async obtenerAlmacenamientoAguaDeUnaUnidad(idUnidad: number) {
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

    //! Transformación de la respuesta ya que la relacion requiere dejar esos atributos
    if (almacenamientoAgua) {
      return {
        id_unidad: almacenamientoAgua.id_unidad,
        almacenamientos:
          almacenamientoAgua.rl_infraestructura_unidad_almacenamiento_aguas.map(
            (almacenamiento) => ({
              id_almacenamiento: almacenamiento.id_almacenamiento,
              almacenamiento: {
                id_almacenamiento:
                  almacenamiento
                    .id_almacenamiento_ct_infraestructura_almacenamiento_agua
                    .id_almacenamiento,
                descripcion:
                  almacenamiento
                    .id_almacenamiento_ct_infraestructura_almacenamiento_agua
                    .descripcion,
              },
            })
          ),
      };
    }
    return null;
  }

  //* Crear una unidad
  async crearUnidad(data: ct_infraestructura_unidadCreationAttributes) {
    const transaction = await sequelize.transaction();
    try {
      const unidad = await Unidad.create(data, {
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
      throw new Error("Error al eliminar la unidad: " + error.message);
    }
  }
}

export default new ctInfraestructuraUnidadService();
