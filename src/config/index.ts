import dotenv from "dotenv";
import path from "path";

// Determinar el entorno y cargar el archivo .env correspondiente
const envArchivo =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: path.resolve(process.cwd(), envArchivo) });

interface Config {
  port: number;
  db: {
    name: string;
    user: string;
    password: string;
    host: string;
    port: number;
  };
  jwtSecret: string;
  nodeEnv: string;
  allowedOrigins: string[];
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  db: {
    //name: process.env.DBNAMES || "",
    name: process.env.DB_NAME || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
  },
  jwtSecret: process.env.JWT_SECRET || "default_secret",
  nodeEnv: process.env.NODE_ENV || "development",
  allowedOrigins: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : (() => {
        throw new Error(
          "ALLOWED_ORIGINS no está configurado en el archivo .env"
        );
      })(),
};

export default config;
