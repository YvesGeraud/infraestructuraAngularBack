import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ct_inventario_modeloAttributes {
  id_modelo: number;
  nombre_modelo: string;
}

export type ct_inventario_modeloPk = "id_modelo";
export type ct_inventario_modeloId = ct_inventario_modelo[ct_inventario_modeloPk];
export type ct_inventario_modeloOptionalAttributes = "id_modelo";
export type ct_inventario_modeloCreationAttributes = Optional<ct_inventario_modeloAttributes, ct_inventario_modeloOptionalAttributes>;

export class ct_inventario_modelo extends Model<ct_inventario_modeloAttributes, ct_inventario_modeloCreationAttributes> implements ct_inventario_modeloAttributes {
  id_modelo!: number;
  nombre_modelo!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_modelo {
    return ct_inventario_modelo.init({
    id_modelo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_modelo: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_modelo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_modelo" },
        ]
      },
    ]
  });
  }
}
