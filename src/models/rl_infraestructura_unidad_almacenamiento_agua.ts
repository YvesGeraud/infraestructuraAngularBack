import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId } from './ct_infraestructura_almacenamiento_agua';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_almacenamiento_aguaAttributes {
  id_unidad: number;
  id_almacenamiento: number;
  almacenamiento_otro?: string;
}

export type rl_infraestructura_unidad_almacenamiento_aguaPk = "id_unidad" | "id_almacenamiento";
export type rl_infraestructura_unidad_almacenamiento_aguaId = rl_infraestructura_unidad_almacenamiento_agua[rl_infraestructura_unidad_almacenamiento_aguaPk];
export type rl_infraestructura_unidad_almacenamiento_aguaOptionalAttributes = "almacenamiento_otro";
export type rl_infraestructura_unidad_almacenamiento_aguaCreationAttributes = Optional<rl_infraestructura_unidad_almacenamiento_aguaAttributes, rl_infraestructura_unidad_almacenamiento_aguaOptionalAttributes>;

export class rl_infraestructura_unidad_almacenamiento_agua extends Model<rl_infraestructura_unidad_almacenamiento_aguaAttributes, rl_infraestructura_unidad_almacenamiento_aguaCreationAttributes> implements rl_infraestructura_unidad_almacenamiento_aguaAttributes {
  id_unidad!: number;
  id_almacenamiento!: number;
  almacenamiento_otro?: string;

  // rl_infraestructura_unidad_almacenamiento_agua belongsTo ct_infraestructura_almacenamiento_agua via id_almacenamiento
  id_almacenamiento_ct_infraestructura_almacenamiento_agua!: ct_infraestructura_almacenamiento_agua;
  getId_almacenamiento_ct_infraestructura_almacenamiento_agua!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_almacenamiento_agua>;
  setId_almacenamiento_ct_infraestructura_almacenamiento_agua!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId>;
  createId_almacenamiento_ct_infraestructura_almacenamiento_agua!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_almacenamiento_agua>;
  // rl_infraestructura_unidad_almacenamiento_agua belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_almacenamiento_agua {
    return rl_infraestructura_unidad_almacenamiento_agua.init({
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    },
    id_almacenamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_almacenamiento_agua',
        key: 'id_almacenamiento'
      }
    },
    almacenamiento_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_almacenamiento_agua',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
          { name: "id_almacenamiento" },
        ]
      },
      {
        name: "id_almacenamiento",
        using: "BTREE",
        fields: [
          { name: "id_almacenamiento" },
        ]
      },
    ]
  });
  }
}
