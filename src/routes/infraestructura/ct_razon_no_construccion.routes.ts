import { Router } from "express";
import ctRazonNoConstruccionController from "../../controllers/infraestructura/ct_razon_no_construccion.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctRazonNoConstruccionController.obtenerRazonesNoConstruccion
);

export default router;
