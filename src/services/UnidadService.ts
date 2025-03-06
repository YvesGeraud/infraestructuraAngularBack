import { Repository, Like } from "typeorm";
import { Unidad } from "../entity/CtUnidad";
import { AppDataSource } from "../data-source";

export class UnidadService {
    private unidadRepository: Repository<Unidad>;

    constructor() {
        this.unidadRepository = AppDataSource.getRepository(Unidad);
    }

    async buscarUnidades(filtros: {
        nombre?: string,
        cct?: string,
        municipio_id?: number
    }): Promise<Unidad[]> {
        const query = this.unidadRepository.createQueryBuilder("unidad");

        if (filtros.nombre) {
            query.andWhere("unidad.nombre_unidad LIKE :nombre", {
                nombre: `%${filtros.nombre}%`
            });
        }

        if (filtros.cct) {
            query.andWhere("unidad.cct = :cct", {
                cct: filtros.cct
            });
        }

        if (filtros.municipio_id) {
            query.andWhere("unidad.municipio_id = :municipio_id", {
                municipio_id: filtros.municipio_id
            });
        }

        return query.getMany();
    }

    async obtenerPorId(id: number): Promise<Unidad | null> {
        return this.unidadRepository.findOne({
            where: { id_unidad: id }
        });
    }

    async obtenerPorCct(cct: string): Promise<Unidad | null> {
        return this.unidadRepository.findOne({
            where: { cct }
        });
    }

    async obtenerSugerencias(termino: string): Promise<string[]> {
        if (!termino || termino.trim() === '') {
            return [];
        }

        const unidades = await this.unidadRepository.find({
            where: [
                { nombre_unidad: Like(`%${termino}%`) },
                { cct: Like(`%${termino}%`) }
            ],
            take: 10
        });

        return unidades.map(u => `${u.nombre_unidad} (CCT: ${u.cct})`);
    }

    async crear(unidadData: Partial<Unidad>): Promise<Unidad> {
        const unidad = this.unidadRepository.create(unidadData);
        return this.unidadRepository.save(unidad);
    }

    async actualizar(id: number, unidadData: any): Promise<Unidad | null> {
        const unidad = await this.obtenerPorId(id);
        if (!unidad) {
            return null;
        }

        const { lat, lng, ...resto } = unidadData;
        if (lat !== undefined && lng !== undefined) {
            resto.ubicacion = () => `ST_GeomFromText('POINT(${lng} ${lat})',4326)`;
        }

        this.unidadRepository.merge(unidad, resto);
        return this.unidadRepository.save(unidad);
    }
} 