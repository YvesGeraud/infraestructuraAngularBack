import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_localidad, ct_localidadId } from './ct_localidad';

export interface ct_municipioAttributes {
  id_municipio: number;
  identificacion_inegi: string;
  nombre: string;
}

export type ct_municipioPk = "id_municipio";
export type ct_municipioId = ct_municipio[ct_municipioPk];
export type ct_municipioOptionalAttributes = "id_municipio" | "identificacion_inegi";
export type ct_municipioCreationAttributes = Optional<ct_municipioAttributes, ct_municipioOptionalAttributes>;

export class ct_municipio extends Model<ct_municipioAttributes, ct_municipioCreationAttributes> implements ct_municipioAttributes {
  id_municipio!: number;
  identificacion_inegi!: string;
  nombre!: string;

  // ct_municipio hasMany ct_localidad via id_municipio
  ct_localidads!: ct_localidad[];
  getCt_localidads!: Sequelize.HasManyGetAssociationsMixin<ct_localidad>;
  setCt_localidads!: Sequelize.HasManySetAssociationsMixin<ct_localidad, ct_localidadId>;
  addCt_localidad!: Sequelize.HasManyAddAssociationMixin<ct_localidad, ct_localidadId>;
  addCt_localidads!: Sequelize.HasManyAddAssociationsMixin<ct_localidad, ct_localidadId>;
  createCt_localidad!: Sequelize.HasManyCreateAssociationMixin<ct_localidad>;
  removeCt_localidad!: Sequelize.HasManyRemoveAssociationMixin<ct_localidad, ct_localidadId>;
  removeCt_localidads!: Sequelize.HasManyRemoveAssociationsMixin<ct_localidad, ct_localidadId>;
  hasCt_localidad!: Sequelize.HasManyHasAssociationMixin<ct_localidad, ct_localidadId>;
  hasCt_localidads!: Sequelize.HasManyHasAssociationsMixin<ct_localidad, ct_localidadId>;
  countCt_localidads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_municipio {
    return ct_municipio.init({
    id_municipio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    identificacion_inegi: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_municipio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_municipio" },
        ]
      },
    ]
  });
  }
}
