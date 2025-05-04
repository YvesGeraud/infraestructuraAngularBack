import cors from "cors";
import config from "../config";

/**
 * Middleware de CORS para la aplicación
 *
 * Configura la política de CORS para permitir solicitudes solo desde orígenes específicos
 * y establecer las reglas de seguridad necesarias.
 */
const corsMiddleware = cors({
  /**
   * Configuración de orígenes permitidos
   * @param origin - El origen de la solicitud
   * @param callback - Función de callback para permitir o denegar la solicitud
   */
  origin: (origin, callback) => {
    //* Permite solicitudes sin origen (mismo servidor) o desde orígenes permitidos
    if (!origin || config.allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  //* Permite el envío de credenciales (cookies, headers de autenticación)
  credentials: true,
  //* Métodos HTTP permitidos
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  //* Headers permitidos en las solicitudes
  allowedHeaders: ["Content-Type", "Authorization"],
  //* Headers expuestos al cliente
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  //* Cache de solicitudes preflight (10 minutos)
  maxAge: 600,
});

export default corsMiddleware;
