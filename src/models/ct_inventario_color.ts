import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_inventario, ct_inventarioId } from './ct_inventario';

export interface ct_inventario_colorAttributes {
  id_color: number;
  nombre_color: string;
}

export type ct_inventario_colorPk = "id_color";
export type ct_inventario_colorId = ct_inventario_color[ct_inventario_colorPk];
export type ct_inventario_colorOptionalAttributes = "id_color";
export type ct_inventario_colorCreationAttributes = Optional<ct_inventario_colorAttributes, ct_inventario_colorOptionalAttributes>;

export class ct_inventario_color extends Model<ct_inventario_colorAttributes, ct_inventario_colorCreationAttributes> implements ct_inventario_colorAttributes {
  id_color!: number;
  nombre_color!: string;

  // ct_inventario_color hasMany ct_inventario via id_color
  ct_inventarios!: ct_inventario[];
  getCt_inventarios!: Sequelize.HasManyGetAssociationsMixin<ct_inventario>;
  setCt_inventarios!: Sequelize.HasManySetAssociationsMixin<ct_inventario, ct_inventarioId>;
  addCt_inventario!: Sequelize.HasManyAddAssociationMixin<ct_inventario, ct_inventarioId>;
  addCt_inventarios!: Sequelize.HasManyAddAssociationsMixin<ct_inventario, ct_inventarioId>;
  createCt_inventario!: Sequelize.HasManyCreateAssociationMixin<ct_inventario>;
  removeCt_inventario!: Sequelize.HasManyRemoveAssociationMixin<ct_inventario, ct_inventarioId>;
  removeCt_inventarios!: Sequelize.HasManyRemoveAssociationsMixin<ct_inventario, ct_inventarioId>;
  hasCt_inventario!: Sequelize.HasManyHasAssociationMixin<ct_inventario, ct_inventarioId>;
  hasCt_inventarios!: Sequelize.HasManyHasAssociationsMixin<ct_inventario, ct_inventarioId>;
  countCt_inventarios!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_color {
    return ct_inventario_color.init({
    id_color: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_color: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "unique_nombre_color"
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_color',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_color" },
        ]
      },
      {
        name: "unique_nombre_color",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre_color" },
        ]
      },
    ]
  });
  }
}
