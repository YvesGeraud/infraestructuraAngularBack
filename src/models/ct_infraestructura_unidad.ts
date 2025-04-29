import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId } from './ct_infraestructura_almacenamiento_agua';
import type { ct_infraestructura_antiguedad_inmueble, ct_infraestructura_antiguedad_inmuebleId } from './ct_infraestructura_antiguedad_inmueble';
import type { ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId } from './ct_infraestructura_construccion_inmueble';
import type { ct_infraestructura_dimension_terreno, ct_infraestructura_dimension_terrenoId } from './ct_infraestructura_dimension_terreno';
import type { ct_infraestructura_edificio, ct_infraestructura_edificioId } from './ct_infraestructura_edificio';
import type { ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId } from './ct_infraestructura_equipo_discapacidad';
import type { ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId } from './ct_infraestructura_espacio_inmueble';
import type { ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId } from './ct_infraestructura_fin_inmueble';
import type { ct_infraestructura_frecuencia_limpieza, ct_infraestructura_frecuencia_limpiezaId } from './ct_infraestructura_frecuencia_limpieza';
import type { ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId } from './ct_infraestructura_obra_mantenimiento';
import type { ct_infraestructura_razon_no_construccion, ct_infraestructura_razon_no_construccionId } from './ct_infraestructura_razon_no_construccion';
import type { ct_infraestructura_sostenimiento, ct_infraestructura_sostenimientoId } from './ct_infraestructura_sostenimiento';
import type { ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId } from './ct_infraestructura_suministro_agua';
import type { ct_infraestructura_suministro_energia, ct_infraestructura_suministro_energiaId } from './ct_infraestructura_suministro_energia';
import type { ct_infraestructura_suministro_gas, ct_infraestructura_suministro_gasId } from './ct_infraestructura_suministro_gas';
import type { ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId } from './ct_infraestructura_tipo_construccion';
import type { ct_infraestructura_tipo_descarga, ct_infraestructura_tipo_descargaId } from './ct_infraestructura_tipo_descarga';
import type { ct_infraestructura_tipo_escuela, ct_infraestructura_tipo_escuelaId } from './ct_infraestructura_tipo_escuela';
import type { ct_localidad, ct_localidadId } from './ct_localidad';
import type { rl_infraestructura_edificios, rl_infraestructura_edificiosId } from './rl_infraestructura_edificios';
import type { rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId } from './rl_infraestructura_unidad_almacenamiento_agua';
import type { rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId } from './rl_infraestructura_unidad_construccion';
import type { rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId } from './rl_infraestructura_unidad_construccion_inmueble';
import type { rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId } from './rl_infraestructura_unidad_equipo_discapacidad';
import type { rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId } from './rl_infraestructura_unidad_espacio_inmueble';
import type { rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId } from './rl_infraestructura_unidad_espacios_educativos';
import type { rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId } from './rl_infraestructura_unidad_fin_inmueble';
import type { rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId } from './rl_infraestructura_unidad_obra_mantenimiento';
import type { rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId } from './rl_infraestructura_unidad_suministro_agua';

export interface ct_infraestructura_unidadAttributes {
  id_unidad: number;
  id_escuelaPlantel: number;
  id_tipo_escuela: number;
  cct: string;
  nombre_unidad: string;
  calle?: string;
  numero_exterior?: string;
  numero_interior?: string;
  id_localidad?: number;
  colonia?: string;
  codigo_postal?: number;
  ubicacion?: any;
  id_sostenimiento?: number;
  vigente?: number;
  id_rupet_info?: number;
  num_centros_trabajo?: number;
  construido_para_uso_educativo?: number;
  uso_temporal_educacion_basica?: number;
  id_razon_no_construccion?: number;
  razon_no_construccion_otro?: string;
  id_antiguedad_inmueble?: number;
  id_dimension_terreno?: number;
  num_edificios_educacion_basica?: number;
  porcentaje_ocupacion_edificios?: number;
  servicio_agua_regular?: number;
  agua_potable_frecuente?: number;
  id_suministro_energia?: number;
  id_suministro_gas?: number;
  suministro_gas_otro?: string;
  id_tipo_descarga?: number;
  tipo_descarga_otro?: string;
  separacion_aguas?: number;
  banios_hombres?: number;
  banios_mujeres?: number;
  banios_mixtos?: number;
  tazas_sanitarias_uso?: number;
  tazas_sanitarias_fuera_uso?: number;
  mingitorios_uso?: number;
  mingitorios_fuera_uso?: number;
  letrinas_uso?: number;
  letrinas_fuera_uso?: number;
  tazas_hombres?: number;
  tazas_mujeres?: number;
  tazas_mixtos?: number;
  tazas_alum?: number;
  tazas_docadm?: number;
  tazas_ambos?: number;
  mingitorios_alum?: number;
  mingitorios_docadm?: number;
  mingitorios_ambos?: number;
  letrinas_alum?: number;
  letrinas_docadm?: number;
  letrinas_ambos?: number;
  lavamanos_hombres_uso?: number;
  lavamanos_hombres_fuera_uso?: number;
  lavamanos_mujeres_uso?: number;
  lavamanos_mujeres_fuera_uso?: number;
  lavamanos_mixtos_uso?: number;
  lavamanos_mixtos_fuera_uso?: number;
  bebederos_uso?: number;
  bebederos_fuera_uso?: number;
  area_mantenimiento?: number;
  rehabilitacion_5_anios?: number;
  reconversion_5_anios?: number;
  id_frecuencia_limpieza?: number;
  programa_proteccion_civil?: number;
  alarmas_existentes?: number;
  alarmas_uso?: number;
  botiquines_existentes?: number;
  botiquines_uso?: number;
  extintores_existentes?: number;
  extintores_uso?: number;
  senales_emergencia_existentes?: number;
  senales_emergencia_uso?: number;
  salidas_emergencia_existentes?: number;
  salidas_emergencia_uso?: number;
  zonas_seguridad_existentes?: number;
  zonas_seguridad_uso?: number;
  estacionamiento?: number;
  estacionamiento_estudiantes?: number;
  estacionamiento_docentes?: number;
  estacionamiento_admin?: number;
  estacionamiento_discapacidad?: number;
  estacionamiento_otros?: number;
  infraestructura_discapacidad?: number;
  aulas_accesibles?: number;
  biblioteca_accesible?: number;
  laboratorios_accesibles?: number;
  talleres_accesibles?: number;
  cafeteria_accesible?: number;
  sanitarios_accesibles?: number;
  bebederos_accesibles?: number;
  otras_areas_accesibles?: number;
  otras_areas_accesibles_desc?: string;
  banios_discap_hombres_uso?: number;
  banios_discap_mujeres_uso?: number;
  banios_discap_mixtos_uso?: number;
  banios_discap_hombres_fuera_uso?: number;
  banios_discap_mujeres_fuera_uso?: number;
  banios_discap_mixtos_fuera_uso?: number;
  senializacion_discapacidad?: number;
  rampas?: number;
  pavimento_tactil?: number;
  barandales_pasamanos?: number;
  area_braille?: number;
  elevadores_plataformas?: number;
  tira_antiderrapante?: number;
  aula_especializada_discapacidad?: number;
  seniales_mundial_ciegos?: number;
  seniales_mundial_sordos?: number;
  seniales_accesibilidad_para_perros_guia?: number;
  seniales_telefono_texto_sordos?: number;
  num_software_discapacidad?: number;
  claves_centros_trabajo?: string;
}

