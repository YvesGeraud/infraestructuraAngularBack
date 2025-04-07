import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId } from './rl_infraestructura_unidad_espacio_inmueble';

export interface ct_infraestructura_espacio_inmuebleAttributes {
  id_espacio: number;
  descripcion: string;
}

export type ct_infraestructura_espacio_inmueblePk = "id_espacio";
export type ct_infraestructura_espacio_inmuebleId = ct_infraestructura_espacio_inmueble[ct_infraestructura_espacio_inmueblePk];
export type ct_infraestructura_espacio_inmuebleOptionalAttributes = "id_espacio";
export type ct_infraestructura_espacio_inmuebleCreationAttributes = Optional<ct_infraestructura_espacio_inmuebleAttributes, ct_infraestructura_espacio_inmuebleOptionalAttributes>;

export class ct_infraestructura_espacio_inmueble extends Model<ct_infraestructura_espacio_inmuebleAttributes, ct_infraestructura_espacio_inmuebleCreationAttributes> implements ct_infraestructura_espacio_inmuebleAttributes {
  id_espacio!: number;
  descripcion!: string;

  // ct_infraestructura_espacio_inmueble belongsToMany ct_infraestructura_unidad via id_espacio and id_unidad
  id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmuebles!: ct_infraestructura_unidad[];
  getId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmuebles!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmuebles!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmueble!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmuebles!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmueble!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmueble!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmuebles!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmueble!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmuebles!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmuebles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_espacio_inmueble hasMany rl_infraestructura_unidad_espacio_inmueble via id_espacio
  rl_infraestructura_unidad_espacio_inmuebles!: rl_infraestructura_unidad_espacio_inmueble[];
  getRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble>;
  setRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  addRl_infraestructura_unidad_espacio_inmueble!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  addRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  createRl_infraestructura_unidad_espacio_inmueble!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_espacio_inmueble>;
  removeRl_infraestructura_unidad_espacio_inmueble!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  removeRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  hasRl_infraestructura_unidad_espacio_inmueble!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  hasRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  countRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_espacio_inmueble {
    return ct_infraestructura_espacio_inmueble.init({
    id_espacio: {
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
    tableName: 'ct_infraestructura_espacio_inmueble',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_espacio" },
        ]
      },
    ]
  });
  }
}
