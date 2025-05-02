import { Request, Response } from "express";
import ctInfraestructuraUnidadService from "../../services/infraestructura/ct_unidad.service";

class ctInfraestructuraUnidadController {
  //* Obtener todas las unidades
  async obtenerUnidades(req: Request, res: Response): Promise<void> {
    try {
      const unidades = await ctInfraestructuraUnidadService.obtenerUnidades();
      res.status(200).json(unidades);
    } catch (error) {
      console.error("Error al obtener unidades:", error);
      res.status(500).json({ error: "Error al obtener unidades" });
    }
  }

  //* Obtener una unidad por su ID
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

  //* Metodo de autocompletado de unidades por Nombre
  async autoCompletarUnidadesPorNombre(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      // Suponemos que el termino viene como query param: /api/unidades/autocomplete?termino=
      const termino = req.query.query as string;
      if (!termino) {
        res.status(400).json({ error: "Se requiere un termino de busqueda" });
        return;
      }
      const resultados = await ctInfraestructuraUnidadService.buscarPorNombre(
        termino
      );
      res.json(resultados);
    } catch (error) {
      console.error("Error al autocompletar unidades por nombre:", error);
      res
        .status(500)
        .json({ error: "Error al autocompletar unidades por nombre" });
    }
  }

  //* Obtener unidades por municipio
  async obtenerUnidadesPorMunicipio(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const idMunicipio = Number(req.params.idMunicipio);
      if (isNaN(idMunicipio)) {
        res.status(400).json({
          error: "El parámetro ID del municipio debe ser un número válido.",
        });
        return;
      }

      const unidades =
        await ctInfraestructuraUnidadService.obtenerUnidadesPorMunicipio(
          idMunicipio
        );

      if (!unidades || unidades.length === 0) {
        res.status(404).json({
          mensaje: "No se encontraron unidades para este municipio",
        });
      } else {
        res.json(unidades);
      }
    } catch (error) {
      console.error("Error al obtener unidades por municipio:", error);
      res.status(500).json({
        error: "Error al obtener las unidades del municipio",
      });
    }
  }

  //* Obtener niveles educativos de una unidad
  async obtenerNivelesEducativosDeUnaUnidad(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const idUnidad = Number(req.params.idUnidad);
      if (isNaN(idUnidad)) {
        res.status(400).json({
          error: "El parámetro ID de la unidad debe ser un número válido.",
        });
        return;
      }
      const niveles =
        await ctInfraestructuraUnidadService.obtenerNivelesEducativosDeUnaUnidad(
          idUnidad
        );
      res.json(niveles);
    } catch (error) {
      console.error(
        "Error al obtener niveles educativos de una unidad:",
        error
      );
      res
        .status(500)
        .json({ error: "Error al obtener niveles educativos de una unidad" });
    }
  }

  //* Crear una unidad
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

  //* Actualizar una unidad
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

  //* Eliminar una unidad
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

// Exportar una instancia de la clase
const controller = new ctInfraestructuraUnidadController();
export default controller;
