import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ct_infraestructura_material_techoAttributes {
  id_material_techo: number;
  descripcion: string;
}

export type ct_infraestructura_material_techoPk = "id_material_techo";
export type ct_infraestructura_material_techoId = ct_infraestructura_material_techo[ct_infraestructura_material_techoPk];
export type ct_infraestructura_material_techoOptionalAttributes = "id_material_techo";
export type ct_infraestructura_material_techoCreationAttributes = Optional<ct_infraestructura_material_techoAttributes, ct_infraestructura_material_techoOptionalAttributes>;

export class ct_infraestructura_material_techo extends Model<ct_infraestructura_material_techoAttributes, ct_infraestructura_material_techoCreationAttributes> implements ct_infraestructura_material_techoAttributes {
  id_material_techo!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_material_techo {
    return ct_infraestructura_material_techo.init({
    id_material_techo: {
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
    tableName: 'ct_infraestructura_material_techo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_material_techo" },
        ]
      },
    ]
  });
  }
}
