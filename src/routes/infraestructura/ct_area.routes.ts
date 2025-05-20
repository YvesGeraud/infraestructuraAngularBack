import { Router } from "express";
import CtAreaController from "../../controllers/infraestructura/ct_area.controller";

const router = Router();

router.get("/", CtAreaController.obtenerArea);

export default router;
