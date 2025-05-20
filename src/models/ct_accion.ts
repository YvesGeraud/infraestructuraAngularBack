import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_inventario, ct_inventarioId } from './ct_inventario';

export interface ct_accionAttributes {
  id_accion: number;
  nombre_accion?: string;
  descripcion?: string;
}

export type ct_accionPk = "id_accion";
export type ct_accionId = ct_accion[ct_accionPk];
export type ct_accionOptionalAttributes = "id_accion" | "nombre_accion" | "descripcion";
export type ct_accionCreationAttributes = Optional<ct_accionAttributes, ct_accionOptionalAttributes>;

export class ct_accion extends Model<ct_accionAttributes, ct_accionCreationAttributes> implements ct_accionAttributes {
  id_accion!: number;
  nombre_accion?: string;
  descripcion?: string;

  // ct_accion hasMany ct_inventario via id_accion
  ct_inventarios!: ct_inventario[];
  getCt_inventarios!: Sequelize.HasManyGetAssociationsMixin<ct_inventario>;
  setCt_inventarios!: Sequelize.HasManySetAssociationsMixin<ct_inventario, ct_inventarioId>;
  addCt_inventario!: Sequelize.HasManyAddAssociationMixin<ct_inventario, ct_inventarioId>;
  addCt_inventarios!: Sequelize.HasManyAddAssociationsMixin<ct_inventario, ct_inventarioId>;
  createCt_inventario!: Sequelize.HasManyCreateAssociationMixin<ct_inventario>;
  removeCt_inventario!: Sequelize.HasManyRemoveAssociationMixin<ct_inventario, ct_inventarioId>;
  removeCt_inventarios!: Sequelize.HasManyRemoveAssociationsMixin<ct_inventario, ct_inventarioId>;
  hasCt_inventario!: Sequelize.HasManyHasAssociationMixin<ct_inventario, ct_inventarioId>;
  hasCt_inventarios!: Sequelize.HasManyHasAssociationsMixin<ct_inventario, ct_inventarioId>;
  countCt_inventarios!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_accion {
    return ct_accion.init({
    id_accion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_accion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_accion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_accion" },
        ]
      },
    ]
  });
  }
}
