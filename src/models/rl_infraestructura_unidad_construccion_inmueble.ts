import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId } from './ct_infraestructura_construccion_inmueble';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface rl_infraestructura_unidad_construccion_inmuebleAttributes {
  id_unidad: number;
  id_construccion: number;
  descripcion_otro?: string;
}

export type rl_infraestructura_unidad_construccion_inmueblePk = "id_unidad" | "id_construccion";
export type rl_infraestructura_unidad_construccion_inmuebleId = rl_infraestructura_unidad_construccion_inmueble[rl_infraestructura_unidad_construccion_inmueblePk];
export type rl_infraestructura_unidad_construccion_inmuebleOptionalAttributes = "descripcion_otro";
export type rl_infraestructura_unidad_construccion_inmuebleCreationAttributes = Optional<rl_infraestructura_unidad_construccion_inmuebleAttributes, rl_infraestructura_unidad_construccion_inmuebleOptionalAttributes>;

export class rl_infraestructura_unidad_construccion_inmueble extends Model<rl_infraestructura_unidad_construccion_inmuebleAttributes, rl_infraestructura_unidad_construccion_inmuebleCreationAttributes> implements rl_infraestructura_unidad_construccion_inmuebleAttributes {
  id_unidad!: number;
  id_construccion!: number;
  descripcion_otro?: string;

  // rl_infraestructura_unidad_construccion_inmueble belongsTo ct_infraestructura_construccion_inmueble via id_construccion
  id_construccion_ct_infraestructura_construccion_inmueble!: ct_infraestructura_construccion_inmueble;
  getId_construccion_ct_infraestructura_construccion_inmueble!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_construccion_inmueble>;
  setId_construccion_ct_infraestructura_construccion_inmueble!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId>;
  createId_construccion_ct_infraestructura_construccion_inmueble!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_construccion_inmueble>;
  // rl_infraestructura_unidad_construccion_inmueble belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_unidad_construccion_inmueble {
    return rl_infraestructura_unidad_construccion_inmueble.init({
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
        model: 'ct_infraestructura_construccion_inmueble',
        key: 'id_construccion'
      }
    },
    descripcion_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_unidad_construccion_inmueble',
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
