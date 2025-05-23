import { Router } from "express";
import ctSuministroGasController from "../../controllers/infraestructura/ct_suministro_de_gas.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  ctSuministroGasController.obtenerSuministrosDeGas
);

export default router;
