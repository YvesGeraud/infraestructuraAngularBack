import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId } from './ct_infraestructura_problema_edificio';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';
import type { rl_infraestructura_edificio_problema, rl_infraestructura_edificio_problemaId } from './rl_infraestructura_edificio_problema';

export interface ct_infraestructura_edificioAttributes {
  id_edificio: number;
  id_unidad: number;
  num_niveles: number;
  id_material_paredes?: number;
  material_paredes_otro?: string;
  id_material_techo?: number;
  material_techo_otro?: string;
  id_material_pisos?: number;
  material_pisos_otro?: string;
}

export type ct_infraestructura_edificioPk = "id_edificio";
export type ct_infraestructura_edificioId = ct_infraestructura_edificio[ct_infraestructura_edificioPk];
export type ct_infraestructura_edificioOptionalAttributes = "id_edificio" | "id_material_paredes" | "material_paredes_otro" | "id_material_techo" | "material_techo_otro" | "id_material_pisos" | "material_pisos_otro";
export type ct_infraestructura_edificioCreationAttributes = Optional<ct_infraestructura_edificioAttributes, ct_infraestructura_edificioOptionalAttributes>;

export class ct_infraestructura_edificio extends Model<ct_infraestructura_edificioAttributes, ct_infraestructura_edificioCreationAttributes> implements ct_infraestructura_edificioAttributes {
  id_edificio!: number;
  id_unidad!: number;
  num_niveles!: number;
  id_material_paredes?: number;
  material_paredes_otro?: string;
  id_material_techo?: number;
  material_techo_otro?: string;
  id_material_pisos?: number;
  material_pisos_otro?: string;

  // ct_infraestructura_edificio belongsToMany ct_infraestructura_problema_edificio via id_edificio and id_problema
  id_problema_ct_infraestructura_problema_edificios!: ct_infraestructura_problema_edificio[];
  getId_problema_ct_infraestructura_problema_edificios!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_problema_edificio>;
  setId_problema_ct_infraestructura_problema_edificios!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId>;
  addId_problema_ct_infraestructura_problema_edificio!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId>;
  addId_problema_ct_infraestructura_problema_edificios!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId>;
  createId_problema_ct_infraestructura_problema_edificio!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_problema_edificio>;
  removeId_problema_ct_infraestructura_problema_edificio!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId>;
  removeId_problema_ct_infraestructura_problema_edificios!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId>;
  hasId_problema_ct_infraestructura_problema_edificio!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId>;
  hasId_problema_ct_infraestructura_problema_edificios!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_problema_edificio, ct_infraestructura_problema_edificioId>;
  countId_problema_ct_infraestructura_problema_edificios!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_edificio hasMany rl_infraestructura_edificio_problema via id_edificio
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
  // ct_infraestructura_edificio belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_edificio {
    return ct_infraestructura_edificio.init({
    id_edificio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    },
    num_niveles: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_material_paredes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    material_paredes_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_material_techo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    material_techo_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_material_pisos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    material_pisos_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_edificio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_edificio" },
        ]
      },
      {
        name: "id_unidad",
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
        ]
      },
    ]
  });
  }
}
