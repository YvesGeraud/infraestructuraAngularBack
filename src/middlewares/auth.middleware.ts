import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticateJWT = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // La cabecera debe tener el formato: Authorization: Bearer <token>
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.error("No se proporciono un token de autenticacion");
    res.sendStatus(401);
    return;
  }

  const token = authHeader.split(" ")[1];
  // Verificar el token con la llave secreta compartida
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      console.error("JWT verificacion fallida:", err);
      res.sendStatus(403);
      return;
    }
    // Si se verifica, se almacena la informacion decodificada en req.user para usarla en las rutas
    req.user = decoded;
    next();
  });
};
