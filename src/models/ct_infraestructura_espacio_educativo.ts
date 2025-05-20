import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId } from './rl_infraestructura_unidad_espacios_educativos';

export interface ct_infraestructura_espacio_educativoAttributes {
  id_espacio: number;
  descripcion: string;
}

export type ct_infraestructura_espacio_educativoPk = "id_espacio";
export type ct_infraestructura_espacio_educativoId = ct_infraestructura_espacio_educativo[ct_infraestructura_espacio_educativoPk];
export type ct_infraestructura_espacio_educativoOptionalAttributes = "id_espacio";
export type ct_infraestructura_espacio_educativoCreationAttributes = Optional<ct_infraestructura_espacio_educativoAttributes, ct_infraestructura_espacio_educativoOptionalAttributes>;

export class ct_infraestructura_espacio_educativo extends Model<ct_infraestructura_espacio_educativoAttributes, ct_infraestructura_espacio_educativoCreationAttributes> implements ct_infraestructura_espacio_educativoAttributes {
  id_espacio!: number;
  descripcion!: string;

  // ct_infraestructura_espacio_educativo belongsToMany ct_infraestructura_unidad via id_espacio and id_unidad
  id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativos!: ct_infraestructura_unidad[];
  getId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativos!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativos!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativo!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  addId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativos!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativo!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_unidad>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativo!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  removeId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativos!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativo!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  hasId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativos!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  countId_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_espacio_educativo hasMany rl_infraestructura_unidad_espacios_educativos via id_espacio
  rl_infraestructura_unidad_espacios_educativos!: rl_infraestructura_unidad_espacios_educativos[];
  getRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_espacios_educativos>;
  setRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  addRl_infraestructura_unidad_espacios_educativo!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  addRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  createRl_infraestructura_unidad_espacios_educativo!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_espacios_educativos>;
  removeRl_infraestructura_unidad_espacios_educativo!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  removeRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  hasRl_infraestructura_unidad_espacios_educativo!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  hasRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  countRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_espacio_educativo {
    return ct_infraestructura_espacio_educativo.init({
    id_espacio: {
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
    tableName: 'ct_infraestructura_espacio_educativo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_espacio" },
        ]
      },
    ]
  });
  }
}
