import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_infraestructura_tipo_descargaAttributes {
  id_tipo_descarga: number;
  descripcion: string;
}

export type ct_infraestructura_tipo_descargaPk = "id_tipo_descarga";
export type ct_infraestructura_tipo_descargaId = ct_infraestructura_tipo_descarga[ct_infraestructura_tipo_descargaPk];
export type ct_infraestructura_tipo_descargaOptionalAttributes = "id_tipo_descarga";
export type ct_infraestructura_tipo_descargaCreationAttributes = Optional<ct_infraestructura_tipo_descargaAttributes, ct_infraestructura_tipo_descargaOptionalAttributes>;

export class ct_infraestructura_tipo_descarga extends Model<ct_infraestructura_tipo_descargaAttributes, ct_infraestructura_tipo_descargaCreationAttributes> implements ct_infraestructura_tipo_descargaAttributes {
  id_tipo_descarga!: number;
  descripcion!: string;

  // ct_infraestructura_tipo_descarga hasMany ct_infraestructura_unidad via id_tipo_descarga
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_tipo_descarga {
    return ct_infraestructura_tipo_descarga.init({
    id_tipo_descarga: {
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
    tableName: 'ct_infraestructura_tipo_descarga',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipo_descarga" },
        ]
      },
    ]
  });
  }
}
