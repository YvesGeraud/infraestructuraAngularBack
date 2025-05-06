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
    pool: {
      max: 20, // número máximo de conexiones en el pool
      min: 0, // número mínimo de conexiones en el pool
      acquire: 30000, // tiempo máximo en ms para obtener una conexión
      idle: 10000, // tiempo máximo en ms que una conexión puede estar inactiva
    },
    dialectOptions: {
      connectTimeout: 60000, // tiempo máximo de espera para la conexión inicial
    }
  }
);

// Función para manejar la conexión con promesas
const getConnection = async () => {
  try {
    const connection = await sequelize.authenticate();
    console.log('✅ Conexión establecida correctamente');
    return connection;
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    throw error;
  }
};

// Función para cerrar la conexión
const closeConnection = async () => {
  try {
    await sequelize.close();
    console.log('✅ Conexión cerrada correctamente');
  } catch (error) {
    console.error('❌ Error al cerrar la conexión:', error);
    throw error;
  }
};

// Función para verificar el estado de la conexión
const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    return true;
  } catch (error) {
    return false;
  }
};

export { sequelize, getConnection, closeConnection, checkConnection };
