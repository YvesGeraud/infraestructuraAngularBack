import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ct_infraestructura_pauta_de_seguridadAttributes {
  id_pauta: number;
  descripcion: string;
}

export type ct_infraestructura_pauta_de_seguridadPk = "id_pauta";
export type ct_infraestructura_pauta_de_seguridadId = ct_infraestructura_pauta_de_seguridad[ct_infraestructura_pauta_de_seguridadPk];
export type ct_infraestructura_pauta_de_seguridadOptionalAttributes = "id_pauta";
export type ct_infraestructura_pauta_de_seguridadCreationAttributes = Optional<ct_infraestructura_pauta_de_seguridadAttributes, ct_infraestructura_pauta_de_seguridadOptionalAttributes>;

export class ct_infraestructura_pauta_de_seguridad extends Model<ct_infraestructura_pauta_de_seguridadAttributes, ct_infraestructura_pauta_de_seguridadCreationAttributes> implements ct_infraestructura_pauta_de_seguridadAttributes {
  id_pauta!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_pauta_de_seguridad {
    return ct_infraestructura_pauta_de_seguridad.init({
    id_pauta: {
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
    tableName: 'ct_infraestructura_pauta_de_seguridad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pauta" },
        ]
      },
    ]
  });
  }
}
