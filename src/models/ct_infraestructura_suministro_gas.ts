import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_infraestructura_suministro_gasAttributes {
  id_suministro_gas: number;
  descripcion: string;
}

export type ct_infraestructura_suministro_gasPk = "id_suministro_gas";
export type ct_infraestructura_suministro_gasId = ct_infraestructura_suministro_gas[ct_infraestructura_suministro_gasPk];
export type ct_infraestructura_suministro_gasOptionalAttributes = "id_suministro_gas";
export type ct_infraestructura_suministro_gasCreationAttributes = Optional<ct_infraestructura_suministro_gasAttributes, ct_infraestructura_suministro_gasOptionalAttributes>;

export class ct_infraestructura_suministro_gas extends Model<ct_infraestructura_suministro_gasAttributes, ct_infraestructura_suministro_gasCreationAttributes> implements ct_infraestructura_suministro_gasAttributes {
  id_suministro_gas!: number;
  descripcion!: string;

  // ct_infraestructura_suministro_gas hasMany ct_infraestructura_unidad via id_suministro_gas
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_suministro_gas {
    return ct_infraestructura_suministro_gas.init({
    id_suministro_gas: {
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
    tableName: 'ct_infraestructura_suministro_gas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suministro_gas" },
        ]
      },
    ]
  });
  }
}
