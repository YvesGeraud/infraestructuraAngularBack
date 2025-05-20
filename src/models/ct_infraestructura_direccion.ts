import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_departamento, ct_infraestructura_departamentoId } from './ct_infraestructura_departamento';
import type { rl_infraestructura_edificios, rl_infraestructura_edificiosId } from './rl_infraestructura_edificios';

export interface ct_infraestructura_direccionAttributes {
  id_direccion: number;
  nombre: string;
  id_puesto?: number;
  estado?: number;
  fecha_in?: Date;
  fecha_at?: Date;
}

export type ct_infraestructura_direccionPk = "id_direccion";
export type ct_infraestructura_direccionId = ct_infraestructura_direccion[ct_infraestructura_direccionPk];
export type ct_infraestructura_direccionOptionalAttributes = "id_direccion" | "id_puesto" | "estado" | "fecha_in" | "fecha_at";
export type ct_infraestructura_direccionCreationAttributes = Optional<ct_infraestructura_direccionAttributes, ct_infraestructura_direccionOptionalAttributes>;

export class ct_infraestructura_direccion extends Model<ct_infraestructura_direccionAttributes, ct_infraestructura_direccionCreationAttributes> implements ct_infraestructura_direccionAttributes {
  id_direccion!: number;
  nombre!: string;
  id_puesto?: number;
  estado?: number;
  fecha_in?: Date;
  fecha_at?: Date;

  // ct_infraestructura_direccion hasMany ct_infraestructura_departamento via id_direccion
  ct_infraestructura_departamentos!: ct_infraestructura_departamento[];
  getCt_infraestructura_departamentos!: Sequelize.HasManyGetAssociationsMixin<ct_infraestructura_departamento>;
  setCt_infraestructura_departamentos!: Sequelize.HasManySetAssociationsMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  addCt_infraestructura_departamento!: Sequelize.HasManyAddAssociationMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  addCt_infraestructura_departamentos!: Sequelize.HasManyAddAssociationsMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  createCt_infraestructura_departamento!: Sequelize.HasManyCreateAssociationMixin<ct_infraestructura_departamento>;
  removeCt_infraestructura_departamento!: Sequelize.HasManyRemoveAssociationMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  removeCt_infraestructura_departamentos!: Sequelize.HasManyRemoveAssociationsMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  hasCt_infraestructura_departamento!: Sequelize.HasManyHasAssociationMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  hasCt_infraestructura_departamentos!: Sequelize.HasManyHasAssociationsMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  countCt_infraestructura_departamentos!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_direccion hasMany rl_infraestructura_edificios via id_direccion
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_direccion {
    return ct_infraestructura_direccion.init({
    id_direccion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "nombre"
    },
    id_puesto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    fecha_in: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    fecha_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_direccion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_direccion" },
        ]
      },
      {
        name: "nombre",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre" },
        ]
      },
    ]
  });
  }
}
