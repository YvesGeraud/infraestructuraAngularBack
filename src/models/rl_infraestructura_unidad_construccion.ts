import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId } from './ct_infraestructura_tipo_construccion';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_construccionAttributes {
  id_unidad: number;
  id_construccion: number;
  descripcion_otro?: string;
}

export type rl_infraestructura_unidad_construccionPk = "id_unidad" | "id_construccion";
export type rl_infraestructura_unidad_construccionId = rl_infraestructura_unidad_construccion[rl_infraestructura_unidad_construccionPk];
export type rl_infraestructura_unidad_construccionOptionalAttributes = "descripcion_otro";
export type rl_infraestructura_unidad_construccionCreationAttributes = Optional<rl_infraestructura_unidad_construccionAttributes, rl_infraestructura_unidad_construccionOptionalAttributes>;

export class rl_infraestructura_unidad_construccion extends Model<rl_infraestructura_unidad_construccionAttributes, rl_infraestructura_unidad_construccionCreationAttributes> implements rl_infraestructura_unidad_construccionAttributes {
  id_unidad!: number;
  id_construccion!: number;
  descripcion_otro?: string;

  // rl_infraestructura_unidad_construccion belongsTo ct_infraestructura_tipo_construccion via id_construccion
  id_construccion_ct_infraestructura_tipo_construccion!: ct_infraestructura_tipo_construccion;
  getId_construccion_ct_infraestructura_tipo_construccion!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_tipo_construccion>;
  setId_construccion_ct_infraestructura_tipo_construccion!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId>;
  createId_construccion_ct_infraestructura_tipo_construccion!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_tipo_construccion>;
  // rl_infraestructura_unidad_construccion belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_construccion {
    return rl_infraestructura_unidad_construccion.init({
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    },
    id_construccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_tipo_construccion',
        key: 'id_construccion'
      }
    },
    descripcion_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_construccion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
          { name: "id_construccion" },
        ]
      },
      {
        name: "id_construccion",
        using: "BTREE",
        fields: [
          { name: "id_construccion" },
        ]
      },
    ]
  });
  }
}
