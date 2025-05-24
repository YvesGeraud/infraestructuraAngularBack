import { Router } from "express";
import ctFrecuenciaLimpiezaController from "../../controllers/infraestructura/ct_frecuencia_limpieza.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctFrecuenciaLimpiezaController.obtenerTiposFrecuenciaLimpieza
);

export default router;
