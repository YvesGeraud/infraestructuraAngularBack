// src/index.ts
import "reflect-metadata";
import express from "express";
import cors from 'cors';
import usuarioRoutes from "./routes/usuarioRoutes";
import unidadRoutes from "./routes/unidadRoutes";
import authRoutes from "./routes/authRoutes";
import municipioRoutes from "./routes/municipioRoutes";
import { authMiddleware } from "./middleware/authMiddleware";
import { AppDataSource } from "./data-source";
import * as path from 'path';

const app = express();
app.use(express.json());
app.use(cors());

// Servir archivos estáticos desde el directorio assets
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

// Rutas Publicas
app.use("/api/auth", authRoutes);
app.use("/api/municipios", municipioRoutes);

// Rutas Privadas
app.use("/api/usuarios", authMiddleware, usuarioRoutes);
app.use("/api/unidades", authMiddleware, unidadRoutes);

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor corriendo en el puerto 3000");
        });
    })
    .catch((error) => console.log("Error de conexión a la base de datos:", error));
