import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_departamento, ct_infraestructura_departamentoId } from './ct_infraestructura_departamento';

export interface ct_infraestructura_areaAttributes {
  id_area: number;
  nombre: string;
  id_puesto?: number;
  id_departamento?: number;
  estado?: number;
  fecha_in?: Date;
  fecha_at?: Date;
}

export type ct_infraestructura_areaPk = "id_area";
export type ct_infraestructura_areaId = ct_infraestructura_area[ct_infraestructura_areaPk];
export type ct_infraestructura_areaOptionalAttributes = "id_area" | "id_puesto" | "id_departamento" | "estado" | "fecha_in" | "fecha_at";
export type ct_infraestructura_areaCreationAttributes = Optional<ct_infraestructura_areaAttributes, ct_infraestructura_areaOptionalAttributes>;

export class ct_infraestructura_area extends Model<ct_infraestructura_areaAttributes, ct_infraestructura_areaCreationAttributes> implements ct_infraestructura_areaAttributes {
  id_area!: number;
  nombre!: string;
  id_puesto?: number;
  id_departamento?: number;
  estado?: number;
  fecha_in?: Date;
  fecha_at?: Date;

  // ct_infraestructura_area belongsTo ct_infraestructura_departamento via id_departamento
  id_departamento_ct_infraestructura_departamento!: ct_infraestructura_departamento;
  getId_departamento_ct_infraestructura_departamento!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_departamento>;
  setId_departamento_ct_infraestructura_departamento!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_departamento, ct_infraestructura_departamentoId>;
  createId_departamento_ct_infraestructura_departamento!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_departamento>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_area {
    return ct_infraestructura_area.init({
    id_area: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "nombre"
    },
    id_puesto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_departamento',
        key: 'id_departamento'
      }
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    fecha_in: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    fecha_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_area',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_area" },
        ]
      },
      {
        name: "nombre",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "id_direccion",
        using: "BTREE",
        fields: [
          { name: "id_departamento" },
        ]
      },
    ]
  });
  }
}
