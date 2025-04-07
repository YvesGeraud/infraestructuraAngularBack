import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { rl_infraestructura_unidad_nivel, rl_infraestructura_unidad_nivelId } from './rl_infraestructura_unidad_nivel';

export interface ct_infraestructura_nivel_educativoAttributes {
  id_nivel: number;
  descripcion: string;
}

export type ct_infraestructura_nivel_educativoPk = "id_nivel";
export type ct_infraestructura_nivel_educativoId = ct_infraestructura_nivel_educativo[ct_infraestructura_nivel_educativoPk];
export type ct_infraestructura_nivel_educativoOptionalAttributes = "id_nivel";
export type ct_infraestructura_nivel_educativoCreationAttributes = Optional<ct_infraestructura_nivel_educativoAttributes, ct_infraestructura_nivel_educativoOptionalAttributes>;

export class ct_infraestructura_nivel_educativo extends Model<ct_infraestructura_nivel_educativoAttributes, ct_infraestructura_nivel_educativoCreationAttributes> implements ct_infraestructura_nivel_educativoAttributes {
  id_nivel!: number;
  descripcion!: string;

  // ct_infraestructura_nivel_educativo hasMany rl_infraestructura_unidad_nivel via id_nivel
  rl_infraestructura_unidad_nivels!: rl_infraestructura_unidad_nivel[];
  getRl_infraestructura_unidad_nivels!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_nivel>;
  setRl_infraestructura_unidad_nivels!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_nivel, rl_infraestructura_unidad_nivelId>;
  addRl_infraestructura_unidad_nivel!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_nivel, rl_infraestructura_unidad_nivelId>;
  addRl_infraestructura_unidad_nivels!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_nivel, rl_infraestructura_unidad_nivelId>;
  createRl_infraestructura_unidad_nivel!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_nivel>;
  removeRl_infraestructura_unidad_nivel!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_nivel, rl_infraestructura_unidad_nivelId>;
  removeRl_infraestructura_unidad_nivels!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_nivel, rl_infraestructura_unidad_nivelId>;
  hasRl_infraestructura_unidad_nivel!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_nivel, rl_infraestructura_unidad_nivelId>;
  hasRl_infraestructura_unidad_nivels!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_nivel, rl_infraestructura_unidad_nivelId>;
  countRl_infraestructura_unidad_nivels!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_nivel_educativo {
    return ct_infraestructura_nivel_educativo.init({
    id_nivel: {
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
    tableName: 'ct_infraestructura_nivel_educativo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_nivel" },
        ]
      },
    ]
  });
  }
}
