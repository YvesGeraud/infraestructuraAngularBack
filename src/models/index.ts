// src/models/index.ts
import sequelize from "../config/database";
import { ct_usuario } from "./ct_usuario";
import { ct_infraestructura_unidad } from "./ct_infraestructura_unidad";

ct_infraestructura_unidad.initModel(sequelize);
ct_usuario.initModel(sequelize);

//* Asociaciones
ct_usuario.belongsTo(ct_infraestructura_unidad, {
  foreignKey: "id_unidad",
  as: "id_unidad_ct_infraestructura_unidad",
});

export { ct_usuario, ct_infraestructura_unidad };
