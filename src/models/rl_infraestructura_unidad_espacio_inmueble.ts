import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId } from './ct_infraestructura_espacio_inmueble';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_espacio_inmuebleAttributes {
  id_unidad: number;
  id_espacio: number;
  descripcion_otro?: string;
}

export type rl_infraestructura_unidad_espacio_inmueblePk = "id_unidad" | "id_espacio";
export type rl_infraestructura_unidad_espacio_inmuebleId = rl_infraestructura_unidad_espacio_inmueble[rl_infraestructura_unidad_espacio_inmueblePk];
export type rl_infraestructura_unidad_espacio_inmuebleOptionalAttributes = "descripcion_otro";
export type rl_infraestructura_unidad_espacio_inmuebleCreationAttributes = Optional<rl_infraestructura_unidad_espacio_inmuebleAttributes, rl_infraestructura_unidad_espacio_inmuebleOptionalAttributes>;

export class rl_infraestructura_unidad_espacio_inmueble extends Model<rl_infraestructura_unidad_espacio_inmuebleAttributes, rl_infraestructura_unidad_espacio_inmuebleCreationAttributes> implements rl_infraestructura_unidad_espacio_inmuebleAttributes {
  id_unidad!: number;
  id_espacio!: number;
  descripcion_otro?: string;

  // rl_infraestructura_unidad_espacio_inmueble belongsTo ct_infraestructura_espacio_inmueble via id_espacio
  id_espacio_ct_infraestructura_espacio_inmueble!: ct_infraestructura_espacio_inmueble;
  getId_espacio_ct_infraestructura_espacio_inmueble!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_espacio_inmueble>;
  setId_espacio_ct_infraestructura_espacio_inmueble!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId>;
  createId_espacio_ct_infraestructura_espacio_inmueble!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_espacio_inmueble>;
  // rl_infraestructura_unidad_espacio_inmueble belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_espacio_inmueble {
    return rl_infraestructura_unidad_espacio_inmueble.init({
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
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_espacio_inmueble',
        key: 'id_espacio'
      }
    },
    descripcion_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_espacio_inmueble',
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
      {
        name: "id_espacio",
        using: "BTREE",
        fields: [
          { name: "id_espacio" },
        ]
      },
    ]
  });
  }
}
