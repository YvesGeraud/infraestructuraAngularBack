import { initModels } from "../../models/init-models";
import { sequelize } from "../../config/database";
import { Op } from "sequelize";

interface IArea {
  id_area?: number;
  descripcion: string;
  nombre: string;
}

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_infraestructura_area: Area } = models;

export class ctInfraestructuraArea {
  async obtenerArea() {
    try {
      const area = await Area.findAll({
        attributes: ["id_area", "descripcion"],
      });
      if (area.length === 0) {
        throw new Error("No hay áreas");
      }
      return area;
    } catch (error) {
      console.error("Error al obtener las áreas service:", error);
      throw new Error("Error al obtener las áreas service");
    }
  }

  async obtenerAreaById(id: number) {
    try {
      const area = await Area.findByPk(id);
      if (!area) {
        throw new Error("Área no encontrada");
      }
      return area;
    } catch (error) {
      console.error("Error al obtener la área service:", error);
      throw new Error("Error al obtener la área service");
    }
  }

  async crearArea(area: IArea) {
    try {
      const newArea = await Area.create(area);
      return newArea;
    } catch (error) {
      console.error("Error al crear la área service:", error);
      throw new Error("Error al crear la área service");
    }
  }

  async actualizarArea(id: number, area: IArea) {
    try {
      const updatedArea = await Area.update(area, {
        where: { id_area: id },
      });
      return updatedArea;
    } catch (error) {
      console.error("Error al actualizar la área service:", error);
      throw new Error("Error al actualizar la área service");
    }
  }

  async eliminarArea(id: number) {
    try {
      const deletedArea = await Area.destroy({
        where: { id_area: id },
      });
      return deletedArea;
    } catch (error) {
      console.error("Error al eliminar la área service:", error);
      throw new Error("Error al eliminar la área service");
    }
  }
}
export default new ctInfraestructuraArea();
