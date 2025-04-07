import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId } from './ct_infraestructura_fin_inmueble';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_fin_inmuebleAttributes {
  id_unidad: number;
  id_fin: number;
  fin_otro?: string;
}

export type rl_infraestructura_unidad_fin_inmueblePk = "id_unidad" | "id_fin";
export type rl_infraestructura_unidad_fin_inmuebleId = rl_infraestructura_unidad_fin_inmueble[rl_infraestructura_unidad_fin_inmueblePk];
export type rl_infraestructura_unidad_fin_inmuebleOptionalAttributes = "fin_otro";
export type rl_infraestructura_unidad_fin_inmuebleCreationAttributes = Optional<rl_infraestructura_unidad_fin_inmuebleAttributes, rl_infraestructura_unidad_fin_inmuebleOptionalAttributes>;

export class rl_infraestructura_unidad_fin_inmueble extends Model<rl_infraestructura_unidad_fin_inmuebleAttributes, rl_infraestructura_unidad_fin_inmuebleCreationAttributes> implements rl_infraestructura_unidad_fin_inmuebleAttributes {
  id_unidad!: number;
  id_fin!: number;
  fin_otro?: string;

  // rl_infraestructura_unidad_fin_inmueble belongsTo ct_infraestructura_fin_inmueble via id_fin
  id_fin_ct_infraestructura_fin_inmueble!: ct_infraestructura_fin_inmueble;
  getId_fin_ct_infraestructura_fin_inmueble!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_fin_inmueble>;
  setId_fin_ct_infraestructura_fin_inmueble!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId>;
  createId_fin_ct_infraestructura_fin_inmueble!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_fin_inmueble>;
  // rl_infraestructura_unidad_fin_inmueble belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_fin_inmueble {
    return rl_infraestructura_unidad_fin_inmueble.init({
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    },
    id_fin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_fin_inmueble',
        key: 'id_infraestructura_fin'
      }
    },
    fin_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_fin_inmueble',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
          { name: "id_fin" },
        ]
      },
      {
        name: "id_fin",
        using: "BTREE",
        fields: [
          { name: "id_fin" },
        ]
      },
    ]
  });
  }
}
