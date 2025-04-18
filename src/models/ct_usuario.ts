import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ct_usuarioAttributes {
  id_usuario: number;
  usuario: string;
  contrasena: string;
  estatus: number;
  fecha_registro: Date;
  fecha_modificacion: Date;
}

export type ct_usuarioPk = "id_usuario";
export type ct_usuarioId = ct_usuario[ct_usuarioPk];
export type ct_usuarioOptionalAttributes = "id_usuario" | "estatus" | "fecha_registro" | "fecha_modificacion";
export type ct_usuarioCreationAttributes = Optional<ct_usuarioAttributes, ct_usuarioOptionalAttributes>;

export class ct_usuario extends Model<ct_usuarioAttributes, ct_usuarioCreationAttributes> implements ct_usuarioAttributes {
  id_usuario!: number;
  usuario!: string;
  contrasena!: string;
  estatus!: number;
  fecha_registro!: Date;
  fecha_modificacion!: Date;


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
    ]
  });
  }
}
