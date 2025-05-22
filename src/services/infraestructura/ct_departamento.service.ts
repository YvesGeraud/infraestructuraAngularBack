import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const {
  ct_infraestructura_departamento: Departamento,
  ct_infraestructura_direccion: Direccion,
} = models;

interface IDepartamento {
  id_departamento?: number;
  nombre: string;
}

export class CtDepartamentoService {
  //* Obtener todos los departamentos

  async obtenerDepartamentos() {
    try {
      const departamentos = await Departamento.findAll({
        attributes: ["id_departamento", "nombre"],
      });
      if (departamentos.length === 0) {
        throw new Error("No hay departamentos");
      }
      return departamentos;
    } catch (error) {
      console.error("Error al obtener departamentos service:", error);
      throw new Error("Error al obtener departamentos service");
    }
  }

  //* Obtener un departamento por su ID
  async obtenerDepartamentoPorId(id: number) {
    try {
      const departamento = await Departamento.findByPk(id);
      if (!departamento) {
        throw new Error("Departamento no encontrado");
      }
      return departamento;
    } catch (error) {
      console.error("Error al obtener el departamento service:", error);
      throw new Error("Error al obtener el departamento service");
    }
  }

  //* Obtener un departamento por Direccion
  async obtenerDepartamentoPorDireccion(id_direccion: number) {
    try {
      const departamentos = await Departamento.findAll({
        attributes: ["id_departamento", "nombre"],
        where: { id_direccion },
        include: [
          {
            model: Direccion,
            as: "id_direccion_ct_infraestructura_direccion",
            attributes: ["id_direccion", "nombre"],
          },
        ],
      });

      //! Transformación de la respuesta ya que la relacion requiere dejar esos atributos
      if (departamentos && departamentos.length > 0) {
        return departamentos.map((departamento) => ({
          id_departamento: departamento.id_departamento,
          nombre: departamento.nombre,
          direccion: {
            id_direccion:
              departamento.id_direccion_ct_infraestructura_direccion
                .id_direccion,
            nombre:
              departamento.id_direccion_ct_infraestructura_direccion.nombre,
          },
        }));
      }
      return [];
    } catch (error) {
      console.error(
        "Error al obtener departamentos por dirección service:",
        error
      );
      throw new Error("Error al obtener departamentos por dirección service");
    }
  }
}

export default new CtDepartamentoService();
