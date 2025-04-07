import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_infraestructura_razon_no_construccionAttributes {
  id_razon: number;
  descripcion: string;
}

export type ct_infraestructura_razon_no_construccionPk = "id_razon";
export type ct_infraestructura_razon_no_construccionId = ct_infraestructura_razon_no_construccion[ct_infraestructura_razon_no_construccionPk];
export type ct_infraestructura_razon_no_construccionOptionalAttributes = "id_razon";
export type ct_infraestructura_razon_no_construccionCreationAttributes = Optional<ct_infraestructura_razon_no_construccionAttributes, ct_infraestructura_razon_no_construccionOptionalAttributes>;

export class ct_infraestructura_razon_no_construccion extends Model<ct_infraestructura_razon_no_construccionAttributes, ct_infraestructura_razon_no_construccionCreationAttributes> implements ct_infraestructura_razon_no_construccionAttributes {
  id_razon!: number;
  descripcion!: string;

  // ct_infraestructura_razon_no_construccion hasMany ct_infraestructura_unidad via id_razon_no_construccion
  ct_infraestructura_unidads!: ct_infraestructura_unidad[];
  getCt_infraestructura_unidads!: Sequelize.HasManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setCt_infraestructura_unidads!: Sequelize.HasManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addCt_infraestructura_unidad!: Sequelize.HasManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addCt_infraestructura_unidads!: Sequelize.HasManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createCt_infraestructura_unidad!: Sequelize.HasManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeCt_infraestructura_unidad!: Sequelize.HasManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeCt_infraestructura_unidads!: Sequelize.HasManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasCt_infraestructura_unidad!: Sequelize.HasManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasCt_infraestructura_unidads!: Sequelize.HasManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countCt_infraestructura_unidads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_razon_no_construccion {
    return ct_infraestructura_razon_no_construccion.init({
    id_razon: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_razon_no_construccion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_razon" },
        ]
      },
    ]
  });
  }
}
