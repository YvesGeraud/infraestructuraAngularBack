import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface migrationsAttributes {
  id: number;
  timestamp: number;
  name: string;
}

export type migrationsPk = "id";
export type migrationsId = migrations[migrationsPk];
export type migrationsOptionalAttributes = "id";
export type migrationsCreationAttributes = Optional<migrationsAttributes, migrationsOptionalAttributes>;

export class migrations extends Model<migrationsAttributes, migrationsCreationAttributes> implements migrationsAttributes {
  id!: number;
  timestamp!: number;
  name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof migrations {
    return migrations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'migrations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
