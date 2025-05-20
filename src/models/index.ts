import { initModels } from "./init-models";
import { sequelize } from "../config/database";

// Inicializar todos los modelos
const models = initModels(sequelize);

// Desestructurar los modelos más utilizados
const {
  ct_infraestructura_unidad,
  ct_infraestructura_sostenimiento,
  ct_infraestructura_tipo_escuela,
  ct_localidad,
  ct_municipio,
  ct_infraestructura_edificio,
  ct_infraestructura_espacio_educativo,
  ct_infraestructura_equipo_discapacidad,
  ct_infraestructura_obra_mantenimiento,
  ct_infraestructura_suministro_agua,
  ct_infraestructura_direccion,
  ct_infraestructura_departamento,
  ct_infraestructura_nivel_educativo,
  rl_infraestructura_unidad_nivel,
  rl_infraestructura_unidad_suministro_agua,
  rl_infraestructura_unidad_almacenamiento_agua,
  ct_infraestructura_almacenamiento_agua,
} = models;

// Definir las relaciones principales
// Relaciones de Unidad
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

// Relaciones de Localidad
ct_localidad.belongsTo(ct_municipio, {
  foreignKey: "id_municipio",
  as: "municipio",
});

// Relaciones de Edificio
ct_infraestructura_edificio.belongsTo(ct_infraestructura_unidad, {
  foreignKey: "id_unidad",
  as: "unidad",
});

// Relaciones de Espacios Educativos
ct_infraestructura_espacio_educativo.belongsTo(ct_infraestructura_unidad, {
  foreignKey: "id_unidad",
  as: "unidad",
});

// Relaciones de Equipos de Discapacidad
ct_infraestructura_equipo_discapacidad.belongsTo(ct_infraestructura_unidad, {
  foreignKey: "id_unidad",
  as: "unidad",
});

// Relaciones de Obras de Mantenimiento
ct_infraestructura_obra_mantenimiento.belongsTo(ct_infraestructura_unidad, {
  foreignKey: "id_unidad",
  as: "unidad",
});

// Relaciones de Suministro de Agua
ct_infraestructura_suministro_agua.belongsTo(ct_infraestructura_unidad, {
  foreignKey: "id_unidad",
  as: "unidad",
});

// Relaciones de Dirección
ct_infraestructura_direccion.belongsTo(ct_infraestructura_unidad, {
  foreignKey: "id_unidad",
  as: "unidad",
});

// Relaciones de Departamento
ct_infraestructura_departamento.belongsTo(ct_infraestructura_unidad, {
  foreignKey: "id_unidad",
  as: "unidad",
});

// Relaciones de Niveles Educativos
ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_nivel, {
  foreignKey: "id_unidad",
  as: "niveles",
});

rl_infraestructura_unidad_nivel.belongsTo(ct_infraestructura_nivel_educativo, {
  foreignKey: "id_nivel",
  as: "nivel",
});

// Relaciones de Suministro de Agua
ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_suministro_agua, {
  foreignKey: "id_unidad",
  as: "suministros_agua",
});

rl_infraestructura_unidad_suministro_agua.belongsTo(
  ct_infraestructura_suministro_agua,
  {
    foreignKey: "id_suministro_agua",
    as: "suministro",
  }
);

// Relaciones de Almacenamiento de Agua
ct_infraestructura_unidad.hasMany(
  rl_infraestructura_unidad_almacenamiento_agua,
  {
    foreignKey: "id_unidad",
    as: "almacenamientos_agua",
  }
);

rl_infraestructura_unidad_almacenamiento_agua.belongsTo(
  ct_infraestructura_almacenamiento_agua,
  {
    foreignKey: "id_almacenamiento",
    as: "almacenamiento",
  }
);

// Exportar los modelos y la instancia de sequelize
export default models;
export { sequelize };
export * from "./init-models";
