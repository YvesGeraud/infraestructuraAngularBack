import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "ct_municipio" })
export class Municipio {
    @PrimaryGeneratedColumn()
    id_municipio!: number;

    @Column({ length: 255 })
    nombre!: string;
} 