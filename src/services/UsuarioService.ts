import { Usuario } from "../entity/CtUsuario";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

export class UsuarioService {
    private usuarioRepository: Repository<Usuario>;

    constructor() {
        this.usuarioRepository = AppDataSource.getRepository(Usuario);
    }

    async obtenerTodos(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({ relations: ["unidad"] });
    }

    async obtenerPorId(id: number): Promise<Usuario | null> {
        return await this.usuarioRepository.findOne({ 
            where: { id_usuario: id }, 
            relations: ["unidad"] 
        });
    }

    async crear(usuarioData: Partial<Usuario>): Promise<Usuario> {
        const usuario = this.usuarioRepository.create(usuarioData);
        return await this.usuarioRepository.save(usuario);
    }

    async actualizar(id: number, usuarioData: Partial<Usuario>): Promise<Usuario | null> {
        const queryRunner = AppDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const usuario = await queryRunner.manager.findOne(Usuario, { 
                where: { id_usuario: id } 
            });

            if (!usuario) {
                return null;
            }

            queryRunner.manager.merge(Usuario, usuario, usuarioData);
            const result = await queryRunner.manager.save(Usuario, usuario);
            await queryRunner.commitTransaction();
            
            return result;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async eliminar(id: number): Promise<boolean> {
        const result = await this.usuarioRepository.delete(id);
        return result.affected ? result.affected > 0 : false;
    }
}
