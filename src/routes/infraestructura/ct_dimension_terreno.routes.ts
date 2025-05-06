import { Router } from "express";
import CtDimencionTerrenoController from "../../controllers/infraestructura/ct_dimension_terreno.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  CtDimencionTerrenoController.obtenerDimencionTerreno
);

export default router;
