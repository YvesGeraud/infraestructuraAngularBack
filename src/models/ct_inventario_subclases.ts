import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_inventario, ct_inventarioId } from './ct_inventario';
import type { ct_inventario_clases, ct_inventario_clasesId } from './ct_inventario_clases';

export interface ct_inventario_subclasesAttributes {
  id_subclase: number;
  id_clase: number;
  no_subclase: string;
  descripcion: string;
}

export type ct_inventario_subclasesPk = "id_subclase";
export type ct_inventario_subclasesId = ct_inventario_subclases[ct_inventario_subclasesPk];
export type ct_inventario_subclasesOptionalAttributes = "id_subclase";
export type ct_inventario_subclasesCreationAttributes = Optional<ct_inventario_subclasesAttributes, ct_inventario_subclasesOptionalAttributes>;

export class ct_inventario_subclases extends Model<ct_inventario_subclasesAttributes, ct_inventario_subclasesCreationAttributes> implements ct_inventario_subclasesAttributes {
  id_subclase!: number;
  id_clase!: number;
  no_subclase!: string;
  descripcion!: string;

  // ct_inventario_subclases belongsTo ct_inventario_clases via id_clase
  id_clase_ct_inventario_clase!: ct_inventario_clases;
  getId_clase_ct_inventario_clase!: Sequelize.BelongsToGetAssociationMixin<ct_inventario_clases>;
  setId_clase_ct_inventario_clase!: Sequelize.BelongsToSetAssociationMixin<ct_inventario_clases, ct_inventario_clasesId>;
  createId_clase_ct_inventario_clase!: Sequelize.BelongsToCreateAssociationMixin<ct_inventario_clases>;
  // ct_inventario_subclases hasMany ct_inventario via id_subclase
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_subclases {
    return ct_inventario_subclases.init({
    id_subclase: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_clase: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ct_inventario_clases',
        key: 'id_clase'
      }
    },
    no_subclase: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_subclases',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subclase" },
        ]
      },
      {
        name: "fk_ct_inventario_clases",
        using: "BTREE",
        fields: [
          { name: "id_clase" },
        ]
      },
    ]
  });
  }
}
