import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "Si quedo para el lunes";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Se espera que el token se envíe en el header Authorization en el formato: "Bearer TOKEN"
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ error: "No token provided" });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        // Verificamos el token
        const decoded = jwt.verify(token, JWT_SECRET);
        // Si es necesario, puedes guardar el payload en req.user para usarlo en los controladores
        (req as any).user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "No autorizado" });
    }
};
