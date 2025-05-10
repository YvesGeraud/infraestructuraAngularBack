import { Router } from "express";
import ctSuministroDeAguaController from "../../controllers/infraestructura/ct_suministro_de_aguar.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctSuministroDeAguaController.obtenerSuministrosDeAgua
);

export default router;
