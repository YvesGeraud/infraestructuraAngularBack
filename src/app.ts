import express from "express";
import retry from "async-retry";
import config from "./config";
import sequelize from "./config/database";
import usuarioRoutes from "./routes/ct_usuario.routes";
import unidadRoutes from "./routes/infraestructura/ct_unidad.routes";
import municipiosRoutes from "./routes/ct_municipios.routes";
import localidadRoutes from "./routes/ct_localidad.routes";
import { authenticateJWT } from "./middlewares/auth.middleware";
import corsMiddleware from "./middlewares/cors.middleware";
import nivelEducativoRoutes from "./routes/infraestructura/ct_nivel_educativo.routes";
import finInmuebleRoutes from "./routes/infraestructura/ct_fin_inmueble.routes";
import razonNoConstruccionRoutes from "./routes/infraestructura/ct_razon_no_construccion.routes";
import "./models";

// crea la aplicacion express
const app = express();

// configura CORS usando el middleware
app.use(corsMiddleware);

// habilita el parseo de json en las solicitudes
app.use(express.json());

// monta las rutas bajo el path '/api/usuarios'
//*para produccion
//!`${process.env.HOST}api/usuarios`
//*para desarrollo
//!`api/usuarios`

app.use(`${process.env.HOST}api/usuarios`, /*authenticateJWT,*/ usuarioRoutes);
app.use(`${process.env.HOST}api/unidades`, /*authenticateJWT,*/ unidadRoutes);
app.use(`${process.env.HOST}api/municipios`, /*authenticateJWT,*/ municipiosRoutes);
app.use(`${process.env.HOST}api/localidades`, /*authenticateJWT,*/ localidadRoutes);
app.use(`${process.env.HOST}api/niveles-educativos`, /*authenticateJWT,*/ nivelEducativoRoutes);
app.use(`${process.env.HOST}api/fin-inmueble`, /*authenticateJWT,*/ finInmuebleRoutes);
app.use(
  `${process.env.HOST}api/razon-no-construccion`,
  /*authenticateJWT,*/ razonNoConstruccionRoutes
);

//* Sincroniza la base de datos y arranca el servidor
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
