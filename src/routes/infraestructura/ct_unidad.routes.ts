import { Router } from "express";
import ctInfraestructuraUnidadController from "../../controllers/infraestructura/ct_unidad.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

//* Autocompletar unidades por nombre
router.get(
  "/autocomplete",
  ctInfraestructuraUnidadController.autoCompletarUnidadesPorNombre
);

//* Obtener unidades por municipio
router.get(
  "/municipio/:idMunicipio",
  ctInfraestructuraUnidadController.obtenerUnidadesPorMunicipio
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

//* Obtener niveles educativos de una unidad
router.get(
  "/niveles/:idUnidad",
  ctInfraestructuraUnidadController.obtenerNivelesEducativosDeUnaUnidad
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
