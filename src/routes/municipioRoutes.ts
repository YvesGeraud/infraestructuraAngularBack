import { Router } from "express";
import { MunicipioController } from "../controller/MunicipioController";

const router = Router();

// Obtener todos los municipios
router.get("/", MunicipioController.getAll);

export default router; 