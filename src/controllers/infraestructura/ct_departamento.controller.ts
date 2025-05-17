import { Request, Response } from "express";
import CtDepartamentoService from "../../services/infraestructura/ct_departamento.service";

export class CtDepartamentoController {
  //* Obtener todos los departamentos

  async obtenerDepartamentos(req: Request, res: Response) {
    try {
      const departamentos = await CtDepartamentoService.obtenerDepartamentos();
      res.status(200).json(departamentos);
    } catch (error) {
      console.error("Error al obtener departamentos:", error);
      res.status(500).json({ error: "Error al obtener departamentos" });
    }
  }

  //* Obtener un departamento por su ID
  async obtenerDepartamentoPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const departamento = await CtDepartamentoService.obtenerDepartamentoPorId(
        parseInt(id)
      );
      res.status(200).json(departamento);
    } catch (error) {
      console.error("Error al obtener el departamento:", error);
      res.status(500).json({ error: "Error al obtener el departamento" });
    }
  }

  //* Obtener un departamento por Direccion
  async obtenerDepartamentoPorDireccion(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const departamento =
        await CtDepartamentoService.obtenerDepartamentoPorDireccion(
          parseInt(id)
        );
      res.status(200).json(departamento);
    } catch (error) {
      console.error("Error al obtener el departamento:", error);
      res.status(500).json({ error: "Error al obtener el departamento" });
    }
  }
}
export default new CtDepartamentoController();
