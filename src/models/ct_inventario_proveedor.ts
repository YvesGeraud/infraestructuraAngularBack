import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_inventario, ct_inventarioId } from './ct_inventario';

export interface ct_inventario_proveedorAttributes {
  id_proveedor: number;
  nombre_proveedor: string;
}

export type ct_inventario_proveedorPk = "id_proveedor";
export type ct_inventario_proveedorId = ct_inventario_proveedor[ct_inventario_proveedorPk];
export type ct_inventario_proveedorOptionalAttributes = "id_proveedor";
export type ct_inventario_proveedorCreationAttributes = Optional<ct_inventario_proveedorAttributes, ct_inventario_proveedorOptionalAttributes>;

export class ct_inventario_proveedor extends Model<ct_inventario_proveedorAttributes, ct_inventario_proveedorCreationAttributes> implements ct_inventario_proveedorAttributes {
  id_proveedor!: number;
  nombre_proveedor!: string;

  // ct_inventario_proveedor hasMany ct_inventario via id_proveedor
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_proveedor {
    return ct_inventario_proveedor.init({
    id_proveedor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_proveedor: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "unique_nombre_proveedor"
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_proveedor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_proveedor" },
        ]
      },
      {
        name: "unique_nombre_proveedor",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre_proveedor" },
        ]
      },
    ]
  });
  }
}
