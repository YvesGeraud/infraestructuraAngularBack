import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId } from './rl_infraestructura_unidad_construccion';

export interface ct_infraestructura_tipo_construccionAttributes {
  id_construccion: number;
  descripcion: string;
}

export type ct_infraestructura_tipo_construccionPk = "id_construccion";
export type ct_infraestructura_tipo_construccionId = ct_infraestructura_tipo_construccion[ct_infraestructura_tipo_construccionPk];
export type ct_infraestructura_tipo_construccionOptionalAttributes = "id_construccion";
export type ct_infraestructura_tipo_construccionCreationAttributes = Optional<ct_infraestructura_tipo_construccionAttributes, ct_infraestructura_tipo_construccionOptionalAttributes>;

export class ct_infraestructura_tipo_construccion extends Model<ct_infraestructura_tipo_construccionAttributes, ct_infraestructura_tipo_construccionCreationAttributes> implements ct_infraestructura_tipo_construccionAttributes {
  id_construccion!: number;
  descripcion!: string;

  // ct_infraestructura_tipo_construccion belongsToMany ct_infraestructura_unidad via id_construccion and id_unidad
  id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccions!: ct_infraestructura_unidad[];
  getId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccions!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccions!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccions!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccions!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccions!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_tipo_construccion hasMany rl_infraestructura_unidad_construccion via id_construccion
  rl_infraestructura_unidad_construccions!: rl_infraestructura_unidad_construccion[];
  getRl_infraestructura_unidad_construccions!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_construccion>;
  setRl_infraestructura_unidad_construccions!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  addRl_infraestructura_unidad_construccion!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  addRl_infraestructura_unidad_construccions!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  createRl_infraestructura_unidad_construccion!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_construccion>;
  removeRl_infraestructura_unidad_construccion!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  removeRl_infraestructura_unidad_construccions!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  hasRl_infraestructura_unidad_construccion!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  hasRl_infraestructura_unidad_construccions!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  countRl_infraestructura_unidad_construccions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_tipo_construccion {
    return ct_infraestructura_tipo_construccion.init({
    id_construccion: {
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
    tableName: 'ct_infraestructura_tipo_construccion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_construccion" },
        ]
      },
    ]
  });
  }
}
