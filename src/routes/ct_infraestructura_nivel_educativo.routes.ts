import { Router } from "express";
import ctNivelEducativoController from "../controllers/ct_nivel_educativo.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctNivelEducativoController.obtenerNivelesEducativos
);

export default router;
