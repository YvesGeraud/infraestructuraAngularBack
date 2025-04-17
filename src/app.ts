import express from "express";
import cors from "cors";
import config from "./config";
import sequelize from "./config/database";
import usuarioRoutes from "./routes/ct_usuario.routes";
import unidadRoutes from "./routes/ct_infraestructura_unidad.routes";
import "./models";

// crea la aplicacion express
const app = express();

// habilita cors para permitir solicitudes desde cualquier origen
app.use(cors());

// habilita el parseo de json en las solicitudes
app.use(express.json());

// monta las rutas bajo el path '/api/usuarios'
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/unidades", unidadRoutes);

// Sincroniza la base de datos y arranca el servidor
sequelize
  .sync()
  .then(() => {
    console.log("Base de datos conectada");
    app.listen(config.port, () => {
      console.log(
        `Servidor corriendo en el puerto ${config.port} en ambiente ${config.nodeEnv}`
      );
    });
  })
  .catch((error) => {
    console.error("Error al conectar la base de datos:", error);
  });
