import { Router } from "express";
import ctSuministroEnergiaController from "../../controllers/infraestructura/ct_suministro_de_energia.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctSuministroEnergiaController.obtenerSuministrosDeEnergia
);

export default router;
