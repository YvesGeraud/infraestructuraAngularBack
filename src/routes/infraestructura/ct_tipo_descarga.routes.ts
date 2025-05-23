import { Router } from "express";
import ctTipoDescargaController from "../../controllers/infraestructura/ct_tipo_descarga.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctTipoDescargaController.obtenerTipoDescarga
);

export default router;
