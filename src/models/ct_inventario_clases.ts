import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_inventario_subclases, ct_inventario_subclasesId } from './ct_inventario_subclases';

export interface ct_inventario_clasesAttributes {
  id_clase: number;
  descripcion: string;
}

export type ct_inventario_clasesPk = "id_clase";
export type ct_inventario_clasesId = ct_inventario_clases[ct_inventario_clasesPk];
export type ct_inventario_clasesOptionalAttributes = "id_clase";
export type ct_inventario_clasesCreationAttributes = Optional<ct_inventario_clasesAttributes, ct_inventario_clasesOptionalAttributes>;

export class ct_inventario_clases extends Model<ct_inventario_clasesAttributes, ct_inventario_clasesCreationAttributes> implements ct_inventario_clasesAttributes {
  id_clase!: number;
  descripcion!: string;

  // ct_inventario_clases hasMany ct_inventario_subclases via id_clase
  ct_inventario_subclases!: ct_inventario_subclases[];
  getCt_inventario_subclases!: Sequelize.HasManyGetAssociationsMixin<ct_inventario_subclases>;
  setCt_inventario_subclases!: Sequelize.HasManySetAssociationsMixin<ct_inventario_subclases, ct_inventario_subclasesId>;
  addCt_inventario_subclase!: Sequelize.HasManyAddAssociationMixin<ct_inventario_subclases, ct_inventario_subclasesId>;
  addCt_inventario_subclases!: Sequelize.HasManyAddAssociationsMixin<ct_inventario_subclases, ct_inventario_subclasesId>;
  createCt_inventario_subclase!: Sequelize.HasManyCreateAssociationMixin<ct_inventario_subclases>;
  removeCt_inventario_subclase!: Sequelize.HasManyRemoveAssociationMixin<ct_inventario_subclases, ct_inventario_subclasesId>;
  removeCt_inventario_subclases!: Sequelize.HasManyRemoveAssociationsMixin<ct_inventario_subclases, ct_inventario_subclasesId>;
  hasCt_inventario_subclase!: Sequelize.HasManyHasAssociationMixin<ct_inventario_subclases, ct_inventario_subclasesId>;
  hasCt_inventario_subclases!: Sequelize.HasManyHasAssociationsMixin<ct_inventario_subclases, ct_inventario_subclasesId>;
  countCt_inventario_subclases!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario_clases {
    return ct_inventario_clases.init({
    id_clase: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_inventario_clases',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_clase" },
        ]
      },
    ]
  });
  }
}
