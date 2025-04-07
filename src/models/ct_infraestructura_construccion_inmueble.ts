import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId } from './rl_infraestructura_unidad_construccion_inmueble';

export interface ct_infraestructura_construccion_inmuebleAttributes {
  id_construccion: number;
  descripcion: string;
}

export type ct_infraestructura_construccion_inmueblePk = "id_construccion";
export type ct_infraestructura_construccion_inmuebleId = ct_infraestructura_construccion_inmueble[ct_infraestructura_construccion_inmueblePk];
export type ct_infraestructura_construccion_inmuebleOptionalAttributes = "id_construccion";
export type ct_infraestructura_construccion_inmuebleCreationAttributes = Optional<ct_infraestructura_construccion_inmuebleAttributes, ct_infraestructura_construccion_inmuebleOptionalAttributes>;

export class ct_infraestructura_construccion_inmueble extends Model<ct_infraestructura_construccion_inmuebleAttributes, ct_infraestructura_construccion_inmuebleCreationAttributes> implements ct_infraestructura_construccion_inmuebleAttributes {
  id_construccion!: number;
  descripcion!: string;

  // ct_infraestructura_construccion_inmueble belongsToMany ct_infraestructura_unidad via id_construccion and id_unidad
  id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmuebles!: ct_infraestructura_unidad[];
  getId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmuebles!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmuebles!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmueble!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmuebles!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmueble!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmueble!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmuebles!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmueble!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmuebles!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmuebles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_construccion_inmueble hasMany rl_infraestructura_unidad_construccion_inmueble via id_construccion
  rl_infraestructura_unidad_construccion_inmuebles!: rl_infraestructura_unidad_construccion_inmueble[];
  getRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble>;
  setRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  addRl_infraestructura_unidad_construccion_inmueble!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  addRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  createRl_infraestructura_unidad_construccion_inmueble!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_construccion_inmueble>;
  removeRl_infraestructura_unidad_construccion_inmueble!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  removeRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  hasRl_infraestructura_unidad_construccion_inmueble!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  hasRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  countRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_construccion_inmueble {
    return ct_infraestructura_construccion_inmueble.init({
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
    tableName: 'ct_infraestructura_construccion_inmueble',
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
