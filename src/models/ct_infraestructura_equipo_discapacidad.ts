import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId } from './rl_infraestructura_unidad_equipo_discapacidad';

export interface ct_infraestructura_equipo_discapacidadAttributes {
  id_equipo: number;
  descripcion: string;
}

export type ct_infraestructura_equipo_discapacidadPk = "id_equipo";
export type ct_infraestructura_equipo_discapacidadId = ct_infraestructura_equipo_discapacidad[ct_infraestructura_equipo_discapacidadPk];
export type ct_infraestructura_equipo_discapacidadOptionalAttributes = "id_equipo";
export type ct_infraestructura_equipo_discapacidadCreationAttributes = Optional<ct_infraestructura_equipo_discapacidadAttributes, ct_infraestructura_equipo_discapacidadOptionalAttributes>;

export class ct_infraestructura_equipo_discapacidad extends Model<ct_infraestructura_equipo_discapacidadAttributes, ct_infraestructura_equipo_discapacidadCreationAttributes> implements ct_infraestructura_equipo_discapacidadAttributes {
  id_equipo!: number;
  descripcion!: string;

  // ct_infraestructura_equipo_discapacidad belongsToMany ct_infraestructura_unidad via id_equipo and id_unidad
  id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidads!: ct_infraestructura_unidad[];
  getId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidads!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidads!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidad!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidads!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidad!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidad!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidads!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidad!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidads!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidads!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_equipo_discapacidad hasMany rl_infraestructura_unidad_equipo_discapacidad via id_equipo
  rl_infraestructura_unidad_equipo_discapacidads!: rl_infraestructura_unidad_equipo_discapacidad[];
  getRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad>;
  setRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  addRl_infraestructura_unidad_equipo_discapacidad!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  addRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  createRl_infraestructura_unidad_equipo_discapacidad!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_equipo_discapacidad>;
  removeRl_infraestructura_unidad_equipo_discapacidad!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  removeRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  hasRl_infraestructura_unidad_equipo_discapacidad!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  hasRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  countRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_equipo_discapacidad {
    return ct_infraestructura_equipo_discapacidad.init({
    id_equipo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_equipo_discapacidad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_equipo" },
        ]
      },
    ]
  });
  }
}
