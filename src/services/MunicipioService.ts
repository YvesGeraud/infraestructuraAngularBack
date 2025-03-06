import { Repository } from "typeorm";
import { Municipio } from "../entity/CtMunicipio";
import { AppDataSource } from "../data-source";
import * as fs from 'fs/promises';
import * as path from 'path';

export class MunicipioService {
    private municipioRepository: Repository<Municipio>;

    constructor() {
        this.municipioRepository = AppDataSource.getRepository(Municipio);
    }

    async obtenerTodos(): Promise<Municipio[]> {
        const municipios = await this.municipioRepository.find();
        console.log('Municipios encontrados:', municipios.map(m => ({ id: m.id_municipio, nombre: m.nombre })));
        return municipios;
    }

    async obtenerGeoJson(municipioId: number): Promise<any> {
        console.log('Buscando GeoJSON para municipio ID:', municipioId);

        try {
            // Primero verificar si el municipio existe en la base de datos
            const municipio = await this.municipioRepository.findOne({
                where: { id_municipio: municipioId }
            });

            if (!municipio) {
                console.error(`Municipio con ID ${municipioId} no encontrado en la base de datos`);
                return null;
            }

            console.log('Municipio encontrado en BD:', { id: municipio.id_municipio, nombre: municipio.nombre });

            // Formatear el ID a dos dígitos (ejemplo: 5 -> "05")
            const idFormateado = municipioId.toString().padStart(2, '0');
            const geoJsonPath = path.join(__dirname, '..', '..', 'assets', 'geojson', 'municipios', `${idFormateado}-${municipio.nombre.toLowerCase()}.geojson`);
            console.log('Buscando archivo GeoJSON en:', geoJsonPath);

            // Verificar si el archivo existe
            try {
                await fs.access(geoJsonPath);
                console.log('Archivo GeoJSON encontrado');
            } catch (error) {
                // Si no encuentra el archivo con el nombre completo, intentar solo con el ID
                const geoJsonPathSimple = path.join(__dirname, '..', '..', 'assets', 'geojson', 'municipios', `${idFormateado}.geojson`);
                console.log('Intentando con ruta alternativa:', geoJsonPathSimple);

                try {
                    await fs.access(geoJsonPathSimple);
                    console.log('Archivo GeoJSON encontrado con nombre simplificado');
                    const geoJsonData = await fs.readFile(geoJsonPathSimple, 'utf8');
                    return JSON.parse(geoJsonData);
                } catch (error) {
                    console.error(`Archivo GeoJSON no encontrado en ninguna ubicación`);
                    return null;
                }
            }

            // Leer y parsear el archivo
            const geoJsonData = await fs.readFile(geoJsonPath, 'utf8');
            try {
                const parsedData = JSON.parse(geoJsonData);
                console.log('GeoJSON parseado correctamente');
                return parsedData;
            } catch (error) {
                console.error(`Error al parsear GeoJSON del municipio ${municipio.nombre}:`, error);
                return null;
            }
        } catch (error) {
            console.error(`Error al obtener GeoJSON del municipio ${municipioId}:`, error);
            return null;
        }
    }

    async obtenerGeoJsonEstado(): Promise<any> {
        try {
            const geoJsonPath = path.join(__dirname, '..', '..', 'assets', 'geojson', 'estado', 'tlax_borde.geojson');
            console.log('Buscando archivo GeoJSON del estado en:', geoJsonPath);

            // Verificar si el archivo existe
            try {
                await fs.access(geoJsonPath);
                console.log('Archivo GeoJSON del estado encontrado');
            } catch (error) {
                console.error(`Archivo GeoJSON del estado no encontrado en: ${geoJsonPath}`);
                return null;
            }

            // Leer y parsear el archivo
            const geoJsonData = await fs.readFile(geoJsonPath, 'utf8');
            try {
                const parsedData = JSON.parse(geoJsonData);
                console.log('GeoJSON del estado parseado correctamente');
                return parsedData;
            } catch (error) {
                console.error('Error al parsear GeoJSON del estado:', error);
                return null;
            }
        } catch (error) {
            console.error('Error al obtener GeoJSON del estado:', error);
            return null;
        }
    }
} 