import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId } from './ct_infraestructura_obra_mantenimiento';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_obra_mantenimientoAttributes {
  id_unidad: number;
  id_obra: number;
  descripcion_otro?: string;
}

export type rl_infraestructura_unidad_obra_mantenimientoPk = "id_unidad" | "id_obra";
export type rl_infraestructura_unidad_obra_mantenimientoId = rl_infraestructura_unidad_obra_mantenimiento[rl_infraestructura_unidad_obra_mantenimientoPk];
export type rl_infraestructura_unidad_obra_mantenimientoOptionalAttributes = "descripcion_otro";
export type rl_infraestructura_unidad_obra_mantenimientoCreationAttributes = Optional<rl_infraestructura_unidad_obra_mantenimientoAttributes, rl_infraestructura_unidad_obra_mantenimientoOptionalAttributes>;

export class rl_infraestructura_unidad_obra_mantenimiento extends Model<rl_infraestructura_unidad_obra_mantenimientoAttributes, rl_infraestructura_unidad_obra_mantenimientoCreationAttributes> implements rl_infraestructura_unidad_obra_mantenimientoAttributes {
  id_unidad!: number;
  id_obra!: number;
  descripcion_otro?: string;

  // rl_infraestructura_unidad_obra_mantenimiento belongsTo ct_infraestructura_obra_mantenimiento via id_obra
  id_obra_ct_infraestructura_obra_mantenimiento!: ct_infraestructura_obra_mantenimiento;
  getId_obra_ct_infraestructura_obra_mantenimiento!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_obra_mantenimiento>;
  setId_obra_ct_infraestructura_obra_mantenimiento!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId>;
  createId_obra_ct_infraestructura_obra_mantenimiento!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_obra_mantenimiento>;
  // rl_infraestructura_unidad_obra_mantenimiento belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_obra_mantenimiento {
    return rl_infraestructura_unidad_obra_mantenimiento.init({
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    },
    id_obra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_obra_mantenimiento',
        key: 'id_obra'
      }
    },
    descripcion_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_obra_mantenimiento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
          { name: "id_obra" },
        ]
      },
      {
        name: "id_obra",
        using: "BTREE",
        fields: [
          { name: "id_obra" },
        ]
      },
    ]
  });
  }
}
