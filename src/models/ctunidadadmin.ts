import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ctUnidadAdminAttributes {
  id: number;
  idUnidadF?: number;
  idAmin?: number;
  idAnalista?: number;
  unidadAdmin: string;
  techoO?: number;
  techoG?: number;
  techoRe?: number;
  clasificador?: number;
  ctStatus?: number;
}

export type ctUnidadAdminPk = "id";
export type ctUnidadAdminId = ctUnidadAdmin[ctUnidadAdminPk];
export type ctUnidadAdminOptionalAttributes = "id" | "idUnidadF" | "idAmin" | "idAnalista" | "techoO" | "techoG" | "techoRe" | "clasificador" | "ctStatus";
export type ctUnidadAdminCreationAttributes = Optional<ctUnidadAdminAttributes, ctUnidadAdminOptionalAttributes>;

export class ctUnidadAdmin extends Model<ctUnidadAdminAttributes, ctUnidadAdminCreationAttributes> implements ctUnidadAdminAttributes {
  id!: number;
  idUnidadF?: number;
  idAmin?: number;
  idAnalista?: number;
  unidadAdmin!: string;
  techoO?: number;
  techoG?: number;
  techoRe?: number;
  clasificador?: number;
  ctStatus?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ctUnidadAdmin {
    return ctUnidadAdmin.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idUnidadF: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    idAmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idAnalista: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unidadAdmin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    techoO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    techoG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    techoRe: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clasificador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ctStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ctUnidadAdmin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
