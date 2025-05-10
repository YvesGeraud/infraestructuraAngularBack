import {
  ct_infraestructura_nivel_educativo,
  ct_infraestructura_suministro_agua,
  initModels,
  rl_infraestructura_unidad_suministro_agua,
} from "./init-models";
import { sequelize } from "../config/database";

// Inicializar todos los modelos
const models = initModels(sequelize);

const {
  ct_infraestructura_unidad,
  ct_infraestructura_sostenimiento,
  ct_infraestructura_tipo_escuela,
  ct_localidad,
  ct_municipio,
  rl_infraestructura_unidad_nivel,
  rl_infraestructura_unidad_almacenamiento_agua,
  ct_infraestructura_almacenamiento_agua,
} = models;

ct_infraestructura_unidad.belongsTo(ct_infraestructura_sostenimiento, {
  foreignKey: "id_sostenimiento",
  as: "sostenimiento",
});

ct_infraestructura_unidad.belongsTo(ct_infraestructura_tipo_escuela, {
  foreignKey: "id_tipo_escuela",
  as: "tipo_escuela",
});

ct_infraestructura_unidad.belongsTo(ct_localidad, {
  foreignKey: "id_localidad",
  as: "localidad",
});

ct_localidad.belongsTo(ct_municipio, {
  foreignKey: "id_municipio",
  as: "municipio",
});

ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_nivel, {
  foreignKey: "id_unidad",
  as: "niveles",
});

rl_infraestructura_unidad_nivel.belongsTo(ct_infraestructura_nivel_educativo, {
  foreignKey: "id_nivel",
  as: "nivel",
});

ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_suministro_agua, {
  foreignKey: "id_unidad",
  as: "suministros",
});

rl_infraestructura_unidad_suministro_agua.belongsTo(
  ct_infraestructura_suministro_agua,
  {
    foreignKey: "id_suministro_agua",
    as: "suministro",
  }
);

ct_infraestructura_unidad.hasMany(
  rl_infraestructura_unidad_almacenamiento_agua,
  {
    foreignKey: "id_unidad",
    as: "almacenamientos",
  }
);

rl_infraestructura_unidad_almacenamiento_agua.belongsTo(
  ct_infraestructura_almacenamiento_agua,
  {
    foreignKey: "id_almacenamiento",
    as: "almacenamiento",
  }
);

export default models;
export * from "./init-models";
