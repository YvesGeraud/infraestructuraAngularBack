import { Sequelize } from "sequelize";
import config from "./index";

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: "mariadb",
    port: config.db.port,
    logging: config.nodeEnv === "development" ? console.log : false,
  }
);

export default sequelize;
