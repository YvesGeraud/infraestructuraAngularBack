import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "ct_direccion" })
export class Direccion {
    @PrimaryGeneratedColumn()
    id_direccion!: number;

    @Column({ length: 255 })
    nombre!: string;

    @Column({ type: "int", nullable: true })
    id_puesto!: number;
} 