import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_infraestructura_sostenimientoAttributes {
  id_sostenimiento: number;
  sostenimiento: string;
}

export type ct_infraestructura_sostenimientoPk = "id_sostenimiento";
export type ct_infraestructura_sostenimientoId = ct_infraestructura_sostenimiento[ct_infraestructura_sostenimientoPk];
export type ct_infraestructura_sostenimientoOptionalAttributes = "id_sostenimiento";
export type ct_infraestructura_sostenimientoCreationAttributes = Optional<ct_infraestructura_sostenimientoAttributes, ct_infraestructura_sostenimientoOptionalAttributes>;

export class ct_infraestructura_sostenimiento extends Model<ct_infraestructura_sostenimientoAttributes, ct_infraestructura_sostenimientoCreationAttributes> implements ct_infraestructura_sostenimientoAttributes {
  id_sostenimiento!: number;
  sostenimiento!: string;

  // ct_infraestructura_sostenimiento hasMany ct_infraestructura_unidad via id_sostenimiento
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_sostenimiento {
    return ct_infraestructura_sostenimiento.init({
    id_sostenimiento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sostenimiento: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "escuelaSostenimiento_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_sostenimiento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_sostenimiento" },
        ]
      },
      {
        name: "escuelaSostenimiento_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sostenimiento" },
        ]
      },
    ]
  });
  }
}
