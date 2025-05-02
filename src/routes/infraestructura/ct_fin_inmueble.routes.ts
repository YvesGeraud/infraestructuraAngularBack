import { Router } from "express";
import ctInfraestructuraFinInmuebleController from "../../controllers/infraestructura/ct_fin_inmueble.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/ ctInfraestructuraFinInmuebleController.obtenerTiposFinInmueble
);

export default router;
