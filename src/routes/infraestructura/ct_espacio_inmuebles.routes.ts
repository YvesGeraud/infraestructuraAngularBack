import { Router } from "express";
import CtEspacioInmueblesController from "../../controllers/infraestructura/ct_espacio_inmuebles.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";
const router = Router();

router.get(
  "/",
  /*authenticateJWT,*/
  CtEspacioInmueblesController.obtenerEspaciosInmuebles
);

export default router;
