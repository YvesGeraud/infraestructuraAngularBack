import express from "express";
import retry from "async-retry";
import cors from "cors";
import config from "./config";
import sequelize from "./config/database";
import usuarioRoutes from "./routes/ct_usuario.routes";
import unidadRoutes from "./routes/ct_infraestructura_unidad.routes";
import municipiosRoutes from "./routes/ct_municipios.routes";
import localidadRoutes from "./routes/ct_localidad.routes";
import { authenticateJWT } from "./middlewares/auth.middleware";
import "./models";

// crea la aplicacion express
const app = express();

// habilita cors para permitir solicitudes desde cualquier origen
app.use(cors());

// habilita el parseo de json en las solicitudes
app.use(express.json());

// monta las rutas bajo el path '/api/usuarios'
app.use("/api/usuarios", /*authenticateJWT,*/ usuarioRoutes);
app.use("/api/unidades", /*authenticateJWT,*/ unidadRoutes);
app.use("/api/municipios", /*authenticateJWT,*/ municipiosRoutes);
app.use("/api/localidades", /*authenticateJWT,*/ localidadRoutes);

// Sincroniza la base de datos y arranca el servidor
retry(
  async () => {
    console.log("Intentando conectar con la base de datos...");
    await sequelize.authenticate(); // Intenta solo la conexión
  },
  {
    retries: 5, // número de intentos
    minTimeout: 3000, // 3 segundos entre intentos
  }
)
  .then(async () => {
    console.log("✅ Conexión a la base de datos establecida");
    await sequelize.sync(); // Ahora sí sincroniza
    console.log("✅ Sincronización completada");

    app.listen(config.port, () => {
      console.log(
        `🚀 Servidor corriendo en el puerto ${config.port} (${config.nodeEnv})`
      );
    });
  })
  .catch((err: any) => {
    console.error(
      "❌ No se pudo conectar a la base de datos después de varios intentos:",
      err
    );
  });
