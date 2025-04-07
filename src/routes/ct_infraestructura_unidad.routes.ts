import { Router } from "express";
import ctInfraestructuraUnidadController from "../controllers/ct_infraestructura_unidad.controller";

const router = Router();

//* Obtener todas las unidades con ubicación
router.get(
  "/ubicaciones",
  ctInfraestructuraUnidadController.obtenerUnidadesUbicacion
);

//* Crear una unidad
router.post("/", ctInfraestructuraUnidadController.crearUnidad);

//* Obtener una unidad por su ID
router.get("/:id", ctInfraestructuraUnidadController.obtenerUnidadPorId);

//* Obtener todas las unidades
router.get("/", ctInfraestructuraUnidadController.obtenerUnidades);

//* Actualizar una unidad por su ID
router.put("/:id", ctInfraestructuraUnidadController.actualizarUnidad);

//* Eliminar una unidad por su ID
router.delete("/:id", ctInfraestructuraUnidadController.eliminarUnidad);

export default router;
