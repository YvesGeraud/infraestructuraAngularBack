import { Router, Request, Response, RequestHandler } from "express";
import { AppDataSource } from "../data-source";
import { Municipio } from "../entity/CtMunicipio";
import * as fs from 'fs/promises';
import * as path from 'path';

interface MunicipioParams {
    id: string;
}

const router = Router();

// Obtener todos los municipios
const getAllMunicipios: RequestHandler = async (req, res) => {
    try {
        const municipioRepository = AppDataSource.getRepository(Municipio);
        const municipios = await municipioRepository.find();
        res.json(municipios);
    } catch (error) {
        console.error('Error al obtener municipios:', error);
        res.status(500).json({ message: "Error al obtener municipios" });
    }
};

// Obtener GeoJSON de un municipio específico
const getMunicipioGeoJson: RequestHandler<MunicipioParams> = async (req, res) => {
    try {
        const municipioRepository = AppDataSource.getRepository(Municipio);
        const municipio = await municipioRepository.findOneBy({ id_municipio: parseInt(req.params.id) });

        if (!municipio) {
            res.status(404).json({ message: "Municipio no encontrado" });
            return;
        }

        const geoJsonPath = path.join(__dirname, '..', '..', 'assets', 'geojson', 'municipios', `${municipio.id_municipio}.geojson`);

        try {
            await fs.access(geoJsonPath);
        } catch (error) {
            console.error(`Archivo GeoJSON no encontrado: ${geoJsonPath}`);
            res.status(404).json({ message: "Archivo GeoJSON no encontrado" });
            return;
        }

        const geoJsonData = await fs.readFile(geoJsonPath, 'utf8');

        try {
            const parsedData = JSON.parse(geoJsonData);
            res.json(parsedData);
        } catch (error) {
            console.error(`Error al parsear GeoJSON: ${geoJsonPath}`, error);
            res.status(500).json({ message: "Error al procesar archivo GeoJSON" });
        }
    } catch (error) {
        console.error('Error al obtener GeoJSON del municipio:', error);
        res.status(500).json({ message: "Error al obtener GeoJSON del municipio" });
    }
};

// Obtener GeoJSON del estado
const getEstadoGeoJson: RequestHandler = async (req, res) => {
    try {
        const geoJsonPath = path.join(__dirname, '..', '..', 'assets', 'geojson', 'estado', 'tlax_borde.geojson');

        try {
            await fs.access(geoJsonPath);
        } catch (error) {
            console.error(`Archivo GeoJSON del estado no encontrado: ${geoJsonPath}`);
            res.status(404).json({ message: "Archivo GeoJSON del estado no encontrado" });
            return;
        }

        const geoJsonData = await fs.readFile(geoJsonPath, 'utf8');

        try {
            const parsedData = JSON.parse(geoJsonData);
            res.json(parsedData);
        } catch (error) {
            console.error(`Error al parsear GeoJSON del estado: ${geoJsonPath}`, error);
            res.status(500).json({ message: "Error al procesar archivo GeoJSON del estado" });
        }
    } catch (error) {
        console.error('Error al obtener GeoJSON del estado:', error);
        res.status(500).json({ message: "Error al obtener GeoJSON del estado" });
    }
};

router.get("/", getAllMunicipios);
router.get("/:id/geojson", getMunicipioGeoJson);
router.get("/estado/geojson", getEstadoGeoJson);

export default router; 