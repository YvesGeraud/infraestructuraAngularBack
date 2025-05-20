import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_accion, ct_accionId } from './ct_accion';
import type { ct_inventario_color, ct_inventario_colorId } from './ct_inventario_color';
import type { ct_inventario_estado_fisico, ct_inventario_estado_fisicoId } from './ct_inventario_estado_fisico';
import type { ct_inventario_marcas, ct_inventario_marcasId } from './ct_inventario_marcas';
import type { ct_inventario_material, ct_inventario_materialId } from './ct_inventario_material';
import type { ct_inventario_proveedor, ct_inventario_proveedorId } from './ct_inventario_proveedor';
import type { ct_inventario_subclases, ct_inventario_subclasesId } from './ct_inventario_subclases';
import type { rl_infraestructura_edificios, rl_infraestructura_edificiosId } from './rl_infraestructura_edificios';

export interface ct_inventarioAttributes {
  id_inventario: number;
  id_edificios?: number;
  folio?: string;
  no_serie?: string;
  estatus?: number;
  observaciones?: string;
  modelo?: string;
  fecha_alta?: Date;
  fecha_baja?: Date;
  fecha_registro?: Date;
  id_subclase?: number;
  id_marca?: number;
  id_material?: number;
  id_color?: number;
  id_proveedor?: number;
  id_accion?: number;
  id_estadoFisico?: number;
}

export type ct_inventarioPk = "id_inventario";
export type ct_inventarioId = ct_inventario[ct_inventarioPk];
export type ct_inventarioOptionalAttributes = "id_inventario" | "id_edificios" | "folio" | "no_serie" | "estatus" | "observaciones" | "modelo" | "fecha_alta" | "fecha_baja" | "fecha_registro" | "id_subclase" | "id_marca" | "id_material" | "id_color" | "id_proveedor" | "id_accion" | "id_estadoFisico";
export type ct_inventarioCreationAttributes = Optional<ct_inventarioAttributes, ct_inventarioOptionalAttributes>;

export class ct_inventario extends Model<ct_inventarioAttributes, ct_inventarioCreationAttributes> implements ct_inventarioAttributes {
  id_inventario!: number;
  id_edificios?: number;
  folio?: string;
  no_serie?: string;
  estatus?: number;
  observaciones?: string;
  modelo?: string;
  fecha_alta?: Date;
  fecha_baja?: Date;
  fecha_registro?: Date;
  id_subclase?: number;
  id_marca?: number;
  id_material?: number;
  id_color?: number;
  id_proveedor?: number;
  id_accion?: number;
  id_estadoFisico?: number;

