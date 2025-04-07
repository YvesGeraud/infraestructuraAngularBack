import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_infraestructura_frecuencia_limpiezaAttributes {
  id_frecuencia: number;
  descripcion: string;
}

export type ct_infraestructura_frecuencia_limpiezaPk = "id_frecuencia";
export type ct_infraestructura_frecuencia_limpiezaId = ct_infraestructura_frecuencia_limpieza[ct_infraestructura_frecuencia_limpiezaPk];
export type ct_infraestructura_frecuencia_limpiezaOptionalAttributes = "id_frecuencia";
export type ct_infraestructura_frecuencia_limpiezaCreationAttributes = Optional<ct_infraestructura_frecuencia_limpiezaAttributes, ct_infraestructura_frecuencia_limpiezaOptionalAttributes>;

export class ct_infraestructura_frecuencia_limpieza extends Model<ct_infraestructura_frecuencia_limpiezaAttributes, ct_infraestructura_frecuencia_limpiezaCreationAttributes> implements ct_infraestructura_frecuencia_limpiezaAttributes {
  id_frecuencia!: number;
  descripcion!: string;

  // ct_infraestructura_frecuencia_limpieza hasMany ct_infraestructura_unidad via id_frecuencia_limpieza
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_frecuencia_limpieza {
    return ct_infraestructura_frecuencia_limpieza.init({
    id_frecuencia: {
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
    tableName: 'ct_infraestructura_frecuencia_limpieza',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_frecuencia" },
        ]
      },
    ]
  });
  }
}
