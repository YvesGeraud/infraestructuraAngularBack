import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_inventario, ct_inventarioId } from './ct_inventario';

export interface ct_inventario_estado_fisicoAttributes {
  id_estadoFisico: number;
  descripcion: string;
}

export type ct_inventario_estado_fisicoPk = "id_estadoFisico";
export type ct_inventario_estado_fisicoId = ct_inventario_estado_fisico[ct_inventario_estado_fisicoPk];
export type ct_inventario_estado_fisicoOptionalAttributes = "id_estadoFisico";
export type ct_inventario_estado_fisicoCreationAttributes = Optional<ct_inventario_estado_fisicoAttributes, ct_inventario_estado_fisicoOptionalAttributes>;

export class ct_inventario_estado_fisico extends Model<ct_inventario_estado_fisicoAttributes, ct_inventario_estado_fisicoCreationAttributes> implements ct_inventario_estado_fisicoAttributes {
  id_estadoFisico!: number;
  descripcion!: string;

  // ct_inventario_estado_fisico hasMany ct_inventario via id_estadoFisico
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_estado_fisico {
    return ct_inventario_estado_fisico.init({
    id_estadoFisico: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "unique_descripcion"
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_estado_fisico',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_estadoFisico" },
        ]
      },
      {
        name: "unique_descripcion",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "descripcion" },
        ]
      },
    ]
  });
  }
}
