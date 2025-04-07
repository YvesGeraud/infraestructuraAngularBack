import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId } from './rl_infraestructura_unidad_obra_mantenimiento';

export interface ct_infraestructura_obra_mantenimientoAttributes {
  id_obra: number;
  descripcion: string;
}

export type ct_infraestructura_obra_mantenimientoPk = "id_obra";
export type ct_infraestructura_obra_mantenimientoId = ct_infraestructura_obra_mantenimiento[ct_infraestructura_obra_mantenimientoPk];
export type ct_infraestructura_obra_mantenimientoOptionalAttributes = "id_obra";
export type ct_infraestructura_obra_mantenimientoCreationAttributes = Optional<ct_infraestructura_obra_mantenimientoAttributes, ct_infraestructura_obra_mantenimientoOptionalAttributes>;

export class ct_infraestructura_obra_mantenimiento extends Model<ct_infraestructura_obra_mantenimientoAttributes, ct_infraestructura_obra_mantenimientoCreationAttributes> implements ct_infraestructura_obra_mantenimientoAttributes {
  id_obra!: number;
  descripcion!: string;

  // ct_infraestructura_obra_mantenimiento belongsToMany ct_infraestructura_unidad via id_obra and id_unidad
  id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimientos!: ct_infraestructura_unidad[];
  getId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimientos!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimientos!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimiento!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimientos!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimiento!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimiento!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimientos!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimiento!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimientos!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimientos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_obra_mantenimiento hasMany rl_infraestructura_unidad_obra_mantenimiento via id_obra
  rl_infraestructura_unidad_obra_mantenimientos!: rl_infraestructura_unidad_obra_mantenimiento[];
  getRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento>;
  setRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  addRl_infraestructura_unidad_obra_mantenimiento!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  addRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  createRl_infraestructura_unidad_obra_mantenimiento!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_obra_mantenimiento>;
  removeRl_infraestructura_unidad_obra_mantenimiento!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  removeRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  hasRl_infraestructura_unidad_obra_mantenimiento!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  hasRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  countRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_obra_mantenimiento {
    return ct_infraestructura_obra_mantenimiento.init({
    id_obra: {
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
    tableName: 'ct_infraestructura_obra_mantenimiento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_obra" },
        ]
      },
    ]
  });
  }
}
