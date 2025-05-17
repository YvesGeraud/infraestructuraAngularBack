import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import {
  IDepartamento,
  IDepartamentoResponse,
  IDepartamentoConDireccion,
  IDepartamentosPorDireccion,
} from "../../interfaces/ct_departamento.interface";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const {
  ct_infraestructura_departamento: Departamento,
  ct_infraestructura_direccion: Direccion,
} = models;

export class CtDepartamentoService {
  //* Obtener todos los departamentos
  async obtenerDepartamentos(): Promise<IDepartamentoResponse[]> {
    try {
      const departamentos = await Departamento.findAll({
        attributes: ["id_departamento", "nombre"],
        where: { estado: 1 },
        order: [["nombre", "ASC"]],
      });

      return departamentos.map((departamento) => ({
        id_departamento: departamento.id_departamento,
        nombre: departamento.nombre,
      }));
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al obtener departamentos: ${error.message}`);
        throw new Error(`Error al obtener departamentos: ${error.message}`);
      }
      console.error("Error inesperado al obtener departamentos:", error);
      throw new Error("Error inesperado al obtener departamentos");
    }
  }

  //* Obtener un departamento por su ID
  async obtenerDepartamentoPorId(
    id: number
  ): Promise<IDepartamentoConDireccion> {
    try {
      if (!id || id <= 0) {
        throw new Error("ID de departamento inválido");
      }

      const departamento = await Departamento.findOne({
        attributes: ["id_departamento", "nombre", "id_direccion", "estado"],
        where: {
          id_departamento: id,
          estado: 1,
        },
      });

      if (!departamento) {
        throw new Error(`No se encontró el departamento con ID: ${id}`);
      }

      // Obtener la dirección
      const direccion = await Direccion.findByPk(departamento.id_direccion);

      return {
        id_departamento: departamento.id_departamento,
        nombre: departamento.nombre,
        direccion: {
          id_direccion: direccion?.id_direccion || 0,
          nombre: direccion?.nombre || "",
        },
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al obtener el departamento: ${error.message}`);
        throw new Error(`Error al obtener el departamento: ${error.message}`);
      }
      console.error("Error inesperado al obtener el departamento:", error);
      throw new Error("Error inesperado al obtener el departamento");
    }
  }

  //* Obtener un departamento por Direccion
  async obtenerDepartamentoPorDireccion(
    id_direccion: number
  ): Promise<IDepartamentosPorDireccion> {
    try {
      // Validar que el id_direccion sea un número válido
      if (!id_direccion || id_direccion <= 0) {
        throw new Error("ID de dirección inválido");
      }

      // Primero obtenemos la dirección
      const direccion = await Direccion.findByPk(id_direccion);

      // Validar que la dirección exista
      if (!direccion) {
        throw new Error(`No se encontró la dirección con ID: ${id_direccion}`);
      }

      // Luego obtenemos los departamentos
      const departamentos = await Departamento.findAll({
        attributes: ["id_departamento", "nombre"],
        where: {
          id_direccion,
          estado: 1,
        },
        order: [["nombre", "ASC"]],
      });

      return {
        id_direccion: id_direccion,
        nombre_direccion: direccion.nombre,
        departamentos: departamentos.map((departamento) => ({
          id_departamento: departamento.id_departamento,
          nombre: departamento.nombre,
        })),
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `Error al obtener departamentos por dirección: ${error.message}`
        );
        throw new Error(`Error al obtener departamentos: ${error.message}`);
      }
      console.error(
        "Error inesperado al obtener departamentos por dirección:",
        error
      );
      throw new Error("Error inesperado al obtener departamentos");
    }
  }
}

export default new CtDepartamentoService();