  // ct_inventario belongsTo ct_accion via id_accion
  id_accion_ct_accion!: ct_accion;
  getId_accion_ct_accion!: Sequelize.BelongsToGetAssociationMixin<ct_accion>;
  setId_accion_ct_accion!: Sequelize.BelongsToSetAssociationMixin<ct_accion, ct_accionId>;
  createId_accion_ct_accion!: Sequelize.BelongsToCreateAssociationMixin<ct_accion>;
  // ct_inventario belongsTo ct_inventario_color via id_color
  id_color_ct_inventario_color!: ct_inventario_color;
  getId_color_ct_inventario_color!: Sequelize.BelongsToGetAssociationMixin<ct_inventario_color>;
  setId_color_ct_inventario_color!: Sequelize.BelongsToSetAssociationMixin<ct_inventario_color, ct_inventario_colorId>;
  createId_color_ct_inventario_color!: Sequelize.BelongsToCreateAssociationMixin<ct_inventario_color>;
  // ct_inventario belongsTo ct_inventario_estado_fisico via id_estadoFisico
  id_estadoFisico_ct_inventario_estado_fisico!: ct_inventario_estado_fisico;
  getId_estadoFisico_ct_inventario_estado_fisico!: Sequelize.BelongsToGetAssociationMixin<ct_inventario_estado_fisico>;
  setId_estadoFisico_ct_inventario_estado_fisico!: Sequelize.BelongsToSetAssociationMixin<ct_inventario_estado_fisico, ct_inventario_estado_fisicoId>;
  createId_estadoFisico_ct_inventario_estado_fisico!: Sequelize.BelongsToCreateAssociationMixin<ct_inventario_estado_fisico>;
  // ct_inventario belongsTo ct_inventario_marcas via id_marca
  id_marca_ct_inventario_marca!: ct_inventario_marcas;
  getId_marca_ct_inventario_marca!: Sequelize.BelongsToGetAssociationMixin<ct_inventario_marcas>;
  setId_marca_ct_inventario_marca!: Sequelize.BelongsToSetAssociationMixin<ct_inventario_marcas, ct_inventario_marcasId>;
  createId_marca_ct_inventario_marca!: Sequelize.BelongsToCreateAssociationMixin<ct_inventario_marcas>;
  // ct_inventario belongsTo ct_inventario_material via id_material
  id_material_ct_inventario_material!: ct_inventario_material;
  getId_material_ct_inventario_material!: Sequelize.BelongsToGetAssociationMixin<ct_inventario_material>;
  setId_material_ct_inventario_material!: Sequelize.BelongsToSetAssociationMixin<ct_inventario_material, ct_inventario_materialId>;
  createId_material_ct_inventario_material!: Sequelize.BelongsToCreateAssociationMixin<ct_inventario_material>;
  // ct_inventario belongsTo ct_inventario_proveedor via id_proveedor
  id_proveedor_ct_inventario_proveedor!: ct_inventario_proveedor;
  getId_proveedor_ct_inventario_proveedor!: Sequelize.BelongsToGetAssociationMixin<ct_inventario_proveedor>;
  setId_proveedor_ct_inventario_proveedor!: Sequelize.BelongsToSetAssociationMixin<ct_inventario_proveedor, ct_inventario_proveedorId>;
  createId_proveedor_ct_inventario_proveedor!: Sequelize.BelongsToCreateAssociationMixin<ct_inventario_proveedor>;
  // ct_inventario belongsTo ct_inventario_subclases via id_subclase
  id_subclase_ct_inventario_subclase!: ct_inventario_subclases;
  getId_subclase_ct_inventario_subclase!: Sequelize.BelongsToGetAssociationMixin<ct_inventario_subclases>;
  setId_subclase_ct_inventario_subclase!: Sequelize.BelongsToSetAssociationMixin<ct_inventario_subclases, ct_inventario_subclasesId>;
  createId_subclase_ct_inventario_subclase!: Sequelize.BelongsToCreateAssociationMixin<ct_inventario_subclases>;
  // ct_inventario belongsTo rl_infraestructura_edificios via id_edificios
  id_edificios_rl_infraestructura_edificio!: rl_infraestructura_edificios;
  getId_edificios_rl_infraestructura_edificio!: Sequelize.BelongsToGetAssociationMixin<rl_infraestructura_edificios>;
  setId_edificios_rl_infraestructura_edificio!: Sequelize.BelongsToSetAssociationMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  createId_edificios_rl_infraestructura_edificio!: Sequelize.BelongsToCreateAssociationMixin<rl_infraestructura_edificios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_inventario {
    return ct_inventario.init({
    id_inventario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_edificios: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'rl_infraestructura_edificios',
        key: 'id_edificios'
      }
    },
    folio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    no_serie: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    estatus: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_baja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_subclase: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_inventario_subclases',
        key: 'id_subclase'
      }
    },
    id_marca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_inventario_marcas',
        key: 'id_marca'
      }
    },
    id_material: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_inventario_material',
        key: 'id_material'
      }
    },
    id_color: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_inventario_color',
        key: 'id_color'
      }
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_inventario_proveedor',
        key: 'id_proveedor'
      }
    },
    id_accion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_accion',
        key: 'id_accion'
      }
    },
    id_estadoFisico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_inventario_estado_fisico',
        key: 'id_estadoFisico'
      }
    }
  }, {
    sequelize,
    tableName: 'ct_inventario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_inventario" },
        ]
      },
      {
        name: "fk_rl_infraestructura_edificios",
        using: "BTREE",
        fields: [
          { name: "id_edificios" },
        ]
      },
      {
        name: "fk_ct_inventario_subclases",
        using: "BTREE",
        fields: [
          { name: "id_subclase" },
        ]
      },
      {
        name: "fk_ct_inventario_marcas",
        using: "BTREE",
        fields: [
          { name: "id_marca" },
        ]
      },
      {
        name: "fk_ct_inventario_material",
        using: "BTREE",
        fields: [
          { name: "id_material" },
        ]
      },
      {
        name: "fk_ct_inventario_color",
        using: "BTREE",
        fields: [
          { name: "id_color" },
        ]
      },
      {
        name: "fk_ct_inventario_proveedor",
        using: "BTREE",
        fields: [
          { name: "id_proveedor" },
        ]
      },
      {
        name: "fk_ct_accion",
        using: "BTREE",
        fields: [
          { name: "id_accion" },
        ]
      },
      {
        name: "fk_ct_inventario_estado_fisico",
        using: "BTREE",
        fields: [
          { name: "id_estadoFisico" },
        ]
      },
    ]
  });
  }
}
