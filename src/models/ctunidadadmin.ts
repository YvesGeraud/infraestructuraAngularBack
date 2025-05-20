import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ctunidadadminAttributes {
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

export type ctunidadadminPk = "id";
export type ctunidadadminId = ctunidadadmin[ctunidadadminPk];
export type ctunidadadminOptionalAttributes = "id" | "idUnidadF" | "idAmin" | "idAnalista" | "techoO" | "techoG" | "techoRe" | "clasificador" | "ctStatus";
export type ctunidadadminCreationAttributes = Optional<ctunidadadminAttributes, ctunidadadminOptionalAttributes>;

export class ctunidadadmin extends Model<ctunidadadminAttributes, ctunidadadminCreationAttributes> implements ctunidadadminAttributes {
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


  static initModel(sequelize: Sequelize.Sequelize): typeof ctunidadadmin {
    return ctunidadadmin.init({
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
    tableName: 'ctunidadadmin',
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
