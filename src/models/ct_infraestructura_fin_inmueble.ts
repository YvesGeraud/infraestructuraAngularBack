import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId } from './rl_infraestructura_unidad_fin_inmueble';

export interface ct_infraestructura_fin_inmuebleAttributes {
  id_infraestructura_fin: number;
  descripcion: string;
}

export type ct_infraestructura_fin_inmueblePk = "id_infraestructura_fin";
export type ct_infraestructura_fin_inmuebleId = ct_infraestructura_fin_inmueble[ct_infraestructura_fin_inmueblePk];
export type ct_infraestructura_fin_inmuebleOptionalAttributes = "id_infraestructura_fin";
export type ct_infraestructura_fin_inmuebleCreationAttributes = Optional<ct_infraestructura_fin_inmuebleAttributes, ct_infraestructura_fin_inmuebleOptionalAttributes>;

export class ct_infraestructura_fin_inmueble extends Model<ct_infraestructura_fin_inmuebleAttributes, ct_infraestructura_fin_inmuebleCreationAttributes> implements ct_infraestructura_fin_inmuebleAttributes {
  id_infraestructura_fin!: number;
  descripcion!: string;

  // ct_infraestructura_fin_inmueble belongsToMany ct_infraestructura_unidad via id_fin and id_unidad
  id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmuebles!: ct_infraestructura_unidad[];
  getId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmuebles!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmuebles!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmueble!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmuebles!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmueble!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmueble!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmuebles!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmueble!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmuebles!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmuebles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_fin_inmueble hasMany rl_infraestructura_unidad_fin_inmueble via id_fin
  rl_infraestructura_unidad_fin_inmuebles!: rl_infraestructura_unidad_fin_inmueble[];
  getRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_fin_inmueble>;
  setRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  addRl_infraestructura_unidad_fin_inmueble!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  addRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  createRl_infraestructura_unidad_fin_inmueble!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_fin_inmueble>;
  removeRl_infraestructura_unidad_fin_inmueble!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  removeRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  hasRl_infraestructura_unidad_fin_inmueble!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  hasRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  countRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_fin_inmueble {
    return ct_infraestructura_fin_inmueble.init({
    id_infraestructura_fin: {
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
    tableName: 'ct_infraestructura_fin_inmueble',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_infraestructura_fin" },
        ]
      },
    ]
  });
  }
}
