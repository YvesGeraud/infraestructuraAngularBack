import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ct_inventario_materialAttributes {
  id_material: number;
  nombre_material: string;
}

export type ct_inventario_materialPk = "id_material";
export type ct_inventario_materialId = ct_inventario_material[ct_inventario_materialPk];
export type ct_inventario_materialOptionalAttributes = "id_material";
export type ct_inventario_materialCreationAttributes = Optional<ct_inventario_materialAttributes, ct_inventario_materialOptionalAttributes>;

export class ct_inventario_material extends Model<ct_inventario_materialAttributes, ct_inventario_materialCreationAttributes> implements ct_inventario_materialAttributes {
  id_material!: number;
  nombre_material!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_material {
    return ct_inventario_material.init({
    id_material: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_material: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_material',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_material" },
        ]
      },
    ]
  });
  }
}
