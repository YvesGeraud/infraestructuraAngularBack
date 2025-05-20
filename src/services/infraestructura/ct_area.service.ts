import { ct_infraestructura_area } from "../../models";
import { Op } from "sequelize";

export class ctInfraestructuraArea {

    async obtenerArea() {
        try {
            const area =
                await ct_infraestructura_area.findAll();
            return area;
        } catch (error) {
            throw new Error("Error al obtener las áreas");
        }
    }

    async obtenerAreaById(id: number) {
        try {
            const area = await ct_infraestructura_area.findByPk(id);
            return area;
        } catch (error) {
            throw new Error("Error al obtener la área");
        }
    }

    async crearArea(area: ct_infraestructura_area) {
        try {
            const newArea = await ct_infraestructura_area.create(area);
            return newArea;
        } catch (error) {
            throw new Error("Error al crear la área");
        }
    }

    async actualizarArea(id: number, area: ct_infraestructura_area) {
        try {
            const updatedArea = await ct_infraestructura_area.update(area, { where: { id_area: id } });
            return updatedArea;
        } catch (error) {
            throw new Error("Error al actualizar la área");
        }
    }

    async eliminarArea(id: number) {
        try {
            const deletedArea = await ct_infraestructura_area.destroy({ where: { id_area: id } });
            return deletedArea;
        } catch (error) {
            throw new Error("Error al eliminar la área");
        }
    }
}
export default new ctInfraestructuraArea();
