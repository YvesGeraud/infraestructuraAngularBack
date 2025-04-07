import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ct_inventario_clasificacionAttributes {
  id_clasificacion: number;
  nombre_clasificacion: string;
}

export type ct_inventario_clasificacionPk = "id_clasificacion";
export type ct_inventario_clasificacionId = ct_inventario_clasificacion[ct_inventario_clasificacionPk];
export type ct_inventario_clasificacionOptionalAttributes = "id_clasificacion";
export type ct_inventario_clasificacionCreationAttributes = Optional<ct_inventario_clasificacionAttributes, ct_inventario_clasificacionOptionalAttributes>;

export class ct_inventario_clasificacion extends Model<ct_inventario_clasificacionAttributes, ct_inventario_clasificacionCreationAttributes> implements ct_inventario_clasificacionAttributes {
  id_clasificacion!: number;
  nombre_clasificacion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_clasificacion {
    return ct_inventario_clasificacion.init({
    id_clasificacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_clasificacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_clasificacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_clasificacion" },
        ]
      },
    ]
  });
  }
}
