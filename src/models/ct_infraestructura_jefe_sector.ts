import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_departamento, ct_infraestructura_departamentoId } from './ct_infraestructura_departamento';
import type { rl_infraestructura_edificios, rl_infraestructura_edificiosId } from './rl_infraestructura_edificios';

export interface ct_infraestructura_jefe_sectorAttributes {
  id_jefe_sector: number;
  nombre?: string;
  id_puesto?: number;
  id_departamento?: number;
}

export type ct_infraestructura_jefe_sectorPk = "id_jefe_sector";
export type ct_infraestructura_jefe_sectorId = ct_infraestructura_jefe_sector[ct_infraestructura_jefe_sectorPk];
export type ct_infraestructura_jefe_sectorOptionalAttributes = "id_jefe_sector" | "nombre" | "id_puesto" | "id_departamento";
export type ct_infraestructura_jefe_sectorCreationAttributes = Optional<ct_infraestructura_jefe_sectorAttributes, ct_infraestructura_jefe_sectorOptionalAttributes>;

export class ct_infraestructura_jefe_sector extends Model<ct_infraestructura_jefe_sectorAttributes, ct_infraestructura_jefe_sectorCreationAttributes> implements ct_infraestructura_jefe_sectorAttributes {
  id_jefe_sector!: number;
  nombre?: string;
  id_puesto?: number;
  id_departamento?: number;

  // ct_infraestructura_jefe_sector belongsTo ct_infraestructura_departamento via id_departamento
  id_departamento_ct_infraestructura_departamento!: ct_infraestructura_departamento;
  getId_departamento_ct_infraestructura_departamento!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_departamento>;
  setId_departamento_ct_infraestructura_departamento!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  createId_departamento_ct_infraestructura_departamento!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_departamento>;
  // ct_infraestructura_jefe_sector hasMany rl_infraestructura_edificios via id_jefe_sector
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_jefe_sector {
    return ct_infraestructura_jefe_sector.init({
    id_jefe_sector: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_puesto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_departamento',
        key: 'id_departamento'
      }
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_jefe_sector',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_jefe_sector" },
        ]
      },
      {
        name: "id_departamento",
        using: "BTREE",
        fields: [
          { name: "id_departamento" },
        ]
      },
    ]
  });
  }
}