export type ct_infraestructura_unidadPk = "id_unidad";
export type ct_infraestructura_unidadId = ct_infraestructura_unidad[ct_infraestructura_unidadPk];
export type ct_infraestructura_unidadOptionalAttributes = "id_unidad" | "id_escuelaPlantel" | "id_tipo_escuela" | "calle" | "numero_exterior" | "numero_interior" | "id_localidad" | "colonia" | "codigo_postal" | "ubicacion" | "id_sostenimiento" | "vigente" | "id_rupet_info" | "num_centros_trabajo" | "construido_para_uso_educativo" | "uso_temporal_educacion_basica" | "id_razon_no_construccion" | "razon_no_construccion_otro" | "id_antiguedad_inmueble" | "id_dimension_terreno" | "num_edificios_educacion_basica" | "porcentaje_ocupacion_edificios" | "servicio_agua_regular" | "agua_potable_frecuente" | "id_suministro_energia" | "id_suministro_gas" | "suministro_gas_otro" | "id_tipo_descarga" | "tipo_descarga_otro" | "separacion_aguas" | "banios_hombres" | "banios_mujeres" | "banios_mixtos" | "tazas_sanitarias_uso" | "tazas_sanitarias_fuera_uso" | "mingitorios_uso" | "mingitorios_fuera_uso" | "letrinas_uso" | "letrinas_fuera_uso" | "tazas_hombres" | "tazas_mujeres" | "tazas_mixtos" | "tazas_alum" | "tazas_docadm" | "tazas_ambos" | "mingitorios_alum" | "mingitorios_docadm" | "mingitorios_ambos" | "letrinas_alum" | "letrinas_docadm" | "letrinas_ambos" | "lavamanos_hombres_uso" | "lavamanos_hombres_fuera_uso" | "lavamanos_mujeres_uso" | "lavamanos_mujeres_fuera_uso" | "lavamanos_mixtos_uso" | "lavamanos_mixtos_fuera_uso" | "bebederos_uso" | "bebederos_fuera_uso" | "area_mantenimiento" | "rehabilitacion_5_anios" | "reconversion_5_anios" | "id_frecuencia_limpieza" | "programa_proteccion_civil" | "alarmas_existentes" | "alarmas_uso" | "botiquines_existentes" | "botiquines_uso" | "extintores_existentes" | "extintores_uso" | "senales_emergencia_existentes" | "senales_emergencia_uso" | "salidas_emergencia_existentes" | "salidas_emergencia_uso" | "zonas_seguridad_existentes" | "zonas_seguridad_uso" | "estacionamiento" | "estacionamiento_estudiantes" | "estacionamiento_docentes" | "estacionamiento_admin" | "estacionamiento_discapacidad" | "estacionamiento_otros" | "infraestructura_discapacidad" | "aulas_accesibles" | "biblioteca_accesible" | "laboratorios_accesibles" | "talleres_accesibles" | "cafeteria_accesible" | "sanitarios_accesibles" | "bebederos_accesibles" | "otras_areas_accesibles" | "otras_areas_accesibles_desc" | "banios_discap_hombres_uso" | "banios_discap_mujeres_uso" | "banios_discap_mixtos_uso" | "banios_discap_hombres_fuera_uso" | "banios_discap_mujeres_fuera_uso" | "banios_discap_mixtos_fuera_uso" | "senializacion_discapacidad" | "rampas" | "pavimento_tactil" | "barandales_pasamanos" | "area_braille" | "elevadores_plataformas" | "tira_antiderrapante" | "aula_especializada_discapacidad" | "seniales_mundial_ciegos" | "seniales_mundial_sordos" | "seniales_accesibilidad_para_perros_guia" | "seniales_telefono_texto_sordos" | "num_software_discapacidad" | "claves_centros_trabajo";
export type ct_infraestructura_unidadCreationAttributes = Optional<ct_infraestructura_unidadAttributes, ct_infraestructura_unidadOptionalAttributes>;

