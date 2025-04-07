import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_unidad, ct_infraestructura_unidadId } from './ct_infraestructura_unidad';

export interface ct_usuarioAttributes {
  id_usuario: number;
  usuario: string;
  contrasena: string;
  estatus: number;
  fecha_registro: Date;
  fecha_modificacion: Date;
  id_unidad?: number;
}

export type ct_usuarioPk = "id_usuario";
export type ct_usuarioId = ct_usuario[ct_usuarioPk];
export type ct_usuarioOptionalAttributes = "id_usuario" | "estatus" | "fecha_registro" | "fecha_modificacion" | "id_unidad";
export type ct_usuarioCreationAttributes = Optional<ct_usuarioAttributes, ct_usuarioOptionalAttributes>;

export class ct_usuario extends Model<ct_usuarioAttributes, ct_usuarioCreationAttributes> implements ct_usuarioAttributes {
  id_usuario!: number;
  usuario!: string;
  contrasena!: string;
  estatus!: number;
  fecha_registro!: Date;
  fecha_modificacion!: Date;
  id_unidad?: number;

  // ct_usuario belongsTo ct_infraestructura_unidad via id_unidad
  id_unidad_ct_infraestructura_unidad!: ct_infraestructura_unidad;
  getId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_unidad>;
  setId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_unidad, ct_infraestructura_unidadId>;
  createId_unidad_ct_infraestructura_unidad!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_unidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_usuario {
    return ct_usuario.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "IDX_daaab6a989ac4c341e57f18bbe"
    },
    contrasena: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    estatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    fecha_registro: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: "current_timestamp(6)"
    },
    fecha_modificacion: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: "current_timestamp(6)"
    },
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_unidad',
        key: 'id_unidad'
      }
    }
  }, {
    sequelize,
    tableName: 'ct_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "IDX_daaab6a989ac4c341e57f18bbe",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
      {
        name: "FK_d2cd2b2bed5c86b55f3a5c118e2",
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
        ]
      },
    ]
  });
  }
}
