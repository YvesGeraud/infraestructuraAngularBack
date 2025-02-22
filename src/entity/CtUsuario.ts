import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    BeforeInsert,
    BeforeUpdate
} from "typeorm";
import { Unidad } from "./CtUnidad"; // o "Unidad" según el nombre del archivo
import * as bcrypt from 'bcrypt';

@Entity({ name: "ct_usuario" })
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario!: number;

    @Column({ length: 100, unique: true })
    usuario!: string;

    @Column()
    contrasena!: string; // Asegúrate de almacenar el hash de la contraseña

    @Column({ default: 1 })
    estatus!: number;

    @ManyToOne(() => Unidad)
    @JoinColumn({ name: "id_unidad" })
    unidad!: Unidad;

    @CreateDateColumn({ name: "fecha_registro" })
    fecha_registro!: Date;

    @UpdateDateColumn({ name: "fecha_modificacion" })
    fecha_modificacion!: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
        if (this.contrasena) {
            const salt = await bcrypt.genSalt(10);
            this.contrasena = await bcrypt.hash(this.contrasena, salt);
        }
    }
}
