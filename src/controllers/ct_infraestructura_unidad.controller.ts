import { Request, Response } from "express";
import ctInfraestructuraUnidadService from "../services/ct_unidad.service";

class ctInfraestructuraUnidadController {
  async crearUnidad(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const unidad = await ctInfraestructuraUnidadService.crearUnidad(data);
      res.status(201).json(unidad);
    } catch (error) {
      console.error("Error al crear unidad:", error);
      res.status(500).json({ error: "Error al crear unidad" });
    }
  }

  //* Obtener todas las unidades
  async obtenerUnidades(req: Request, res: Response): Promise<void> {
    try {
      const unidades =
        await ctInfraestructuraUnidadService.obtenerUnidadesUbicacion();
      res.status(200).json(unidades);
    } catch (error) {
      console.error("Error al obtener unidades:", error);
      res.status(500).json({ error: "Error al obtener unidades" });
    }
  }

  //* Obtener todas las unidades con ubicación
  async obtenerUnidadesUbicacion(req: Request, res: Response): Promise<void> {
    try {
      const unidades =
        await ctInfraestructuraUnidadService.obtenerUnidadesUbicacion();
      res.status(200).json(unidades);
    } catch (error) {
      console.error("Error al obtener unidades con ubicación:", error);
      res
        .status(500)
        .json({ error: "Error al obtener unidades con ubicación" });
    }
  }

  async obtenerUnidadPorId(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        res
          .status(400)
          .json({ error: "El parámetro ID debe ser un número válido." });
        return;
      }
      const unidad = await ctInfraestructuraUnidadService.obtenerUnidadPorId(
        id
      );
      if (!unidad) {
        res.status(404).json({ error: "Unidad no encontrada" });
      } else {
        res.json(unidad);
      }
    } catch (error) {
      console.error("Error al obtener unidad:", error);
      res.status(500).json({ error: "Error al obtener unidad" });
    }
  }

  async actualizarUnidad(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        res
          .status(400)
          .json({ error: "El parámetro ID debe ser un número válido." });
        return;
      }
      const data = req.body;
      const unidad = await ctInfraestructuraUnidadService.actualizarUnidad(
        id,
        data
      );
      if (!unidad) {
        res.status(404).json({ error: "Unidad no encontrada" });
        return;
      } else {
        res.status(200).json(unidad);
      }
    } catch (error) {
      console.error("Error al actualizar unidad:", error);
      res.status(500).json({ error: "Error al actualizar unidad" });
    }
  }

  async eliminarUnidad(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        res
          .status(400)
          .json({ error: "El parámetro ID debe ser un número válido." });
        return;
      }
      const unidad = await ctInfraestructuraUnidadService.eliminarUnidad(id);
      if (!unidad) {
        res.status(404).json({ error: "Unidad no encontrada" });
        return;
      } else {
        res.status(200).json({ message: "Unidad eliminada correctamente" });
      }
    } catch (error) {
      console.error("Error al eliminar unidad:", error);
      res.status(500).json({ error: "Error al eliminar unidad" });
    }
  }
}

export default new ctInfraestructuraUnidadController();
