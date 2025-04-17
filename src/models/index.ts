import { initModels } from "./init-models";
import sequelize from "../config/database";

// Inicializar todos los modelos
const models = initModels(sequelize);

const {
  ct_infraestructura_unidad,
  ct_infraestructura_sostenimiento,
  ct_infraestructura_tipo_escuela,
} = models;

ct_infraestructura_unidad.belongsTo(ct_infraestructura_sostenimiento, {
  foreignKey: "id_sostenimiento",
  as: "sostenimiento",
});

ct_infraestructura_unidad.belongsTo(ct_infraestructura_tipo_escuela, {
  foreignKey: "id_tipo_escuela",
  as: "tipo_escuela",
});

export default models;
export * from "./init-models";
