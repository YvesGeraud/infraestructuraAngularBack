import { Router } from "express";
import CtDireccionController from "../../controllers/infraestructura/ct_direccion.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  CtDireccionController.obtenerDireccion
);

router.get(
  "/:id",
  /*authenticateJWT,*/
  CtDireccionController.obtenerDireccionPorId
);

export default router;
