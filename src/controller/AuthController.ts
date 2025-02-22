import { Request, Response } from "express";
import { getRepository } from "typeorm";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Usuario } from "../entity/CtUsuario";

// Puedes definir tu clave secreta en una variable de entorno; para el ejemplo se usa una fija.
const JWT_SECRET = "tu_clave_secreta";

export class AuthController {
    static async login(req: Request, res: Response): Promise<void> {
        try {
            const { usuario, contrasena } = req.body;
            const usuarioRepo = getRepository(Usuario);

            // Busca el usuario por el campo "usuario" (puede ser email, username, etc.)
            const user = await usuarioRepo.findOne({ where: { usuario } });

            if (!user) {
                res.status(401).json({ error: "Credenciales inválidas" });
                return;
            }

            // Compara la contraseña ingresada con el hash almacenado
            const validPassword = await bcrypt.compare(contrasena, user.contrasena);
            if (!validPassword) {
                res.status(401).json({ error: "Credenciales inválidas" });
                return;
            }

            // Si las credenciales son correctas, genera el token
            const token = jwt.sign(
                { id: user.id_usuario, usuario: user.usuario },
                JWT_SECRET,
                { expiresIn: "20m" }
            );

            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error en el login" });
        }
    }
}
