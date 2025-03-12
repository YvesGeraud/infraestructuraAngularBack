import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "ct_departamento" })
export class Departamento {
    @PrimaryGeneratedColumn()
    id_departamento!: number;

    @Column({ length: 255 })
    nombre!: string;

    @Column({ type: "int", nullable: true })
    id_puesto!: number;
} 