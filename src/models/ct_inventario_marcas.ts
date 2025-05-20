import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_inventario, ct_inventarioId } from './ct_inventario';

export interface ct_inventario_marcasAttributes {
  id_marca: number;
  nombre_marca: string;
}

export type ct_inventario_marcasPk = "id_marca";
export type ct_inventario_marcasId = ct_inventario_marcas[ct_inventario_marcasPk];
export type ct_inventario_marcasOptionalAttributes = "id_marca";
export type ct_inventario_marcasCreationAttributes = Optional<ct_inventario_marcasAttributes, ct_inventario_marcasOptionalAttributes>;

export class ct_inventario_marcas extends Model<ct_inventario_marcasAttributes, ct_inventario_marcasCreationAttributes> implements ct_inventario_marcasAttributes {
  id_marca!: number;
  nombre_marca!: string;

  // ct_inventario_marcas hasMany ct_inventario via id_marca
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_marcas {
    return ct_inventario_marcas.init({
    id_marca: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_marca: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "unique_nombre_marca"
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_marcas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_marca" },
        ]
      },
      {
        name: "unique_nombre_marca",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre_marca" },
        ]
      },
    ]
  });
  }
}
