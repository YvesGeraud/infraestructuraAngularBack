import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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
      allowNull: false
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
    ]
  });
  }
}
