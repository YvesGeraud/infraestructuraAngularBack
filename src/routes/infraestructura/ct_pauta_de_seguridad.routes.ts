import { Router } from "express";
import ctInfraestructuraPautaSeguridadController from "../../controllers/infraestructura/ct_pauta_de_seguridad.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctInfraestructuraPautaSeguridadController.obtenerPautasSeguridad
);

export default router;
