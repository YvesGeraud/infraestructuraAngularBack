import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId } from './ct_infraestructura_suministro_agua';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_suministro_aguaAttributes {
  id_unidad: number;
  id_suministro_agua: number;
  suministro_agua_otro?: string;
}

export type rl_infraestructura_unidad_suministro_aguaPk = "id_unidad" | "id_suministro_agua";
export type rl_infraestructura_unidad_suministro_aguaId = rl_infraestructura_unidad_suministro_agua[rl_infraestructura_unidad_suministro_aguaPk];
export type rl_infraestructura_unidad_suministro_aguaOptionalAttributes = "suministro_agua_otro";
export type rl_infraestructura_unidad_suministro_aguaCreationAttributes = Optional<rl_infraestructura_unidad_suministro_aguaAttributes, rl_infraestructura_unidad_suministro_aguaOptionalAttributes>;

export class rl_infraestructura_unidad_suministro_agua extends Model<rl_infraestructura_unidad_suministro_aguaAttributes, rl_infraestructura_unidad_suministro_aguaCreationAttributes> implements rl_infraestructura_unidad_suministro_aguaAttributes {
  id_unidad!: number;
  id_suministro_agua!: number;
  suministro_agua_otro?: string;

  // rl_infraestructura_unidad_suministro_agua belongsTo ct_infraestructura_suministro_agua via id_suministro_agua
  id_suministro_agua_ct_infraestructura_suministro_agua!: ct_infraestructura_suministro_agua;
  getId_suministro_agua_ct_infraestructura_suministro_agua!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_suministro_agua>;
  setId_suministro_agua_ct_infraestructura_suministro_agua!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId>;
  createId_suministro_agua_ct_infraestructura_suministro_agua!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_suministro_agua>;
  // rl_infraestructura_unidad_suministro_agua belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_suministro_agua {
    return rl_infraestructura_unidad_suministro_agua.init({
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    },
    id_suministro_agua: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_suministro_agua',
        key: 'id_suministro_agua'
      }
    },
    suministro_agua_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_suministro_agua',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
          { name: "id_suministro_agua" },
        ]
      },
      {
        name: "id_suministro_agua",
        using: "BTREE",
        fields: [
          { name: "id_suministro_agua" },
        ]
      },
    ]
  });
  }
}
