import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_edificio, ct_infraestructura_edificioId } from './ct_infraestructura_edificio';
import type { ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId } from './ct_infraestructura_problema_edificio';

export interface rl_infraestructura_edificio_problemaAttributes {
  id_edificio: number;
  id_problema: number;
  descripcion_otro?: string;
}

export type rl_infraestructura_edificio_problemaPk = "id_edificio" | "id_problema";
export type rl_infraestructura_edificio_problemaId = rl_infraestructura_edificio_problema[rl_infraestructura_edificio_problemaPk];
export type rl_infraestructura_edificio_problemaOptionalAttributes = "descripcion_otro";
export type rl_infraestructura_edificio_problemaCreationAttributes = Optional<rl_infraestructura_edificio_problemaAttributes, rl_infraestructura_edificio_problemaOptionalAttributes>;

export class rl_infraestructura_edificio_problema extends Model<rl_infraestructura_edificio_problemaAttributes, rl_infraestructura_edificio_problemaCreationAttributes> implements rl_infraestructura_edificio_problemaAttributes {
  id_edificio!: number;
  id_problema!: number;
  descripcion_otro?: string;

  // rl_infraestructura_edificio_problema belongsTo ct_infraestructura_edificio via id_edificio
  id_edificio_ct_infraestructura_edificio!: ct_infraestructura_edificio;
  getId_edificio_ct_infraestructura_edificio!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_edificio>;
  setId_edificio_ct_infraestructura_edificio!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  createId_edificio_ct_infraestructura_edificio!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_edificio>;
  // rl_infraestructura_edificio_problema belongsTo ct_infraestructura_problema_edificio via id_problema
  id_problema_ct_infraestructura_problema_edificio!: ct_infraestructura_problema_edificio;
  getId_problema_ct_infraestructura_problema_edificio!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_problema_edificio>;
  setId_problema_ct_infraestructura_problema_edificio!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId>;
  createId_problema_ct_infraestructura_problema_edificio!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_problema_edificio>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rl_infraestructura_edificio_problema {
    return rl_infraestructura_edificio_problema.init({
    id_edificio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_edificio',
        key: 'id_edificio'
      }
    },
    id_problema: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ct_infraestructura_problema_edificio',
        key: 'id_problema'
      }
    },
    descripcion_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rl_infraestructura_edificio_problema',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_edificio" },
          { name: "id_problema" },
        ]
      },
      {
        name: "id_problema",
        using: "BTREE",
        fields: [
          { name: "id_problema" },
        ]
      },
    ]
  });
  }
}