export class ct_infraestructura_unidad extends Model<ct_infraestructura_unidadAttributes, ct_infraestructura_unidadCreationAttributes> implements ct_infraestructura_unidadAttributes {
  id_unidad!: number;
  id_escuelaPlantel!: number;
  id_tipo_escuela!: number;
  cct!: string;
  nombre_unidad!: string;
  calle?: string;
  numero_exterior?: string;
  numero_interior?: string;
  id_localidad?: number;
  colonia?: string;
  codigo_postal?: number;
  ubicacion?: any;
  id_sostenimiento?: number;
  vigente?: number;
  id_rupet_info?: number;
  num_centros_trabajo?: number;
  construido_para_uso_educativo?: number;
  uso_temporal_educacion_basica?: number;
  id_razon_no_construccion?: number;
  razon_no_construccion_otro?: string;
  id_antiguedad_inmueble?: number;
  id_dimension_terreno?: number;
  num_edificios_educacion_basica?: number;
  porcentaje_ocupacion_edificios?: number;
  servicio_agua_regular?: number;
  agua_potable_frecuente?: number;
  id_suministro_energia?: number;
  id_suministro_gas?: number;
  suministro_gas_otro?: string;
  id_tipo_descarga?: number;
  tipo_descarga_otro?: string;
  separacion_aguas?: number;
  banios_hombres?: number;
  banios_mujeres?: number;
  banios_mixtos?: number;
  tazas_sanitarias_uso?: number;
  tazas_sanitarias_fuera_uso?: number;
  mingitorios_uso?: number;
  mingitorios_fuera_uso?: number;
  letrinas_uso?: number;
  letrinas_fuera_uso?: number;
  tazas_hombres?: number;
  tazas_mujeres?: number;
  tazas_mixtos?: number;
  tazas_alum?: number;
  tazas_docadm?: number;
  tazas_ambos?: number;
  mingitorios_alum?: number;
  mingitorios_docadm?: number;
  mingitorios_ambos?: number;
  letrinas_alum?: number;
  letrinas_docadm?: number;
  letrinas_ambos?: number;
  lavamanos_hombres_uso?: number;
  lavamanos_hombres_fuera_uso?: number;
  lavamanos_mujeres_uso?: number;
  lavamanos_mujeres_fuera_uso?: number;
  lavamanos_mixtos_uso?: number;
  lavamanos_mixtos_fuera_uso?: number;
  bebederos_uso?: number;
  bebederos_fuera_uso?: number;
  area_mantenimiento?: number;
  rehabilitacion_5_anios?: number;
  reconversion_5_anios?: number;
  id_frecuencia_limpieza?: number;
  programa_proteccion_civil?: number;
  alarmas_existentes?: number;
  alarmas_uso?: number;
  botiquines_existentes?: number;
  botiquines_uso?: number;
  extintores_existentes?: number;
  extintores_uso?: number;
  senales_emergencia_existentes?: number;
  senales_emergencia_uso?: number;
  salidas_emergencia_existentes?: number;
  salidas_emergencia_uso?: number;
  zonas_seguridad_existentes?: number;
  zonas_seguridad_uso?: number;
  estacionamiento?: number;
  estacionamiento_estudiantes?: number;
  estacionamiento_docentes?: number;
  estacionamiento_admin?: number;
  estacionamiento_discapacidad?: number;
  estacionamiento_otros?: number;
  infraestructura_discapacidad?: number;
  aulas_accesibles?: number;
  biblioteca_accesible?: number;
  laboratorios_accesibles?: number;
  talleres_accesibles?: number;
  cafeteria_accesible?: number;
  sanitarios_accesibles?: number;
  bebederos_accesibles?: number;
  otras_areas_accesibles?: number;
  otras_areas_accesibles_desc?: string;
  banios_discap_hombres_uso?: number;
  banios_discap_mujeres_uso?: number;
  banios_discap_mixtos_uso?: number;
  banios_discap_hombres_fuera_uso?: number;
  banios_discap_mujeres_fuera_uso?: number;
  banios_discap_mixtos_fuera_uso?: number;
  senializacion_discapacidad?: number;
  rampas?: number;
  pavimento_tactil?: number;
  barandales_pasamanos?: number;
  area_braille?: number;
  elevadores_plataformas?: number;
  tira_antiderrapante?: number;
  aula_especializada_discapacidad?: number;
  seniales_mundial_ciegos?: number;
  seniales_mundial_sordos?: number;
  seniales_accesibilidad_para_perros_guia?: number;
  seniales_telefono_texto_sordos?: number;
  num_software_discapacidad?: number;
  claves_centros_trabajo?: string;

