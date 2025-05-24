import { Router } from "express";
import ctTipoConstruccionController from "../../controllers/infraestructura/ct_tipo_construccion.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctTipoConstruccionController.obtenerTiposDeConstruccion
);

export default router;
