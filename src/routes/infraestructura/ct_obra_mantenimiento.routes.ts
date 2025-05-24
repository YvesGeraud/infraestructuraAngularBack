import { Router } from "express";
import ctInfraestructuraObraMantenimientoController from "../../controllers/infraestructura/ct_obra_mantenimiento.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctInfraestructuraObraMantenimientoController.obtenerTiposObraMantenimiento
);

export default router;
