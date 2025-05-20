import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface dt_bitacoraAttributes {
  id_bitacora: number;
  usuario_id?: number;
  accion_id?: number;
  registro_id?: number;
  tabla_id?: number;
  ip_origen?: string;
  dispositivo_id?: number;
  estatus_accion?: number;
  detalles_error?: string;
  fecha_in: Date;
  fecha_at: Date;
}

export type dt_bitacoraPk = "id_bitacora";
export type dt_bitacoraId = dt_bitacora[dt_bitacoraPk];
export type dt_bitacoraOptionalAttributes = "id_bitacora" | "usuario_id" | "accion_id" | "registro_id" | "tabla_id" | "ip_origen" | "dispositivo_id" | "estatus_accion" | "detalles_error" | "fecha_in" | "fecha_at";
export type dt_bitacoraCreationAttributes = Optional<dt_bitacoraAttributes, dt_bitacoraOptionalAttributes>;

export class dt_bitacora extends Model<dt_bitacoraAttributes, dt_bitacoraCreationAttributes> implements dt_bitacoraAttributes {
  id_bitacora!: number;
  usuario_id?: number;
  accion_id?: number;
  registro_id?: number;
  tabla_id?: number;
  ip_origen?: string;
  dispositivo_id?: number;
  estatus_accion?: number;
  detalles_error?: string;
  fecha_in!: Date;
  fecha_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof dt_bitacora {
    return dt_bitacora.init({
    id_bitacora: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accion_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    registro_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tabla_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ip_origen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dispositivo_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estatus_accion: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    detalles_error: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_in: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    fecha_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'dt_bitacora',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_bitacora" },
        ]
      },
    ]
  });
  }
}
