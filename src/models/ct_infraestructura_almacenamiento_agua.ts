import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId } from './rl_infraestructura_unidad_almacenamiento_agua';

export interface ct_infraestructura_almacenamiento_aguaAttributes {
  id_almacenamiento: number;
  descripcion: string;
}

export type ct_infraestructura_almacenamiento_aguaPk = "id_almacenamiento";
export type ct_infraestructura_almacenamiento_aguaId = ct_infraestructura_almacenamiento_agua[ct_infraestructura_almacenamiento_aguaPk];
export type ct_infraestructura_almacenamiento_aguaOptionalAttributes = "id_almacenamiento";
export type ct_infraestructura_almacenamiento_aguaCreationAttributes = Optional<ct_infraestructura_almacenamiento_aguaAttributes, ct_infraestructura_almacenamiento_aguaOptionalAttributes>;

export class ct_infraestructura_almacenamiento_agua extends Model<ct_infraestructura_almacenamiento_aguaAttributes, ct_infraestructura_almacenamiento_aguaCreationAttributes> implements ct_infraestructura_almacenamiento_aguaAttributes {
  id_almacenamiento!: number;
  descripcion!: string;

  // ct_infraestructura_almacenamiento_agua belongsToMany ct_infraestructura_unidad via id_almacenamiento and id_unidad
  id_unidad_ct_infraestructura_unidads!: ct_infraestructura_unidad[];
  getId_unidad_ct_infraestructura_unidads!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidads!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidads!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeId_unidad_ct_infraestructura_unidads!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidads!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countId_unidad_ct_infraestructura_unidads!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_almacenamiento_agua hasMany rl_infraestructura_unidad_almacenamiento_agua via id_almacenamiento
  rl_infraestructura_unidad_almacenamiento_aguas!: rl_infraestructura_unidad_almacenamiento_agua[];
  getRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua>;
  setRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  addRl_infraestructura_unidad_almacenamiento_agua!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  addRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  createRl_infraestructura_unidad_almacenamiento_agua!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_almacenamiento_agua>;
  removeRl_infraestructura_unidad_almacenamiento_agua!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  removeRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  hasRl_infraestructura_unidad_almacenamiento_agua!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  hasRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  countRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_almacenamiento_agua {
    return ct_infraestructura_almacenamiento_agua.init({
    id_almacenamiento: {
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
    tableName: 'ct_infraestructura_almacenamiento_agua',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_almacenamiento" },
        ]
      },
    ]
  });
  }
}
