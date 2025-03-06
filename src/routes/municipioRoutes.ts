import { Router } from "express";
import { MunicipioController } from "../controller/MunicipioController";

const router = Router();

// Obtener todos los municipios
router.get("/", MunicipioController.getAll);

// Obtener GeoJSON del estado (debe ir antes que la ruta con parámetro)
router.get("/estado/geojson", MunicipioController.getEstadoGeoJson);

// Obtener GeoJSON de un municipio específico
router.get("/:id/geojson", MunicipioController.getGeoJson);

export default router; 