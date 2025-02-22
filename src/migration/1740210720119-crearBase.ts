import { MigrationInterface, QueryRunner } from "typeorm";

export class CrearBase1740210720119 implements MigrationInterface {
    name = 'CrearBase1740210720119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`ct_unidad\` (\`id_unidad\` int NOT NULL AUTO_INCREMENT, \`cct\` varchar(11) NOT NULL, \`nombre_unidad\` varchar(255) NOT NULL, \`calle\` varchar(255) NULL, \`numero_exterior\` varchar(10) NULL, \`numero_interior\` varchar(10) NULL, \`id_localidad\` int NULL, \`colonia\` varchar(255) NULL, \`codigo_postal\` int NULL, \`ubicacion\` point NULL, \`id_rupet_info\` int NULL, \`id_tipo_centro_trabajo\` int NULL, \`id_tipo_sotenimiento\` int NULL, \`id_fin_inmueble\` int NULL, \`fin_inmueble_otro\` varchar(255) NULL, \`id_estatus_construccion\` int NULL, \`estatus_construccion_otro\` varchar(255) NULL, \`id_arquitecta\` int NULL, \`id_tamanio_terreno\` int NULL, \`porcentaje_edificios\` double(5,2) NULL, \`aguas_negras_pluviales\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id_unidad\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ct_usuario\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`usuario\` varchar(100) NOT NULL, \`contrasena\` varchar(255) NOT NULL, \`estatus\` int NOT NULL DEFAULT '1', \`fecha_registro\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fecha_modificacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id_unidad\` int NULL, UNIQUE INDEX \`IDX_daaab6a989ac4c341e57f18bbe\` (\`usuario\`), PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ct_usuario\` ADD CONSTRAINT \`FK_d2cd2b2bed5c86b55f3a5c118e2\` FOREIGN KEY (\`id_unidad\`) REFERENCES \`ct_unidad\`(\`id_unidad\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ct_usuario\` DROP FOREIGN KEY \`FK_d2cd2b2bed5c86b55f3a5c118e2\``);
        await queryRunner.query(`DROP INDEX \`IDX_daaab6a989ac4c341e57f18bbe\` ON \`ct_usuario\``);
        await queryRunner.query(`DROP TABLE \`ct_usuario\``);
        await queryRunner.query(`DROP TABLE \`ct_unidad\``);
    }

}
