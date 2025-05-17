import { Router } from "express";
import CtDepartamentoController from "../../controllers/infraestructura/ct_departamento.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  CtDepartamentoController.obtenerDepartamentos
);

router.get(
  "/:id",
  /*authenticateJWT,*/
  CtDepartamentoController.obtenerDepartamentoPorId
);

router.get(
  "/direccion/:id",
  /*authenticateJWT,*/
  CtDepartamentoController.obtenerDepartamentoPorDireccion
);

export default router;
