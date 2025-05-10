import { Router } from "express";
import CtAlmacenamientoAguaController from "../../controllers/infraestructura/ct_almacenamiento_agua.controller";

const router = Router();

router.get("/", CtAlmacenamientoAguaController.obtenerAlmacenamientoAgua);

export default router;
