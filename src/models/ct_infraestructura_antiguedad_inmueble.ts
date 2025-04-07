import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_infraestructura_antiguedad_inmuebleAttributes {
  id_antiguedad: number;
  descripcion: string;
}

export type ct_infraestructura_antiguedad_inmueblePk = "id_antiguedad";
export type ct_infraestructura_antiguedad_inmuebleId = ct_infraestructura_antiguedad_inmueble[ct_infraestructura_antiguedad_inmueblePk];
export type ct_infraestructura_antiguedad_inmuebleCreationAttributes = ct_infraestructura_antiguedad_inmuebleAttributes;

export class ct_infraestructura_antiguedad_inmueble extends Model<ct_infraestructura_antiguedad_inmuebleAttributes, ct_infraestructura_antiguedad_inmuebleCreationAttributes> implements ct_infraestructura_antiguedad_inmuebleAttributes {
  id_antiguedad!: number;
  descripcion!: string;

  // ct_infraestructura_antiguedad_inmueble hasMany ct_infraestructura_unidad via id_antiguedad_inmueble
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_antiguedad_inmueble {
    return ct_infraestructura_antiguedad_inmueble.init({
    id_antiguedad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_antiguedad_inmueble',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_antiguedad" },
        ]
      },
    ]
  });
  }
}
