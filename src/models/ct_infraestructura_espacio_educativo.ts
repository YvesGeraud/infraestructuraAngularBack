import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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
