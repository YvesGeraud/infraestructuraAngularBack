import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_edificio, ct_infraestructura_edificioId } from './ct_infraestructura_edificio';
import type { rl_infraestructura_edificio_problema, rl_infraestructura_edificio_problemaId } from './rl_infraestructura_edificio_problema';

export interface ct_infraestructura_problema_edificioAttributes {
  id_problema: number;
  descripcion: string;
}

export type ct_infraestructura_problema_edificioPk = "id_problema";
export type ct_infraestructura_problema_edificioId = ct_infraestructura_problema_edificio[ct_infraestructura_problema_edificioPk];
export type ct_infraestructura_problema_edificioOptionalAttributes = "id_problema";
export type ct_infraestructura_problema_edificioCreationAttributes = Optional<ct_infraestructura_problema_edificioAttributes, ct_infraestructura_problema_edificioOptionalAttributes>;

export class ct_infraestructura_problema_edificio extends Model<ct_infraestructura_problema_edificioAttributes, ct_infraestructura_problema_edificioCreationAttributes> implements ct_infraestructura_problema_edificioAttributes {
  id_problema!: number;
  descripcion!: string;

  // ct_infraestructura_problema_edificio belongsToMany ct_infraestructura_edificio via id_problema and id_edificio
  id_edificio_ct_infraestructura_edificios!: ct_infraestructura_edificio[];
  getId_edificio_ct_infraestructura_edificios!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_edificio>;
  setId_edificio_ct_infraestructura_edificios!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  addId_edificio_ct_infraestructura_edificio!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  addId_edificio_ct_infraestructura_edificios!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  createId_edificio_ct_infraestructura_edificio!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_edificio>;
  removeId_edificio_ct_infraestructura_edificio!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  removeId_edificio_ct_infraestructura_edificios!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  hasId_edificio_ct_infraestructura_edificio!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  hasId_edificio_ct_infraestructura_edificios!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  countId_edificio_ct_infraestructura_edificios!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_problema_edificio hasMany rl_infraestructura_edificio_problema via id_problema
  rl_infraestructura_edificio_problemas!: rl_infraestructura_edificio_problema[];
  getRl_infraestructura_edificio_problemas!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_edificio_problema>;
  setRl_infraestructura_edificio_problemas!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_edificio_problema, rl_infraestructura_edificio_problemaId>;
  addRl_infraestructura_edificio_problema!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_edificio_problema, rl_infraestructura_edificio_problemaId>;
  addRl_infraestructura_edificio_problemas!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_edificio_problema, rl_infraestructura_edificio_problemaId>;
  createRl_infraestructura_edificio_problema!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_edificio_problema>;
  removeRl_infraestructura_edificio_problema!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_edificio_problema, rl_infraestructura_edificio_problemaId>;
  removeRl_infraestructura_edificio_problemas!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_edificio_problema, rl_infraestructura_edificio_problemaId>;
  hasRl_infraestructura_edificio_problema!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_edificio_problema, rl_infraestructura_edificio_problemaId>;
  hasRl_infraestructura_edificio_problemas!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_edificio_problema, rl_infraestructura_edificio_problemaId>;
  countRl_infraestructura_edificio_problemas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_problema_edificio {
    return ct_infraestructura_problema_edificio.init({
    id_problema: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_problema_edificio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_problema" },
        ]
      },
    ]
  });
  }
}
