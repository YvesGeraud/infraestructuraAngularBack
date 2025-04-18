import { Router } from "express";
import ctLocalidadController from "../controllers/ct_localidad.controller";

const router = Router();

//* Obtener todas las localidades
router.get("/", ctLocalidadController.obtenerLocalidades);

//* Obtener una localidad por su ID
router.get("/:id", ctLocalidadController.obtenerLocalidadPorId);

export default router;
