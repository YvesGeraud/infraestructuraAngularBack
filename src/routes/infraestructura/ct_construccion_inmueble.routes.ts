import { Router } from "express";
import ctConstruccionInmuebleController from "../../controllers/infraestructura/ct_construccion_inmueble.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/ ctConstruccionInmuebleController.obtenerTiposConstruccionInmueble
);

export default router;
