import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_nivel_educativo, ct_infraestructura_nivel_educativoId } from './ct_infraestructura_nivel_educativo';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_nivelAttributes {
  id_unidad: number;
  id_nivel: number;
}

export type rl_infraestructura_unidad_nivelPk = "id_unidad" | "id_nivel";
export type rl_infraestructura_unidad_nivelId = rl_infraestructura_unidad_nivel[rl_infraestructura_unidad_nivelPk];
export type rl_infraestructura_unidad_nivelCreationAttributes = rl_infraestructura_unidad_nivelAttributes;

export class rl_infraestructura_unidad_nivel extends Model<rl_infraestructura_unidad_nivelAttributes, rl_infraestructura_unidad_nivelCreationAttributes> implements rl_infraestructura_unidad_nivelAttributes {
  id_unidad!: number;
  id_nivel!: number;

  // rl_infraestructura_unidad_nivel belongsTo ct_infraestructura_nivel_educativo via id_nivel
  id_nivel_ct_infraestructura_nivel_educativo!: ct_infraestructura_nivel_educativo;
  getId_nivel_ct_infraestructura_nivel_educativo!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_nivel_educativo>;
  setId_nivel_ct_infraestructura_nivel_educativo!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_nivel_educativo, ct_infraestructura_nivel_educativoId>;
  createId_nivel_ct_infraestructura_nivel_educativo!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_nivel_educativo>;
  // rl_infraestructura_unidad_nivel belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_nivel {
    return rl_infraestructura_unidad_nivel.init({
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    },
    id_nivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_nivel_educativo',
        key: 'id_nivel'
      }
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_nivel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
          { name: "id_nivel" },
        ]
      },
      {
        name: "id_nivel",
        using: "BTREE",
        fields: [
          { name: "id_nivel" },
        ]
      },
    ]
  });
  }
}
