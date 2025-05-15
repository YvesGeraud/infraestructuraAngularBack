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
          as: "niveles",
          attributes: ["id_nivel"],
          include: [
            {
              model: NivelEducativo,
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
    const suministros = await Unidad.findOne({
      attributes: ["id_unidad"],
      where: { id_unidad: idUnidad },
      include: [
        {
          model: UnidadSuministroAgua,
          as: "suministros",
          attributes: ["id_suministro_agua"],
          include: [
            {
              model: SuministroAgua,
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
    const almacenamientoAgua = await Unidad.findOne({
      attributes: ["id_unidad"],
      where: { id_unidad: idUnidad },
      include: [
        {
          model: UnidadAlmacenamientoAgua,
          as: "almacenamientos",
          attributes: ["id_almacenamiento"],
          include: [
            {
              model: AlmacenamientoAgua,
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