  // ct_infraestructura_unidad belongsTo ct_infraestructura_antiguedad_inmueble via id_antiguedad_inmueble
  id_antiguedad_inmueble_ct_infraestructura_antiguedad_inmueble!: ct_infraestructura_antiguedad_inmueble;
  getId_antiguedad_inmueble_ct_infraestructura_antiguedad_inmueble!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_antiguedad_inmueble>;
  setId_antiguedad_inmueble_ct_infraestructura_antiguedad_inmueble!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_antiguedad_inmueble, ct_infraestructura_antiguedad_inmuebleId>;
  createId_antiguedad_inmueble_ct_infraestructura_antiguedad_inmueble!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_antiguedad_inmueble>;
  // ct_infraestructura_unidad belongsTo ct_infraestructura_dimension_terreno via id_dimension_terreno
  id_dimension_terreno_ct_infraestructura_dimension_terreno!: ct_infraestructura_dimension_terreno;
  getId_dimension_terreno_ct_infraestructura_dimension_terreno!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_dimension_terreno>;
  setId_dimension_terreno_ct_infraestructura_dimension_terreno!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_dimension_terreno, ct_infraestructura_dimension_terrenoId>;
  createId_dimension_terreno_ct_infraestructura_dimension_terreno!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_dimension_terreno>;
  // ct_infraestructura_unidad belongsTo ct_infraestructura_frecuencia_limpieza via id_frecuencia_limpieza
  id_frecuencia_limpieza_ct_infraestructura_frecuencia_limpieza!: ct_infraestructura_frecuencia_limpieza;
  getId_frecuencia_limpieza_ct_infraestructura_frecuencia_limpieza!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_frecuencia_limpieza>;
  setId_frecuencia_limpieza_ct_infraestructura_frecuencia_limpieza!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_frecuencia_limpieza, ct_infraestructura_frecuencia_limpiezaId>;
  createId_frecuencia_limpieza_ct_infraestructura_frecuencia_limpieza!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_frecuencia_limpieza>;
  // ct_infraestructura_unidad belongsTo ct_infraestructura_razon_no_construccion via id_razon_no_construccion
  id_razon_no_construccion_ct_infraestructura_razon_no_construccion!: ct_infraestructura_razon_no_construccion;
  getId_razon_no_construccion_ct_infraestructura_razon_no_construccion!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_razon_no_construccion>;
  setId_razon_no_construccion_ct_infraestructura_razon_no_construccion!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_razon_no_construccion, ct_infraestructura_razon_no_construccionId>;
  createId_razon_no_construccion_ct_infraestructura_razon_no_construccion!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_razon_no_construccion>;
  // ct_infraestructura_unidad belongsTo ct_infraestructura_sostenimiento via id_sostenimiento
  id_sostenimiento_ct_infraestructura_sostenimiento!: ct_infraestructura_sostenimiento;
  getId_sostenimiento_ct_infraestructura_sostenimiento!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_sostenimiento>;
  setId_sostenimiento_ct_infraestructura_sostenimiento!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_sostenimiento, ct_infraestructura_sostenimientoId>;
  createId_sostenimiento_ct_infraestructura_sostenimiento!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_sostenimiento>;
  // ct_infraestructura_unidad belongsTo ct_infraestructura_suministro_energia via id_suministro_energia
  id_suministro_energia_ct_infraestructura_suministro_energium!: ct_infraestructura_suministro_energia;
  getId_suministro_energia_ct_infraestructura_suministro_energium!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_suministro_energia>;
  setId_suministro_energia_ct_infraestructura_suministro_energium!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_suministro_energia, ct_infraestructura_suministro_energiaId>;
  createId_suministro_energia_ct_infraestructura_suministro_energium!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_suministro_energia>;
  // ct_infraestructura_unidad belongsTo ct_infraestructura_suministro_gas via id_suministro_gas
  id_suministro_gas_ct_infraestructura_suministro_ga!: ct_infraestructura_suministro_gas;
  getId_suministro_gas_ct_infraestructura_suministro_ga!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_suministro_gas>;
  setId_suministro_gas_ct_infraestructura_suministro_ga!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_suministro_gas, ct_infraestructura_suministro_gasId>;
  createId_suministro_gas_ct_infraestructura_suministro_ga!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_suministro_gas>;
  // ct_infraestructura_unidad belongsTo ct_infraestructura_tipo_descarga via id_tipo_descarga
  id_tipo_descarga_ct_infraestructura_tipo_descarga!: ct_infraestructura_tipo_descarga;
  getId_tipo_descarga_ct_infraestructura_tipo_descarga!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_tipo_descarga>;
  setId_tipo_descarga_ct_infraestructura_tipo_descarga!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_tipo_descarga, ct_infraestructura_tipo_descargaId>;
  createId_tipo_descarga_ct_infraestructura_tipo_descarga!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_tipo_descarga>;
  // ct_infraestructura_unidad belongsTo ct_infraestructura_tipo_escuela via id_tipo_escuela
  id_tipo_escuela_ct_infraestructura_tipo_escuela!: ct_infraestructura_tipo_escuela;
  getId_tipo_escuela_ct_infraestructura_tipo_escuela!: Sequelize.BelongsToGetAssociationMixin<ct_infraestructura_tipo_escuela>;
  setId_tipo_escuela_ct_infraestructura_tipo_escuela!: Sequelize.BelongsToSetAssociationMixin<ct_infraestructura_tipo_escuela, ct_infraestructura_tipo_escuelaId>;
  createId_tipo_escuela_ct_infraestructura_tipo_escuela!: Sequelize.BelongsToCreateAssociationMixin<ct_infraestructura_tipo_escuela>;
  // ct_infraestructura_unidad belongsToMany ct_infraestructura_almacenamiento_agua via id_unidad and id_almacenamiento
  id_almacenamiento_ct_infraestructura_almacenamiento_aguas!: ct_infraestructura_almacenamiento_agua[];
  getId_almacenamiento_ct_infraestructura_almacenamiento_aguas!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_almacenamiento_agua>;
  setId_almacenamiento_ct_infraestructura_almacenamiento_aguas!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId>;
  addId_almacenamiento_ct_infraestructura_almacenamiento_agua!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId>;
  addId_almacenamiento_ct_infraestructura_almacenamiento_aguas!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId>;
  createId_almacenamiento_ct_infraestructura_almacenamiento_agua!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_almacenamiento_agua>;
  removeId_almacenamiento_ct_infraestructura_almacenamiento_agua!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId>;
  removeId_almacenamiento_ct_infraestructura_almacenamiento_aguas!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId>;
  hasId_almacenamiento_ct_infraestructura_almacenamiento_agua!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId>;
  hasId_almacenamiento_ct_infraestructura_almacenamiento_aguas!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_almacenamiento_agua, ct_infraestructura_almacenamiento_aguaId>;
  countId_almacenamiento_ct_infraestructura_almacenamiento_aguas!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_unidad belongsToMany ct_infraestructura_construccion_inmueble via id_unidad and id_construccion
  id_construccion_ct_infraestructura_construccion_inmuebles!: ct_infraestructura_construccion_inmueble[];
  getId_construccion_ct_infraestructura_construccion_inmuebles!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_construccion_inmueble>;
  setId_construccion_ct_infraestructura_construccion_inmuebles!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId>;
  addId_construccion_ct_infraestructura_construccion_inmueble!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId>;
  addId_construccion_ct_infraestructura_construccion_inmuebles!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId>;
  createId_construccion_ct_infraestructura_construccion_inmueble!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_construccion_inmueble>;
  removeId_construccion_ct_infraestructura_construccion_inmueble!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId>;
  removeId_construccion_ct_infraestructura_construccion_inmuebles!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId>;
  hasId_construccion_ct_infraestructura_construccion_inmueble!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId>;
  hasId_construccion_ct_infraestructura_construccion_inmuebles!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_construccion_inmueble, ct_infraestructura_construccion_inmuebleId>;
  countId_construccion_ct_infraestructura_construccion_inmuebles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany ct_infraestructura_edificio via id_unidad
  ct_infraestructura_edificios!: ct_infraestructura_edificio[];
  getCt_infraestructura_edificios!: Sequelize.HasManyGetAssociationsMixin<ct_infraestructura_edificio>;
  setCt_infraestructura_edificios!: Sequelize.HasManySetAssociationsMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  addCt_infraestructura_edificio!: Sequelize.HasManyAddAssociationMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  addCt_infraestructura_edificios!: Sequelize.HasManyAddAssociationsMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  createCt_infraestructura_edificio!: Sequelize.HasManyCreateAssociationMixin<ct_infraestructura_edificio>;
  removeCt_infraestructura_edificio!: Sequelize.HasManyRemoveAssociationMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  removeCt_infraestructura_edificios!: Sequelize.HasManyRemoveAssociationsMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  hasCt_infraestructura_edificio!: Sequelize.HasManyHasAssociationMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  hasCt_infraestructura_edificios!: Sequelize.HasManyHasAssociationsMixin<ct_infraestructura_edificio, ct_infraestructura_edificioId>;
  countCt_infraestructura_edificios!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad belongsToMany ct_infraestructura_equipo_discapacidad via id_unidad and id_equipo
  id_equipo_ct_infraestructura_equipo_discapacidads!: ct_infraestructura_equipo_discapacidad[];
  getId_equipo_ct_infraestructura_equipo_discapacidads!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_equipo_discapacidad>;
  setId_equipo_ct_infraestructura_equipo_discapacidads!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId>;
  addId_equipo_ct_infraestructura_equipo_discapacidad!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId>;
  addId_equipo_ct_infraestructura_equipo_discapacidads!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId>;
  createId_equipo_ct_infraestructura_equipo_discapacidad!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_equipo_discapacidad>;
  removeId_equipo_ct_infraestructura_equipo_discapacidad!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId>;
  removeId_equipo_ct_infraestructura_equipo_discapacidads!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId>;
  hasId_equipo_ct_infraestructura_equipo_discapacidad!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId>;
  hasId_equipo_ct_infraestructura_equipo_discapacidads!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_equipo_discapacidad, ct_infraestructura_equipo_discapacidadId>;
  countId_equipo_ct_infraestructura_equipo_discapacidads!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_unidad belongsToMany ct_infraestructura_espacio_inmueble via id_unidad and id_espacio
  id_espacio_ct_infraestructura_espacio_inmuebles!: ct_infraestructura_espacio_inmueble[];
  getId_espacio_ct_infraestructura_espacio_inmuebles!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_espacio_inmueble>;
  setId_espacio_ct_infraestructura_espacio_inmuebles!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId>;
  addId_espacio_ct_infraestructura_espacio_inmueble!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId>;
  addId_espacio_ct_infraestructura_espacio_inmuebles!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId>;
  createId_espacio_ct_infraestructura_espacio_inmueble!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_espacio_inmueble>;
  removeId_espacio_ct_infraestructura_espacio_inmueble!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId>;
  removeId_espacio_ct_infraestructura_espacio_inmuebles!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId>;
  hasId_espacio_ct_infraestructura_espacio_inmueble!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId>;
  hasId_espacio_ct_infraestructura_espacio_inmuebles!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_espacio_inmueble, ct_infraestructura_espacio_inmuebleId>;
  countId_espacio_ct_infraestructura_espacio_inmuebles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_unidad belongsToMany ct_infraestructura_fin_inmueble via id_unidad and id_fin
  id_fin_ct_infraestructura_fin_inmuebles!: ct_infraestructura_fin_inmueble[];
  getId_fin_ct_infraestructura_fin_inmuebles!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_fin_inmueble>;
  setId_fin_ct_infraestructura_fin_inmuebles!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId>;
  addId_fin_ct_infraestructura_fin_inmueble!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId>;
  addId_fin_ct_infraestructura_fin_inmuebles!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId>;
  createId_fin_ct_infraestructura_fin_inmueble!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_fin_inmueble>;
  removeId_fin_ct_infraestructura_fin_inmueble!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId>;
  removeId_fin_ct_infraestructura_fin_inmuebles!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId>;
  hasId_fin_ct_infraestructura_fin_inmueble!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId>;
  hasId_fin_ct_infraestructura_fin_inmuebles!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_fin_inmueble, ct_infraestructura_fin_inmuebleId>;
  countId_fin_ct_infraestructura_fin_inmuebles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_unidad belongsToMany ct_infraestructura_obra_mantenimiento via id_unidad and id_obra
  id_obra_ct_infraestructura_obra_mantenimientos!: ct_infraestructura_obra_mantenimiento[];
  getId_obra_ct_infraestructura_obra_mantenimientos!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_obra_mantenimiento>;
  setId_obra_ct_infraestructura_obra_mantenimientos!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId>;
  addId_obra_ct_infraestructura_obra_mantenimiento!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId>;
  addId_obra_ct_infraestructura_obra_mantenimientos!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId>;
  createId_obra_ct_infraestructura_obra_mantenimiento!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_obra_mantenimiento>;
  removeId_obra_ct_infraestructura_obra_mantenimiento!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId>;
  removeId_obra_ct_infraestructura_obra_mantenimientos!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId>;
  hasId_obra_ct_infraestructura_obra_mantenimiento!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId>;
  hasId_obra_ct_infraestructura_obra_mantenimientos!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_obra_mantenimiento, ct_infraestructura_obra_mantenimientoId>;
  countId_obra_ct_infraestructura_obra_mantenimientos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_unidad belongsToMany ct_infraestructura_suministro_agua via id_unidad and id_suministro_agua
  id_suministro_agua_ct_infraestructura_suministro_aguas!: ct_infraestructura_suministro_agua[];
  getId_suministro_agua_ct_infraestructura_suministro_aguas!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_suministro_agua>;
  setId_suministro_agua_ct_infraestructura_suministro_aguas!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId>;
  addId_suministro_agua_ct_infraestructura_suministro_agua!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId>;
  addId_suministro_agua_ct_infraestructura_suministro_aguas!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId>;
  createId_suministro_agua_ct_infraestructura_suministro_agua!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_suministro_agua>;
  removeId_suministro_agua_ct_infraestructura_suministro_agua!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId>;
  removeId_suministro_agua_ct_infraestructura_suministro_aguas!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId>;
  hasId_suministro_agua_ct_infraestructura_suministro_agua!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId>;
  hasId_suministro_agua_ct_infraestructura_suministro_aguas!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_suministro_agua, ct_infraestructura_suministro_aguaId>;
  countId_suministro_agua_ct_infraestructura_suministro_aguas!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_unidad belongsToMany ct_infraestructura_tipo_construccion via id_unidad and id_construccion
  id_construccion_ct_infraestructura_tipo_construccions!: ct_infraestructura_tipo_construccion[];
  getId_construccion_ct_infraestructura_tipo_construccions!: Sequelize.BelongsToManyGetAssociationsMixin<ct_infraestructura_tipo_construccion>;
  setId_construccion_ct_infraestructura_tipo_construccions!: Sequelize.BelongsToManySetAssociationsMixin<ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId>;
  addId_construccion_ct_infraestructura_tipo_construccion!: Sequelize.BelongsToManyAddAssociationMixin<ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId>;
  addId_construccion_ct_infraestructura_tipo_construccions!: Sequelize.BelongsToManyAddAssociationsMixin<ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId>;
  createId_construccion_ct_infraestructura_tipo_construccion!: Sequelize.BelongsToManyCreateAssociationMixin<ct_infraestructura_tipo_construccion>;
  removeId_construccion_ct_infraestructura_tipo_construccion!: Sequelize.BelongsToManyRemoveAssociationMixin<ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId>;
  removeId_construccion_ct_infraestructura_tipo_construccions!: Sequelize.BelongsToManyRemoveAssociationsMixin<ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId>;
  hasId_construccion_ct_infraestructura_tipo_construccion!: Sequelize.BelongsToManyHasAssociationMixin<ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId>;
  hasId_construccion_ct_infraestructura_tipo_construccions!: Sequelize.BelongsToManyHasAssociationsMixin<ct_infraestructura_tipo_construccion, ct_infraestructura_tipo_construccionId>;
  countId_construccion_ct_infraestructura_tipo_construccions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_edificios via id_unidad
  rl_infraestructura_edificios!: rl_infraestructura_edificios[];
  getRl_infraestructura_edificios!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_edificios>;
  setRl_infraestructura_edificios!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  addRl_infraestructura_edificio!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  addRl_infraestructura_edificios!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  createRl_infraestructura_edificio!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_edificios>;
  removeRl_infraestructura_edificio!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  removeRl_infraestructura_edificios!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  hasRl_infraestructura_edificio!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  hasRl_infraestructura_edificios!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_edificios, rl_infraestructura_edificiosId>;
  countRl_infraestructura_edificios!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_unidad_almacenamiento_agua via id_unidad
  rl_infraestructura_unidad_almacenamiento_aguas!: rl_infraestructura_unidad_almacenamiento_agua[];
  getRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua>;
  setRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  addRl_infraestructura_unidad_almacenamiento_agua!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  addRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  createRl_infraestructura_unidad_almacenamiento_agua!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_almacenamiento_agua>;
  removeRl_infraestructura_unidad_almacenamiento_agua!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  removeRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  hasRl_infraestructura_unidad_almacenamiento_agua!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  hasRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_almacenamiento_agua, rl_infraestructura_unidad_almacenamiento_aguaId>;
  countRl_infraestructura_unidad_almacenamiento_aguas!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_unidad_construccion via id_unidad
  rl_infraestructura_unidad_construccions!: rl_infraestructura_unidad_construccion[];
  getRl_infraestructura_unidad_construccions!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_construccion>;
  setRl_infraestructura_unidad_construccions!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  addRl_infraestructura_unidad_construccion!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  addRl_infraestructura_unidad_construccions!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  createRl_infraestructura_unidad_construccion!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_construccion>;
  removeRl_infraestructura_unidad_construccion!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  removeRl_infraestructura_unidad_construccions!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  hasRl_infraestructura_unidad_construccion!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  hasRl_infraestructura_unidad_construccions!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_construccion, rl_infraestructura_unidad_construccionId>;
  countRl_infraestructura_unidad_construccions!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_unidad_construccion_inmueble via id_unidad
  rl_infraestructura_unidad_construccion_inmuebles!: rl_infraestructura_unidad_construccion_inmueble[];
  getRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble>;
  setRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  addRl_infraestructura_unidad_construccion_inmueble!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  addRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  createRl_infraestructura_unidad_construccion_inmueble!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_construccion_inmueble>;
  removeRl_infraestructura_unidad_construccion_inmueble!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  removeRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  hasRl_infraestructura_unidad_construccion_inmueble!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  hasRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_construccion_inmueble, rl_infraestructura_unidad_construccion_inmuebleId>;
  countRl_infraestructura_unidad_construccion_inmuebles!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_unidad_equipo_discapacidad via id_unidad
  rl_infraestructura_unidad_equipo_discapacidads!: rl_infraestructura_unidad_equipo_discapacidad[];
  getRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad>;
  setRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  addRl_infraestructura_unidad_equipo_discapacidad!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  addRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  createRl_infraestructura_unidad_equipo_discapacidad!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_equipo_discapacidad>;
  removeRl_infraestructura_unidad_equipo_discapacidad!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  removeRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  hasRl_infraestructura_unidad_equipo_discapacidad!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  hasRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_equipo_discapacidad, rl_infraestructura_unidad_equipo_discapacidadId>;
  countRl_infraestructura_unidad_equipo_discapacidads!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_unidad_espacio_inmueble via id_unidad
  rl_infraestructura_unidad_espacio_inmuebles!: rl_infraestructura_unidad_espacio_inmueble[];
  getRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble>;
  setRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  addRl_infraestructura_unidad_espacio_inmueble!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  addRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  createRl_infraestructura_unidad_espacio_inmueble!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_espacio_inmueble>;
  removeRl_infraestructura_unidad_espacio_inmueble!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  removeRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  hasRl_infraestructura_unidad_espacio_inmueble!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  hasRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_espacio_inmueble, rl_infraestructura_unidad_espacio_inmuebleId>;
  countRl_infraestructura_unidad_espacio_inmuebles!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_unidad_espacios_educativos via id_unidad
  rl_infraestructura_unidad_espacios_educativos!: rl_infraestructura_unidad_espacios_educativos[];
  getRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_espacios_educativos>;
  setRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  addRl_infraestructura_unidad_espacios_educativo!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  addRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  createRl_infraestructura_unidad_espacios_educativo!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_espacios_educativos>;
  removeRl_infraestructura_unidad_espacios_educativo!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  removeRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  hasRl_infraestructura_unidad_espacios_educativo!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  hasRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_espacios_educativos, rl_infraestructura_unidad_espacios_educativosId>;
  countRl_infraestructura_unidad_espacios_educativos!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_unidad_fin_inmueble via id_unidad
  rl_infraestructura_unidad_fin_inmuebles!: rl_infraestructura_unidad_fin_inmueble[];
  getRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_fin_inmueble>;
  setRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  addRl_infraestructura_unidad_fin_inmueble!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  addRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  createRl_infraestructura_unidad_fin_inmueble!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_fin_inmueble>;
  removeRl_infraestructura_unidad_fin_inmueble!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  removeRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  hasRl_infraestructura_unidad_fin_inmueble!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  hasRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_fin_inmueble, rl_infraestructura_unidad_fin_inmuebleId>;
  countRl_infraestructura_unidad_fin_inmuebles!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_unidad_obra_mantenimiento via id_unidad
  rl_infraestructura_unidad_obra_mantenimientos!: rl_infraestructura_unidad_obra_mantenimiento[];
  getRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento>;
  setRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  addRl_infraestructura_unidad_obra_mantenimiento!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  addRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  createRl_infraestructura_unidad_obra_mantenimiento!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_obra_mantenimiento>;
  removeRl_infraestructura_unidad_obra_mantenimiento!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  removeRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  hasRl_infraestructura_unidad_obra_mantenimiento!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  hasRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_obra_mantenimiento, rl_infraestructura_unidad_obra_mantenimientoId>;
  countRl_infraestructura_unidad_obra_mantenimientos!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad hasMany rl_infraestructura_unidad_suministro_agua via id_unidad
  rl_infraestructura_unidad_suministro_aguas!: rl_infraestructura_unidad_suministro_agua[];
  getRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyGetAssociationsMixin<rl_infraestructura_unidad_suministro_agua>;
  setRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManySetAssociationsMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  addRl_infraestructura_unidad_suministro_agua!: Sequelize.HasManyAddAssociationMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  addRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyAddAssociationsMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  createRl_infraestructura_unidad_suministro_agua!: Sequelize.HasManyCreateAssociationMixin<rl_infraestructura_unidad_suministro_agua>;
  removeRl_infraestructura_unidad_suministro_agua!: Sequelize.HasManyRemoveAssociationMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  removeRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyRemoveAssociationsMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  hasRl_infraestructura_unidad_suministro_agua!: Sequelize.HasManyHasAssociationMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  hasRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyHasAssociationsMixin<rl_infraestructura_unidad_suministro_agua, rl_infraestructura_unidad_suministro_aguaId>;
  countRl_infraestructura_unidad_suministro_aguas!: Sequelize.HasManyCountAssociationsMixin;
  // ct_infraestructura_unidad belongsTo ct_localidad via id_localidad
  id_localidad_ct_localidad!: ct_localidad;
  getId_localidad_ct_localidad!: Sequelize.BelongsToGetAssociationMixin<ct_localidad>;
  setId_localidad_ct_localidad!: Sequelize.BelongsToSetAssociationMixin<ct_localidad, ct_localidadId>;
  createId_localidad_ct_localidad!: Sequelize.BelongsToCreateAssociationMixin<ct_localidad>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ct_infraestructura_unidad {
    return ct_infraestructura_unidad.init({
    id_unidad: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_escuelaPlantel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    id_tipo_escuela: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'ct_infraestructura_tipo_escuela',
        key: 'id_tipo_escuela'
      }
    },
    cct: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    nombre_unidad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    calle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    numero_exterior: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    numero_interior: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    id_localidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_localidad',
        key: 'id_localidad'
      }
    },
    colonia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    codigo_postal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ubicacion: {
      type: "POINT",
      allowNull: true
    },
    id_sostenimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_sostenimiento',
        key: 'id_sostenimiento'
      }
    },
    vigente: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    id_rupet_info: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num_centros_trabajo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    construido_para_uso_educativo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    uso_temporal_educacion_basica: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    id_razon_no_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_razon_no_construccion',
        key: 'id_razon'
      }
    },
    razon_no_construccion_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_antiguedad_inmueble: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_antiguedad_inmueble',
        key: 'id_antiguedad'
      }
    },
    id_dimension_terreno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_dimension_terreno',
        key: 'id_dimension'
      }
    },
    num_edificios_educacion_basica: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    porcentaje_ocupacion_edificios: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    servicio_agua_regular: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    agua_potable_frecuente: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    id_suministro_energia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_suministro_energia',
        key: 'id_suministro_energia'
      }
    },
    id_suministro_gas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_suministro_gas',
        key: 'id_suministro_gas'
      }
    },
    suministro_gas_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_tipo_descarga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_tipo_descarga',
        key: 'id_tipo_descarga'
      }
    },
    tipo_descarga_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    separacion_aguas: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    banios_hombres: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    banios_mujeres: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    banios_mixtos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tazas_sanitarias_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tazas_sanitarias_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mingitorios_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mingitorios_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    letrinas_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    letrinas_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tazas_hombres: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tazas_mujeres: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tazas_mixtos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tazas_alum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tazas_docadm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tazas_ambos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mingitorios_alum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mingitorios_docadm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mingitorios_ambos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    letrinas_alum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    letrinas_docadm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    letrinas_ambos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lavamanos_hombres_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lavamanos_hombres_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lavamanos_mujeres_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lavamanos_mujeres_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lavamanos_mixtos_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lavamanos_mixtos_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bebederos_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bebederos_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    area_mantenimiento: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    rehabilitacion_5_anios: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    reconversion_5_anios: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    id_frecuencia_limpieza: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ct_infraestructura_frecuencia_limpieza',
        key: 'id_frecuencia'
      }
    },
    programa_proteccion_civil: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    alarmas_existentes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    alarmas_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    botiquines_existentes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    botiquines_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    extintores_existentes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    extintores_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    senales_emergencia_existentes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    senales_emergencia_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    salidas_emergencia_existentes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    salidas_emergencia_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    zonas_seguridad_existentes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    zonas_seguridad_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    estacionamiento: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    estacionamiento_estudiantes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    estacionamiento_docentes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    estacionamiento_admin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    estacionamiento_discapacidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    estacionamiento_otros: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    infraestructura_discapacidad: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    aulas_accesibles: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    biblioteca_accesible: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    laboratorios_accesibles: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    talleres_accesibles: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    cafeteria_accesible: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    sanitarios_accesibles: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    bebederos_accesibles: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    otras_areas_accesibles: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    otras_areas_accesibles_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    banios_discap_hombres_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    banios_discap_mujeres_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    banios_discap_mixtos_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    banios_discap_hombres_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    banios_discap_mujeres_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    banios_discap_mixtos_fuera_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    senializacion_discapacidad: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    rampas: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    pavimento_tactil: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    barandales_pasamanos: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    area_braille: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    elevadores_plataformas: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    tira_antiderrapante: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    aula_especializada_discapacidad: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    seniales_mundial_ciegos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    seniales_mundial_sordos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    seniales_accesibilidad_para_perros_guia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    seniales_telefono_texto_sordos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    num_software_discapacidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    claves_centros_trabajo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ct_infraestructura_unidad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_unidad" },
        ]
      },
      {
        name: "id_tipo_escuela",
        using: "BTREE",
        fields: [
          { name: "id_tipo_escuela" },
        ]
      },
      {
        name: "id_localidad",
        using: "BTREE",
        fields: [
          { name: "id_localidad" },
        ]
      },
      {
        name: "id_sostenimiento",
        using: "BTREE",
        fields: [
          { name: "id_sostenimiento" },
        ]
      },
      {
        name: "id_razon_no_construccion",
        using: "BTREE",
        fields: [
          { name: "id_razon_no_construccion" },
        ]
      },
      {
        name: "id_antiguedad_inmueble",
        using: "BTREE",
        fields: [
          { name: "id_antiguedad_inmueble" },
        ]
      },
      {
        name: "id_dimension_terreno",
        using: "BTREE",
        fields: [
          { name: "id_dimension_terreno" },
        ]
      },
      {
        name: "id_suministro_energia",
        using: "BTREE",
        fields: [
          { name: "id_suministro_energia" },
        ]
      },
      {
        name: "id_suministro_gas",
        using: "BTREE",
        fields: [
          { name: "id_suministro_gas" },
        ]
      },
      {
        name: "id_tipo_descarga",
        using: "BTREE",
        fields: [
          { name: "id_tipo_descarga" },
        ]
      },
      {
        name: "id_frecuencia_limpieza",
        using: "BTREE",
        fields: [
          { name: "id_frecuencia_limpieza" },
        ]
      },
      {
        name: "FK_ct_infraestructura_unidad_ct_infraestructura_sostenimiento",
        using: "BTREE",
        fields: [
          { name: "id_rupet_info" },
        ]
      },
    ]
  });
  }
}
