import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_infraestructura_dimension_terrenoAttributes {
  id_dimension: number;
  descripcion: string;
}

export type ct_infraestructura_dimension_terrenoPk = "id_dimension";
export type ct_infraestructura_dimension_terrenoId = ct_infraestructura_dimension_terreno[ct_infraestructura_dimension_terrenoPk];
export type ct_infraestructura_dimension_terrenoOptionalAttributes = "id_dimension";
export type ct_infraestructura_dimension_terrenoCreationAttributes = Optional<ct_infraestructura_dimension_terrenoAttributes, ct_infraestructura_dimension_terrenoOptionalAttributes>;

export class ct_infraestructura_dimension_terreno extends Model<ct_infraestructura_dimension_terrenoAttributes, ct_infraestructura_dimension_terrenoCreationAttributes> implements ct_infraestructura_dimension_terrenoAttributes {
  id_dimension!: number;
  descripcion!: string;

  // ct_infraestructura_dimension_terreno hasMany ct_infraestructura_unidad via id_dimension_terreno
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_dimension_terreno {
    return ct_infraestructura_dimension_terreno.init({
    id_dimension: {
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
    tableName: 'ct_infraestructura_dimension_terreno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_dimension" },
        ]
      },
    ]
  });
  }
}
