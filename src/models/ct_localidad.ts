import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { ct_municipio, ct_municipioId } from './ct_municipio';

export interface ct_localidadAttributes {
  id_localidad: number;
  localidad: string;
  ambito: string;
  id_municipio: number;
}

export type ct_localidadPk = "id_localidad";
export type ct_localidadId = ct_localidad[ct_localidadPk];
export type ct_localidadOptionalAttributes = "id_localidad";
export type ct_localidadCreationAttributes = Optional<ct_localidadAttributes, ct_localidadOptionalAttributes>;

export class ct_localidad extends Model<ct_localidadAttributes, ct_localidadCreationAttributes> implements ct_localidadAttributes {
  id_localidad!: number;
  localidad!: string;
  ambito!: string;
  id_municipio!: number;

  // ct_localidad hasMany ct_infraestructura_unidad via id_localidad
  ct_infraestructura_unidads!: ct_infraestructura_unidad[];
  getCt_infraestructura_unidads!: Sequelize.HasManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setCt_infraestructura_unidads!: Sequelize.HasManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addCt_infraestructura_unidad!: Sequelize.HasManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addCt_infraestructura_unidads!: Sequelize.HasManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createCt_infraestructura_unidad!: Sequelize.HasManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeCt_infraestructura_unidad!: Sequelize.HasManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeCt_infraestructura_unidads!: Sequelize.HasManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasCt_infraestructura_unidad!: Sequelize.HasManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasCt_infraestructura_unidads!: Sequelize.HasManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countCt_infraestructura_unidads!: Sequelize.HasManyCountAssociationsMixin;
  // ct_localidad belongsTo ct_municipio via id_municipio
  id_municipio_ct_municipio!: ct_municipio;
  getId_municipio_ct_municipio!: Sequelize.BelongsToGetAssociationMixin<ct_municipio>;
  setId_municipio_ct_municipio!: Sequelize.BelongsToSetAssociationMixin<ct_municipio, ct_municipioId>;
  createId_municipio_ct_municipio!: Sequelize.BelongsToCreateAssociationMixin<ct_municipio>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_localidad {
    return ct_localidad.init({
    id_localidad: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    localidad: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ambito: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    id_municipio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ct_municipio',
        key: 'id_municipio'
      }
    }
  }, {
    sequelize,
    tableName: 'ct_localidad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_localidad" },
        ]
      },
      {
        name: "id_municipio",
        using: "BTREE",
        fields: [
          { name: "id_municipio" },
        ]
      },
    ]
  });
  }
}
