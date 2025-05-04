import { Router } from "express";
import rlUnidadNivelController from "../../controllers/infraestructura/rl_unidad_nivel.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";
const router = Router();

//* Obtener todos los niveles educativos
router.post("/", rlUnidadNivelController.actualizarNivelUnidad);

//* Obtener todos los niveles educativos
router.get("/", rlUnidadNivelController.obtenerNivelesUnidad);

//* Obtener todos los niveles educativos
router.post("/", rlUnidadNivelController.actualizarNivelUnidad);

//* Actualizar un nivel educativo de una unidad
router.patch(
  "/",
  /*authenticateJWT,*/ rlUnidadNivelController.actualizarNivelUnidad
);

export default router;
