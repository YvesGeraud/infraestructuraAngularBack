import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ct_infraestructura_material_paredesAttributes {
  id_material_paredes: number;
  descripcion: string;
}

export type ct_infraestructura_material_paredesPk = "id_material_paredes";
export type ct_infraestructura_material_paredesId = ct_infraestructura_material_paredes[ct_infraestructura_material_paredesPk];
export type ct_infraestructura_material_paredesOptionalAttributes = "id_material_paredes";
export type ct_infraestructura_material_paredesCreationAttributes = Optional<ct_infraestructura_material_paredesAttributes, ct_infraestructura_material_paredesOptionalAttributes>;

export class ct_infraestructura_material_paredes extends Model<ct_infraestructura_material_paredesAttributes, ct_infraestructura_material_paredesCreationAttributes> implements ct_infraestructura_material_paredesAttributes {
  id_material_paredes!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_material_paredes {
    return ct_infraestructura_material_paredes.init({
    id_material_paredes: {
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
    tableName: 'ct_infraestructura_material_paredes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_material_paredes" },
        ]
      },
    ]
  });
  }
}
