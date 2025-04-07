import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_infraestructura_suministro_aguaAttributes {
  id_suministro_agua: number;
  descripcion: string;
}

export type ct_infraestructura_suministro_aguaPk = "id_suministro_agua";
export type ct_infraestructura_suministro_aguaId = ct_infraestructura_suministro_agua[ct_infraestructura_suministro_aguaPk];
export type ct_infraestructura_suministro_aguaOptionalAttributes = "id_suministro_agua";
export type ct_infraestructura_suministro_aguaCreationAttributes = Optional<ct_infraestructura_suministro_aguaAttributes, ct_infraestructura_suministro_aguaOptionalAttributes>;

export class ct_infraestructura_suministro_agua extends Model<ct_infraestructura_suministro_aguaAttributes, ct_infraestructura_suministro_aguaCreationAttributes> implements ct_infraestructura_suministro_aguaAttributes {
  id_suministro_agua!: number;
  descripcion!: string;

  // ct_infraestructura_suministro_agua hasMany ct_infraestructura_unidad via id_suministro_agua
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_suministro_agua {
    return ct_infraestructura_suministro_agua.init({
    id_suministro_agua: {
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
    tableName: 'ct_infraestructura_suministro_agua',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suministro_agua" },
        ]
      },
    ]
  });
  }
}
