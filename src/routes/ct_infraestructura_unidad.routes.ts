import { Router } from "express";
import ctInfraestructuraUnidadController from "../controllers/ct_infraestructura_unidad.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";

const router = Router();

//* Autocompletar unidades por nombre
router.get(
  "/autocomplete",
  ctInfraestructuraUnidadController.autoCompletarUnidadesPorNombre
);

//* Obtener todas las unidades con ubicación
router.get(
  "/ubicaciones",
  ctInfraestructuraUnidadController.obtenerUnidadesUbicacion
);

//* Crear una unidad
router.post(
  "/",
  authenticateJWT,
  ctInfraestructuraUnidadController.crearUnidad
);

//* Obtener una unidad por su ID
router.get("/:id", ctInfraestructuraUnidadController.obtenerUnidadPorId);

//* Obtener todas las unidades
router.get(
  "/",
  authenticateJWT,
  ctInfraestructuraUnidadController.obtenerUnidades
);

//* Actualizar una unidad por su ID
router.put(
  "/:id",
  authenticateJWT,
  ctInfraestructuraUnidadController.actualizarUnidad
);

//* Eliminar una unidad por su ID
router.delete(
  "/:id",
  authenticateJWT,
  ctInfraestructuraUnidadController.eliminarUnidad
);

export default router;
