import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ct_inventario_marcaAttributes {
  id_marca: number;
  nombre_marca: string;
}

export type ct_inventario_marcaPk = "id_marca";
export type ct_inventario_marcaId = ct_inventario_marca[ct_inventario_marcaPk];
export type ct_inventario_marcaOptionalAttributes = "id_marca";
export type ct_inventario_marcaCreationAttributes = Optional<ct_inventario_marcaAttributes, ct_inventario_marcaOptionalAttributes>;

export class ct_inventario_marca extends Model<ct_inventario_marcaAttributes, ct_inventario_marcaCreationAttributes> implements ct_inventario_marcaAttributes {
  id_marca!: number;
  nombre_marca!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_marca {
    return ct_inventario_marca.init({
    id_marca: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_marca: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_marca',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_marca" },
        ]
      },
    ]
  });
  }
}
