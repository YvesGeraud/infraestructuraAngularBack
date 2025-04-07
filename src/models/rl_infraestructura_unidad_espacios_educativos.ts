import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_espacios_educativosAttributes {
  id_unidad: number;
  id_espacio: number;
  total?: number;
  en_uso?: number;
  descripcion_otro?: string;
}

export type rl_infraestructura_unidad_espacios_educativosPk = "id_unidad" | "id_espacio";
export type rl_infraestructura_unidad_espacios_educativosId = rl_infraestructura_unidad_espacios_educativos[rl_infraestructura_unidad_espacios_educativosPk];
export type rl_infraestructura_unidad_espacios_educativosOptionalAttributes = "total" | "en_uso" | "descripcion_otro";
export type rl_infraestructura_unidad_espacios_educativosCreationAttributes = Optional<rl_infraestructura_unidad_espacios_educativosAttributes, rl_infraestructura_unidad_espacios_educativosOptionalAttributes>;

export class rl_infraestructura_unidad_espacios_educativos extends Model<rl_infraestructura_unidad_espacios_educativosAttributes, rl_infraestructura_unidad_espacios_educativosCreationAttributes> implements rl_infraestructura_unidad_espacios_educativosAttributes {
  id_unidad!: number;
  id_espacio!: number;
  total?: number;
  en_uso?: number;
  descripcion_otro?: string;

  // rl_infraestructura_unidad_espacios_educativos belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_espacios_educativos {
    return rl_infraestructura_unidad_espacios_educativos.init({
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    },
    id_espacio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    en_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    descripcion_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_espacios_educativos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
          { name: "id_espacio" },
        ]
      },
    ]
  });
  }
}
