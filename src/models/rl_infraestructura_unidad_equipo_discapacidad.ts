import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId } from './ct_infraestructura_equipo_discapacidad';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_equipo_discapacidadAttributes {
  id_unidad: number;
  id_equipo: number;
  en_operacion?: number;
  en_reparacion?: number;
  en_reserva?: number;
  total?: number;
  especificacion_otro?: string;
}

export type rl_infraestructura_unidad_equipo_discapacidadPk = "id_unidad" | "id_equipo";
export type rl_infraestructura_unidad_equipo_discapacidadId = rl_infraestructura_unidad_equipo_discapacidad[rl_infraestructura_unidad_equipo_discapacidadPk];
export type rl_infraestructura_unidad_equipo_discapacidadOptionalAttributes = "en_operacion" | "en_reparacion" | "en_reserva" | "total" | "especificacion_otro";
export type rl_infraestructura_unidad_equipo_discapacidadCreationAttributes = Optional<rl_infraestructura_unidad_equipo_discapacidadAttributes, rl_infraestructura_unidad_equipo_discapacidadOptionalAttributes>;

export class rl_infraestructura_unidad_equipo_discapacidad extends Model<rl_infraestructura_unidad_equipo_discapacidadAttributes, rl_infraestructura_unidad_equipo_discapacidadCreationAttributes> implements rl_infraestructura_unidad_equipo_discapacidadAttributes {
  id_unidad!: number;
  id_equipo!: number;
  en_operacion?: number;
  en_reparacion?: number;
  en_reserva?: number;
  total?: number;
  especificacion_otro?: string;

  // rl_infraestructura_unidad_equipo_discapacidad belongsTo ct_infraestructura_equipo_discapacidad via id_equipo
  id_equipo_ct_infraestructura_equipo_discapacidad!: ct_infraestructura_equipo_discapacidad;
  getId_equipo_ct_infraestructura_equipo_discapacidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_equipo_discapacidad>;
  setId_equipo_ct_infraestructura_equipo_discapacidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId>;
  createId_equipo_ct_infraestructura_equipo_discapacidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_equipo_discapacidad>;
  // rl_infraestructura_unidad_equipo_discapacidad belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_equipo_discapacidad {
    return rl_infraestructura_unidad_equipo_discapacidad.init({
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    },
    id_equipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_equipo_discapacidad',
        key: 'id_equipo'
      }
    },
    en_operacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    en_reparacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    en_reserva: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    especificacion_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_equipo_discapacidad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
          { name: "id_equipo" },
        ]
      },
      {
        name: "id_equipo",
        using: "BTREE",
        fields: [
          { name: "id_equipo" },
        ]
      },
    ]
  });
  }
}
