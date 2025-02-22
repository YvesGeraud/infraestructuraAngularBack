import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "ct_unidad" })
export class Unidad {
    @PrimaryGeneratedColumn()
    id_unidad!: number;

    @Column({ length: 11 })
    cct!: string;

    @Column({ length: 255 })
    nombre_unidad!: string;

    @Column({ length: 255, nullable: true })
    calle!: string;

    @Column({ length: 10, nullable: true })
    numero_exterior!: string;

    @Column({ length: 10, nullable: true })
    numero_interior!: string;

    @Column({ type: "int", nullable: true })
    id_localidad!: number;

    @Column({ length: 255, nullable: true })
    colonia!: string;

    @Column({ type: "int", nullable: true })
    codigo_postal!: number;

    @Column({ type: "point", nullable: true, spatialFeatureType: "Point", srid: 4326 })
    ubicacion!: string;

    @Column({ type: "int", nullable: true })
    id_rupet_info!: number;

    @Column({ type: "int", nullable: true })
    id_tipo_centro_trabajo!: number;

    @Column({ type: "int", nullable: true })
    id_tipo_sotenimiento!: number;

    @Column({ type: "int", nullable: true })
    id_fin_inmueble!: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    fin_inmueble_otro!: string;

    @Column({ type: "int", nullable: true })
    id_estatus_construccion!: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    estatus_construccion_otro!: string;

    @Column({ type: "int", nullable: true })
    id_arquitecta!: number;

    @Column({ type: "int", nullable: true })
    id_tamanio_terreno!: number;

    @Column({ type: "double", precision: 5, scale: 2, nullable: true })
    porcentaje_edificios!: number;

    @Column({ type: "boolean", default: false })
    aguas_negras_pluviales!: boolean;
}
