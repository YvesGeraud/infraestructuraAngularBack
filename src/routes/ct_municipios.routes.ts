import { Router } from "express";
import ctMunicipiosController from "../controllers/ct_municipios.controller";

const router = Router();

//* Obtener todos los municipios
router.get("/", ctMunicipiosController.obtenerMunicipios);

export default router;
