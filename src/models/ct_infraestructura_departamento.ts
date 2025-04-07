import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_direccion, ct_infraestructura_direccionId } from './ct_infraestructura_direccion';
import type { ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId } from './ct_infraestructura_jefe_sector';
import type { ct_infraestructura_supervisor, ct_infraestructura_supervisorId } from './ct_infraestructura_supervisor';
import type { rl_infraestructura_edificios, rl_infraestructura_edificiosId } from './rl_infraestructura_edificios';

export interface ct_infraestructura_departamentoAttributes {
  id_departamento: number;
  nombre: string;
  id_puesto?: number;
  id_direccion?: number;
}

export type ct_infraestructura_departamentoPk = "id_departamento";
export type ct_infraestructura_departamentoId = ct_infraestructura_departamento[ct_infraestructura_departamentoPk];
export type ct_infraestructura_departamentoOptionalAttributes = "id_departamento" | "id_puesto" | "id_direccion";
export type ct_infraestructura_departamentoCreationAttributes = Optional<ct_infraestructura_departamentoAttributes, ct_infraestructura_departamentoOptionalAttributes>;

export class ct_infraestructura_departamento extends Model<ct_infraestructura_departamentoAttributes, ct_infraestructura_departamentoCreationAttributes> implements ct_infraestructura_departamentoAttributes {
  id_departamento!: number;
  nombre!: string;
  id_puesto?: number;
  id_direccion?: number;

  // ct_infraestructura_departamento hasMany ct_infraestructura_jefe_sector via id_departamento
  ct_infraestructura_jefe_sectors!: ct_infraestructura_jefe_sector[];
  getCt_infraestructura_jefe_sectors!: Sequelize.HasManyGetAssociationsMixin<ct_infraestructura_jefe_sector>;
  setCt_infraestructura_jefe_sectors!: Sequelize.HasManySetAssociationsMixin<ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId>;
  addCt_infraestructura_jefe_sector!: Sequelize.HasManyAddAssociationMixin<ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId>;
  addCt_infraestructura_jefe_sectors!: Sequelize.HasManyAddAssociationsMixin<ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId>;
  createCt_infraestructura_jefe_sector!: Sequelize.HasManyCreateAssociationMixin<ct_infraestructura_jefe_sector>;
  removeCt_infraestructura_jefe_sector!: Sequelize.HasManyRemoveAssociationMixin<ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId>;
  removeCt_infraestructura_jefe_sectors!: Sequelize.HasManyRemoveAssociationsMixin<ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId>;
  hasCt_infraestructura_jefe_sector!: Sequelize.HasManyHasAssociationMixin<ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId>;
  hasCt_infraestructura_jefe_sectors!: Sequelize.HasManyHasAssociationsMixin<ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId>;
  countCt_infraestructura_jefe_sectors!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_departamento hasMany ct_infraestructura_supervisor via id_departamento
  ct_infraestructura_supervisors!: ct_infraestructura_supervisor[];
  getCt_infraestructura_supervisors!: Sequelize.HasManyGetAssociationsMixin<ct_infraestructura_supervisor>;
  setCt_infraestructura_supervisors!: Sequelize.HasManySetAssociationsMixin<ct_infraestructura_supervisor, ct_infraestructura_supervisorId>;
  addCt_infraestructura_supervisor!: Sequelize.HasManyAddAssociationMixin<ct_infraestructura_supervisor, ct_infraestructura_supervisorId>;
  addCt_infraestructura_supervisors!: Sequelize.HasManyAddAssociationsMixin<ct_infraestructura_supervisor, ct_infraestructura_supervisorId>;
  createCt_infraestructura_supervisor!: Sequelize.HasManyCreateAssociationMixin<ct_infraestructura_supervisor>;
  removeCt_infraestructura_supervisor!: Sequelize.HasManyRemoveAssociationMixin<ct_infraestructura_supervisor, ct_infraestructura_supervisorId>;
  removeCt_infraestructura_supervisors!: Sequelize.HasManyRemoveAssociationsMixin<ct_infraestructura_supervisor, ct_infraestructura_supervisorId>;
  hasCt_infraestructura_supervisor!: Sequelize.HasManyHasAssociationMixin<ct_infraestructura_supervisor, ct_infraestructura_supervisorId>;
  hasCt_infraestructura_supervisors!: Sequelize.HasManyHasAssociationsMixin<ct_infraestructura_supervisor, ct_infraestructura_supervisorId>;
  countCt_infraestructura_supervisors!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_departamento hasMany rl_infraestructura_edificios via id_departamento
  rl_infraestructura_edificios!: rl_infraestructura_edificios[];
  getRl_infraestructura_edificios!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_edificios>;
  setRl_infraestructura_edificios!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  addRl_infraestructura_edificio!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  addRl_infraestructura_edificios!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  createRl_infraestructura_edificio!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_edificios>;
  removeRl_infraestructura_edificio!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  removeRl_infraestructura_edificios!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  hasRl_infraestructura_edificio!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  hasRl_infraestructura_edificios!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  countRl_infraestructura_edificios!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_departamento belongsTo ct_infraestructura_direccion via id_direccion
  id_direccion_ct_infraestructura_direccion!: ct_infraestructura_direccion;
  getId_direccion_ct_infraestructura_direccion!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_direccion>;
  setId_direccion_ct_infraestructura_direccion!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_direccion, ct_infraestructura_direccionId>;
  createId_direccion_ct_infraestructura_direccion!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_direccion>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_departamento {
    return ct_infraestructura_departamento.init({
    id_departamento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_puesto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_direccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_direccion',
        key: 'id_direccion'
      }
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_departamento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_departamento" },
        ]
      },
      {
        name: "id_direccion",
        using: "BTREE",
        fields: [
          { name: "id_direccion" },
        ]
      },
    ]
  });
  }
}
