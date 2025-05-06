import { Sequelize, QueryTypes } from "sequelize";
import config from "./index";

// Configuración del pool de conexiones
const poolConfig = {
  max: 10,
  min: 2,
  acquire: 30000,
  idle: 10000,
  evict: 1000,
};

// Crear la instancia de Sequelize con el pool
const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: "mariadb",
    port: config.db.port,
    logging: config.nodeEnv === "development" ? console.log : false,
    pool: poolConfig,
    dialectOptions: {
      connectTimeout: 60000,
      supportBigNumbers: true,
      bigNumberStrings: true,
      dateStrings: true,
      typeCast: true,
    },
    retry: {
      max: 3,
      match: [
        /Deadlock/i,
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
        /TimeoutError/,
      ],
    }
  }
);

// Función para ejecutar consultas con el pool
const executeQuery = async (query: string, params: any[] = [], type: QueryTypes = QueryTypes.SELECT) => {
  try {
    const result = await sequelize.query(query, {
      replacements: params,
      type: type
    });
    return result;
  } catch (error) {
    console.error('❌ Error en la consulta:', error);
    throw error;
  }
};

// Función para verificar la conexión
const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    return true;
  } catch (error) {
    console.error('❌ Error al verificar conexión:', error);
    return false;
  }
};

// Función para cerrar todas las conexiones
const closeAllConnections = async () => {
  try {
    await sequelize.close();
    console.log('✅ Todas las conexiones cerradas');
  } catch (error) {
    console.error('❌ Error al cerrar conexiones:', error);
    throw error;
  }
};

export {
  sequelize,
  executeQuery,
  checkConnection,
  closeAllConnections
};
