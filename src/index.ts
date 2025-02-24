// src/index.ts
import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from 'cors';
import usuarioRoutes from "./routes/usuarioRoutes";
import unidadRoutes from "./routes/unidadRoutes";
import authRoutes from "./routes/authRoutes";
import { authMiddleware } from "./middleware/authMiddleware";

const app = express();
app.use(express.json());
app.use(cors());
// Rutas Publicas
app.use("/api/auth", authRoutes);
// Rutas Privadas
app.use("/api/usuarios", authMiddleware, usuarioRoutes);
app.use("/api/unidades", authMiddleware, unidadRoutes);
createConnection()
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor corriendo en el puerto 3000");
        });
    })
    .catch((error) => console.log("Error de conexión a la base de datos:", error));
