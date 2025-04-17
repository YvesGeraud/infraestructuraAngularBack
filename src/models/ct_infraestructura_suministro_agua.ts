import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId } from './rl_infraestructura_unidad_suministro_agua';

export interface ct_infraestructura_suministro_aguaAttributes {
  id_suministro_agua: number;
  descripcion: string;
}

export type ct_infraestructura_suministro_aguaPk = "id_suministro_agua";
export type ct_infraestructura_suministro_aguaId = ct_infraestructura_suministro_agua[ct_infraestructura_suministro_aguaPk];
export type ct_infraestructura_suministro_aguaOptionalAttributes = "id_suministro_agua";
export type ct_infraestructura_suministro_aguaCreationAttributes = Optional<ct_infraestructura_suministro_aguaAttributes, ct_infraestructura_suministro_aguaOptionalAttributes>;

export class ct_infraestructura_suministro_agua extends Model<ct_infraestructura_suministro_aguaAttributes, ct_infraestructura_suministro_aguaCreationAttributes> implements ct_infraestructura_suministro_aguaAttributes {
  id_suministro_agua!: number;
  descripcion!: string;

  // ct_infraestructura_suministro_agua belongsToMany ct_infraestructura_unidad via id_suministro_agua and id_unidad
  id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_aguas!: ct_infraestructura_unidad[];
  getId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_aguas!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_aguas!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_agua!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_aguas!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_agua!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_agua!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_aguas!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_agua!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_aguas!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_aguas!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_suministro_agua hasMany rl_infraestructura_unidad_suministro_agua via id_suministro_agua
  rl_infraestructura_unidad_suministro_aguas!: rl_infraestructura_unidad_suministro_agua[];
  getRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_suministro_agua>;
  setRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  addRl_infraestructura_unidad_suministro_agua!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  addRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  createRl_infraestructura_unidad_suministro_agua!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_suministro_agua>;
  removeRl_infraestructura_unidad_suministro_agua!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  removeRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  hasRl_infraestructura_unidad_suministro_agua!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  hasRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  countRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_suministro_agua {
    return ct_infraestructura_suministro_agua.init({
    id_suministro_agua: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_suministro_agua',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suministro_agua" },
        ]
      },
    ]
  });
  }
}
