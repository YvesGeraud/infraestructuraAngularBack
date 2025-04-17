import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_infraestructura_tipo_escuelaAttributes {
  id_tipo_escuela: number;
  tipo_escuela: string;
  clave: string;
}

export type ct_infraestructura_tipo_escuelaPk = "id_tipo_escuela";
export type ct_infraestructura_tipo_escuelaId = ct_infraestructura_tipo_escuela[ct_infraestructura_tipo_escuelaPk];
export type ct_infraestructura_tipo_escuelaOptionalAttributes = "id_tipo_escuela";
export type ct_infraestructura_tipo_escuelaCreationAttributes = Optional<ct_infraestructura_tipo_escuelaAttributes, ct_infraestructura_tipo_escuelaOptionalAttributes>;

export class ct_infraestructura_tipo_escuela extends Model<ct_infraestructura_tipo_escuelaAttributes, ct_infraestructura_tipo_escuelaCreationAttributes> implements ct_infraestructura_tipo_escuelaAttributes {
  id_tipo_escuela!: number;
  tipo_escuela!: string;
  clave!: string;

  // ct_infraestructura_tipo_escuela hasMany ct_infraestructura_unidad via id_tipo_escuela
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_tipo_escuela {
    return ct_infraestructura_tipo_escuela.init({
    id_tipo_escuela: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_escuela: {
      type: DataTypes.STRING(85),
      allowNull: false
    },
    clave: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_tipo_escuela',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipo_escuela" },
        ]
      },
    ]
  });
  }
}
