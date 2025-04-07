import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_departamento, ct_infraestructura_departamentoId } from './ct_infraestructura_departamento';
import type { ct_infraestructura_direccion, ct_infraestructura_direccionId } from './ct_infraestructura_direccion';
import type { ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId } from './ct_infraestructura_jefe_sector';
import type { ct_infraestructura_supervisor, ct_infraestructura_supervisorId } from './ct_infraestructura_supervisor';

export interface rl_infraestructura_edificiosAttributes {
  id_edificios: number;
  id_direccion?: number;
  id_departamento?: number;
  id_jefe_sector?: number;
  id_supervisor?: number;
  id_unidad?: number;
  descripcion: string;
}

export type rl_infraestructura_edificiosPk = "id_edificios";
export type rl_infraestructura_edificiosId = rl_infraestructura_edificios[rl_infraestructura_edificiosPk];
export type rl_infraestructura_edificiosOptionalAttributes = "id_edificios" | "id_direccion" | "id_departamento" | "id_jefe_sector" | "id_supervisor" | "id_unidad";
export type rl_infraestructura_edificiosCreationAttributes = Optional<rl_infraestructura_edificiosAttributes, rl_infraestructura_edificiosOptionalAttributes>;

export class rl_infraestructura_edificios extends Model<rl_infraestructura_edificiosAttributes, rl_infraestructura_edificiosCreationAttributes> implements rl_infraestructura_edificiosAttributes {
  id_edificios!: number;
  id_direccion?: number;
  id_departamento?: number;
  id_jefe_sector?: number;
  id_supervisor?: number;
  id_unidad?: number;
  descripcion!: string;

  // rl_infraestructura_edificios belongsTo ct_infraestructura_departamento via id_departamento
  id_departamento_ct_infraestructura_departamento!: ct_infraestructura_departamento;
  getId_departamento_ct_infraestructura_departamento!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_departamento>;
  setId_departamento_ct_infraestructura_departamento!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  createId_departamento_ct_infraestructura_departamento!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_departamento>;
  // rl_infraestructura_edificios belongsTo ct_infraestructura_direccion via id_direccion
  id_direccion_ct_infraestructura_direccion!: ct_infraestructura_direccion;
  getId_direccion_ct_infraestructura_direccion!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_direccion>;
  setId_direccion_ct_infraestructura_direccion!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_direccion, ct_infraestructura_direccionId>;
  createId_direccion_ct_infraestructura_direccion!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_direccion>;
  // rl_infraestructura_edificios belongsTo ct_infraestructura_jefe_sector via id_jefe_sector
  id_jefe_sector_ct_infraestructura_jefe_sector!: ct_infraestructura_jefe_sector;
  getId_jefe_sector_ct_infraestructura_jefe_sector!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_jefe_sector>;
  setId_jefe_sector_ct_infraestructura_jefe_sector!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_jefe_sector, ct_infraestructura_jefe_sectorId>;
  createId_jefe_sector_ct_infraestructura_jefe_sector!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_jefe_sector>;
  // rl_infraestructura_edificios belongsTo ct_infraestructura_supervisor via id_supervisor
  id_supervisor_ct_infraestructura_supervisor!: ct_infraestructura_supervisor;
  getId_supervisor_ct_infraestructura_supervisor!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_supervisor>;
  setId_supervisor_ct_infraestructura_supervisor!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_supervisor, ct_infraestructura_supervisorId>;
  createId_supervisor_ct_infraestructura_supervisor!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_supervisor>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_edificios {
    return rl_infraestructura_edificios.init({
    id_edificios: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_direccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_direccion',
        key: 'id_direccion'
      }
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_departamento',
        key: 'id_departamento'
      }
    },
    id_jefe_sector: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_jefe_sector',
        key: 'id_jefe_sector'
      }
    },
    id_supervisor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_supervisor',
        key: 'id_supervisor'
      }
    },
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_edificios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_edificios" },
        ]
      },
      {
        name: "id_direccion",
        using: "BTREE",
        fields: [
          { name: "id_direccion" },
        ]
      },
      {
        name: "id_departamento",
        using: "BTREE",
        fields: [
          { name: "id_departamento" },
        ]
      },
      {
        name: "id_jefe_sector",
        using: "BTREE",
        fields: [
          { name: "id_jefe_sector" },
        ]
      },
      {
        name: "id_supervisor",
        using: "BTREE",
        fields: [
          { name: "id_supervisor" },
        ]
      },
    ]
  });
  }
}
