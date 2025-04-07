import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ct_infraestructura_material_pisosAttributes {
  id_material_pisos: number;
  descripcion: string;
}

export type ct_infraestructura_material_pisosPk = "id_material_pisos";
export type ct_infraestructura_material_pisosId = ct_infraestructura_material_pisos[ct_infraestructura_material_pisosPk];
export type ct_infraestructura_material_pisosOptionalAttributes = "id_material_pisos";
export type ct_infraestructura_material_pisosCreationAttributes = Optional<ct_infraestructura_material_pisosAttributes, ct_infraestructura_material_pisosOptionalAttributes>;

export class ct_infraestructura_material_pisos extends Model<ct_infraestructura_material_pisosAttributes, ct_infraestructura_material_pisosCreationAttributes> implements ct_infraestructura_material_pisosAttributes {
  id_material_pisos!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_material_pisos {
    return ct_infraestructura_material_pisos.init({
    id_material_pisos: {
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
    tableName: 'ct_infraestructura_material_pisos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_material_pisos" },
        ]
      },
    ]
  });
  }
}
