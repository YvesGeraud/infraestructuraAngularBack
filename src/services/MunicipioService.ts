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
} 