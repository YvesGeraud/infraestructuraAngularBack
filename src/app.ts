import express from "express";
import dotenv from "dotenv";
import retry from "async-retry";
import config from "./config";
import {
  sequelize,
  checkConnection,
  closeAllConnections,
} from "./config/database";
import usuarioRoutes from "./routes/ct_usuario.routes";
import unidadRoutes from "./routes/infraestructura/ct_unidad.routes";
import municipiosRoutes from "./routes/ct_municipios.routes";
import localidadRoutes from "./routes/ct_localidad.routes";
import { authenticateJWT } from "./middlewares/auth.middleware";
import corsMiddleware from "./middlewares/cors.middleware";
import nivelEducativoRoutes from "./routes/infraestructura/ct_nivel_educativo.routes";
import finInmuebleRoutes from "./routes/infraestructura/ct_fin_inmueble.routes";
import razonNoConstruccionRoutes from "./routes/infraestructura/ct_razon_no_construccion.routes";
import unidadNivelRoutes from "./routes/infraestructura/rl_unidad_nivel.routes";
import espacioInmueblesRoutes from "./routes/infraestructura/ct_espacio_inmuebles.routes";
import dimensionTerrenoRoutes from "./routes/infraestructura/ct_dimension_terreno.routes";
import suministroDeAguaRoutes from "./routes/infraestructura/ct_suministro_de_agua.routes";
import almacenamientoAguaRoutes from "./routes/infraestructura/ct_almacenamiento_agua.routes";
import direccionRoutes from "./routes/infraestructura/ct_direccion.routes";
import departamentoRoutes from "./routes/infraestructura/ct_departamento.routes";
import areaRoutes from "./routes/infraestructura/ct_area.routes";
import "./models";

// Configurar variables de entorno
dotenv.config();

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
//!`/api/usuarios`

app.use(`${process.env.HOST}api/usuarios`, /*authenticateJWT,*/ usuarioRoutes);
app.use(`${process.env.HOST}api/unidades`, /*authenticateJWT,*/ unidadRoutes);
app.use(
  `${process.env.HOST}api/municipios`,
  /*authenticateJWT,*/ municipiosRoutes
);
app.use(
  `${process.env.HOST}api/localidades`,
  /*authenticateJWT,*/ localidadRoutes
);
app.use(
  `${process.env.HOST}api/nivelEducativo`,
  /*authenticateJWT,*/ nivelEducativoRoutes
);
app.use(
  `${process.env.HOST}api/finInmueble`,
  /*authenticateJWT,*/ finInmuebleRoutes
);
app.use(
  `${process.env.HOST}api/razonNoConstruccion`,
  /*authenticateJWT,*/ razonNoConstruccionRoutes
);
app.use(
  `${process.env.HOST}api/unidadNivel`,
  /*authenticateJWT,*/ unidadNivelRoutes
);
app.use(
  `${process.env.HOST}api/espacioInmueble`,
  /*authenticateJWT,*/ espacioInmueblesRoutes
);
app.use(
  `${process.env.HOST}api/dimensionTerreno`,
  /*authenticateJWT,*/ dimensionTerrenoRoutes
);
app.use(
  `${process.env.HOST}api/suministroDeAgua`,
  /*authenticateJWT,*/ suministroDeAguaRoutes
);
app.use(
  `${process.env.HOST}api/almacenamientoAgua`,
  /*authenticateJWT,*/ almacenamientoAguaRoutes
);
app.use(`${process.env.HOST}api/area`, /*authenticateJWT,*/ areaRoutes);

app.use(
  `${process.env.HOST}api/direcciones`,
  /*authenticateJWT,*/ direccionRoutes
);

app.use(
  `${process.env.HOST}api/departamentos`,
  /*authenticateJWT,*/ departamentoRoutes
);

// Mostrar información de configuración de la base de datos
console.log("📝 Configuración de la base de datos:");
console.log("- Nombre DB:", config.db.name);
console.log("- Usuario:", config.db.user);
console.log("- Host:", config.db.host);
console.log("- Puerto:", config.db.port);
console.log("- Entorno:", config.nodeEnv);

//* Sincroniza la base de datos y arranca el servidor
retry(
  async () => {
    console.log("Intentando conectar con la base de datos...");
    await checkConnection();
  },
  {
    retries: 5,
    minTimeout: 3000,
  }
)
  .then(async () => {
    console.log("✅ Conexión a la base de datos establecida");
    await sequelize.sync();
    console.log("✅ Sincronización completada");

    const server = app.listen(config.port, () => {
      console.log(
        `🚀 Servidor corriendo en el puerto ${config.port} (${config.nodeEnv})`
      );
    });

    //! Manejo de cierre gracioso
    process.on("SIGTERM", async () => {
      console.log("Recibida señal SIGTERM. Cerrando servidor...");
      server.close(async () => {
        await closeAllConnections();
        process.exit(0);
      });
    });

    //! Verificación periódica de la conexión
    setInterval(async () => {
      const isConnected = await checkConnection();
      if (!isConnected) {
        console.log("⚠️ Conexión perdida, intentando reconectar...");
        await checkConnection();
      }
    }, 30000); // Verificar cada 30 segundos
  })
  .catch((err: any) => {
    console.error(
      "❌ No se pudo conectar a la base de datos después de varios intentos:",
      err
    );
  });
