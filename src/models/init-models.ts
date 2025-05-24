import type { Sequelize } from "sequelize";
import { ct_accion as _ct_accion } from "./ct_accion";
import type { ct_accionAttributes, ct_accionCreationAttributes } from "./ct_accion";
import { ct_infraestructura_almacenamiento_agua as _ct_infraestructura_almacenamiento_agua } from "./ct_infraestructura_almacenamiento_agua";
import type { ct_infraestructura_almacenamiento_aguaAttributes, ct_infraestructura_almacenamiento_aguaCreationAttributes } from "./ct_infraestructura_almacenamiento_agua";
import { ct_infraestructura_antiguedad_inmueble as _ct_infraestructura_antiguedad_inmueble } from "./ct_infraestructura_antiguedad_inmueble";
import type { ct_infraestructura_antiguedad_inmuebleAttributes, ct_infraestructura_antiguedad_inmuebleCreationAttributes } from "./ct_infraestructura_antiguedad_inmueble";
import { ct_infraestructura_area as _ct_infraestructura_area } from "./ct_infraestructura_area";
import type { ct_infraestructura_areaAttributes, ct_infraestructura_areaCreationAttributes } from "./ct_infraestructura_area";
import { ct_infraestructura_construccion_inmueble as _ct_infraestructura_construccion_inmueble } from "./ct_infraestructura_construccion_inmueble";
import type { ct_infraestructura_construccion_inmuebleAttributes, ct_infraestructura_construccion_inmuebleCreationAttributes } from "./ct_infraestructura_construccion_inmueble";
import { ct_infraestructura_departamento as _ct_infraestructura_departamento } from "./ct_infraestructura_departamento";
import type { ct_infraestructura_departamentoAttributes, ct_infraestructura_departamentoCreationAttributes } from "./ct_infraestructura_departamento";
import { ct_infraestructura_dimension_terreno as _ct_infraestructura_dimension_terreno } from "./ct_infraestructura_dimension_terreno";
import type { ct_infraestructura_dimension_terrenoAttributes, ct_infraestructura_dimension_terrenoCreationAttributes } from "./ct_infraestructura_dimension_terreno";
import { ct_infraestructura_direccion as _ct_infraestructura_direccion } from "./ct_infraestructura_direccion";
import type { ct_infraestructura_direccionAttributes, ct_infraestructura_direccionCreationAttributes } from "./ct_infraestructura_direccion";
import { ct_infraestructura_edificio as _ct_infraestructura_edificio } from "./ct_infraestructura_edificio";
import type { ct_infraestructura_edificioAttributes, ct_infraestructura_edificioCreationAttributes } from "./ct_infraestructura_edificio";
import { ct_infraestructura_equipo_discapacidad as _ct_infraestructura_equipo_discapacidad } from "./ct_infraestructura_equipo_discapacidad";
import type { ct_infraestructura_equipo_discapacidadAttributes, ct_infraestructura_equipo_discapacidadCreationAttributes } from "./ct_infraestructura_equipo_discapacidad";
import { ct_infraestructura_espacio_educativo as _ct_infraestructura_espacio_educativo } from "./ct_infraestructura_espacio_educativo";
import type { ct_infraestructura_espacio_educativoAttributes, ct_infraestructura_espacio_educativoCreationAttributes } from "./ct_infraestructura_espacio_educativo";
import { ct_infraestructura_espacio_inmueble as _ct_infraestructura_espacio_inmueble } from "./ct_infraestructura_espacio_inmueble";
import type { ct_infraestructura_espacio_inmuebleAttributes, ct_infraestructura_espacio_inmuebleCreationAttributes } from "./ct_infraestructura_espacio_inmueble";
import { ct_infraestructura_fin_inmueble as _ct_infraestructura_fin_inmueble } from "./ct_infraestructura_fin_inmueble";
import type { ct_infraestructura_fin_inmuebleAttributes, ct_infraestructura_fin_inmuebleCreationAttributes } from "./ct_infraestructura_fin_inmueble";
import { ct_infraestructura_frecuencia_limpieza as _ct_infraestructura_frecuencia_limpieza } from "./ct_infraestructura_frecuencia_limpieza";
import type { ct_infraestructura_frecuencia_limpiezaAttributes, ct_infraestructura_frecuencia_limpiezaCreationAttributes } from "./ct_infraestructura_frecuencia_limpieza";
import { ct_infraestructura_jefe_sector as _ct_infraestructura_jefe_sector } from "./ct_infraestructura_jefe_sector";
import type { ct_infraestructura_jefe_sectorAttributes, ct_infraestructura_jefe_sectorCreationAttributes } from "./ct_infraestructura_jefe_sector";
import { ct_infraestructura_material_paredes as _ct_infraestructura_material_paredes } from "./ct_infraestructura_material_paredes";
import type { ct_infraestructura_material_paredesAttributes, ct_infraestructura_material_paredesCreationAttributes } from "./ct_infraestructura_material_paredes";
import { ct_infraestructura_material_pisos as _ct_infraestructura_material_pisos } from "./ct_infraestructura_material_pisos";
import type { ct_infraestructura_material_pisosAttributes, ct_infraestructura_material_pisosCreationAttributes } from "./ct_infraestructura_material_pisos";
import { ct_infraestructura_material_techo as _ct_infraestructura_material_techo } from "./ct_infraestructura_material_techo";
import type { ct_infraestructura_material_techoAttributes, ct_infraestructura_material_techoCreationAttributes } from "./ct_infraestructura_material_techo";
import { ct_infraestructura_nivel_educativo as _ct_infraestructura_nivel_educativo } from "./ct_infraestructura_nivel_educativo";
import type { ct_infraestructura_nivel_educativoAttributes, ct_infraestructura_nivel_educativoCreationAttributes } from "./ct_infraestructura_nivel_educativo";
import { ct_infraestructura_obra_mantenimiento as _ct_infraestructura_obra_mantenimiento } from "./ct_infraestructura_obra_mantenimiento";
import type { ct_infraestructura_obra_mantenimientoAttributes, ct_infraestructura_obra_mantenimientoCreationAttributes } from "./ct_infraestructura_obra_mantenimiento";
import { ct_infraestructura_pauta_de_seguridad as _ct_infraestructura_pauta_de_seguridad } from "./ct_infraestructura_pauta_de_seguridad";
import type { ct_infraestructura_pauta_de_seguridadAttributes, ct_infraestructura_pauta_de_seguridadCreationAttributes } from "./ct_infraestructura_pauta_de_seguridad";
import { ct_infraestructura_problema_edificio as _ct_infraestructura_problema_edificio } from "./ct_infraestructura_problema_edificio";
import type { ct_infraestructura_problema_edificioAttributes, ct_infraestructura_problema_edificioCreationAttributes } from "./ct_infraestructura_problema_edificio";
import { ct_infraestructura_razon_no_construccion as _ct_infraestructura_razon_no_construccion } from "./ct_infraestructura_razon_no_construccion";
import type { ct_infraestructura_razon_no_construccionAttributes, ct_infraestructura_razon_no_construccionCreationAttributes } from "./ct_infraestructura_razon_no_construccion";
import { ct_infraestructura_sostenimiento as _ct_infraestructura_sostenimiento } from "./ct_infraestructura_sostenimiento";
import type { ct_infraestructura_sostenimientoAttributes, ct_infraestructura_sostenimientoCreationAttributes } from "./ct_infraestructura_sostenimiento";
import { ct_infraestructura_suministro_agua as _ct_infraestructura_suministro_agua } from "./ct_infraestructura_suministro_agua";
import type { ct_infraestructura_suministro_aguaAttributes, ct_infraestructura_suministro_aguaCreationAttributes } from "./ct_infraestructura_suministro_agua";
import { ct_infraestructura_suministro_energia as _ct_infraestructura_suministro_energia } from "./ct_infraestructura_suministro_energia";
import type { ct_infraestructura_suministro_energiaAttributes, ct_infraestructura_suministro_energiaCreationAttributes } from "./ct_infraestructura_suministro_energia";
import { ct_infraestructura_suministro_gas as _ct_infraestructura_suministro_gas } from "./ct_infraestructura_suministro_gas";
import type { ct_infraestructura_suministro_gasAttributes, ct_infraestructura_suministro_gasCreationAttributes } from "./ct_infraestructura_suministro_gas";
import { ct_infraestructura_supervisor as _ct_infraestructura_supervisor } from "./ct_infraestructura_supervisor";
import type { ct_infraestructura_supervisorAttributes, ct_infraestructura_supervisorCreationAttributes } from "./ct_infraestructura_supervisor";
import { ct_infraestructura_tipo_construccion as _ct_infraestructura_tipo_construccion } from "./ct_infraestructura_tipo_construccion";
import type { ct_infraestructura_tipo_construccionAttributes, ct_infraestructura_tipo_construccionCreationAttributes } from "./ct_infraestructura_tipo_construccion";
import { ct_infraestructura_tipo_descarga as _ct_infraestructura_tipo_descarga } from "./ct_infraestructura_tipo_descarga";
import type { ct_infraestructura_tipo_descargaAttributes, ct_infraestructura_tipo_descargaCreationAttributes } from "./ct_infraestructura_tipo_descarga";
import { ct_infraestructura_tipo_escuela as _ct_infraestructura_tipo_escuela } from "./ct_infraestructura_tipo_escuela";
import type { ct_infraestructura_tipo_escuelaAttributes, ct_infraestructura_tipo_escuelaCreationAttributes } from "./ct_infraestructura_tipo_escuela";
import { ct_infraestructura_unidad as _ct_infraestructura_unidad } from "./ct_infraestructura_unidad";
import type { ct_infraestructura_unidadAttributes, ct_infraestructura_unidadCreationAttributes } from "./ct_infraestructura_unidad";
import { ct_inventario as _ct_inventario } from "./ct_inventario";
import type { ct_inventarioAttributes, ct_inventarioCreationAttributes } from "./ct_inventario";
import { ct_inventario_clases as _ct_inventario_clases } from "./ct_inventario_clases";
import type { ct_inventario_clasesAttributes, ct_inventario_clasesCreationAttributes } from "./ct_inventario_clases";
import { ct_inventario_clasificacion as _ct_inventario_clasificacion } from "./ct_inventario_clasificacion";
import type { ct_inventario_clasificacionAttributes, ct_inventario_clasificacionCreationAttributes } from "./ct_inventario_clasificacion";
import { ct_inventario_color as _ct_inventario_color } from "./ct_inventario_color";
import type { ct_inventario_colorAttributes, ct_inventario_colorCreationAttributes } from "./ct_inventario_color";
import { ct_inventario_estado_fisico as _ct_inventario_estado_fisico } from "./ct_inventario_estado_fisico";
import type { ct_inventario_estado_fisicoAttributes, ct_inventario_estado_fisicoCreationAttributes } from "./ct_inventario_estado_fisico";
import { ct_inventario_marcas as _ct_inventario_marcas } from "./ct_inventario_marcas";
import type { ct_inventario_marcasAttributes, ct_inventario_marcasCreationAttributes } from "./ct_inventario_marcas";
import { ct_inventario_material as _ct_inventario_material } from "./ct_inventario_material";
import type { ct_inventario_materialAttributes, ct_inventario_materialCreationAttributes } from "./ct_inventario_material";
import { ct_inventario_modelo as _ct_inventario_modelo } from "./ct_inventario_modelo";
import type { ct_inventario_modeloAttributes, ct_inventario_modeloCreationAttributes } from "./ct_inventario_modelo";
import { ct_inventario_proveedor as _ct_inventario_proveedor } from "./ct_inventario_proveedor";
import type { ct_inventario_proveedorAttributes, ct_inventario_proveedorCreationAttributes } from "./ct_inventario_proveedor";
import { ct_inventario_subclases as _ct_inventario_subclases } from "./ct_inventario_subclases";
import type { ct_inventario_subclasesAttributes, ct_inventario_subclasesCreationAttributes } from "./ct_inventario_subclases";
import { ct_localidad as _ct_localidad } from "./ct_localidad";
import type { ct_localidadAttributes, ct_localidadCreationAttributes } from "./ct_localidad";
import { ct_municipio as _ct_municipio } from "./ct_municipio";
import type { ct_municipioAttributes, ct_municipioCreationAttributes } from "./ct_municipio";
import { ct_usuario as _ct_usuario } from "./ct_usuario";
import type { ct_usuarioAttributes, ct_usuarioCreationAttributes } from "./ct_usuario";
import { dt_bitacora as _dt_bitacora } from "./dt_bitacora";
import type { dt_bitacoraAttributes, dt_bitacoraCreationAttributes } from "./dt_bitacora";
import { migrations as _migrations } from "./migrations";
import type { migrationsAttributes, migrationsCreationAttributes } from "./migrations";
import { rl_infraestructura_edificio_problema as _rl_infraestructura_edificio_problema } from "./rl_infraestructura_edificio_problema";
import type { rl_infraestructura_edificio_problemaAttributes, rl_infraestructura_edificio_problemaCreationAttributes } from "./rl_infraestructura_edificio_problema";
import { rl_infraestructura_edificios as _rl_infraestructura_edificios } from "./rl_infraestructura_edificios";
import type { rl_infraestructura_edificiosAttributes, rl_infraestructura_edificiosCreationAttributes } from "./rl_infraestructura_edificios";
import { rl_infraestructura_unidad_almacenamiento_agua as _rl_infraestructura_unidad_almacenamiento_agua } from "./rl_infraestructura_unidad_almacenamiento_agua";
import type { rl_infraestructura_unidad_almacenamiento_aguaAttributes, rl_infraestructura_unidad_almacenamiento_aguaCreationAttributes } from "./rl_infraestructura_unidad_almacenamiento_agua";
import { rl_infraestructura_unidad_construccion as _rl_infraestructura_unidad_construccion } from "./rl_infraestructura_unidad_construccion";
import type { rl_infraestructura_unidad_construccionAttributes, rl_infraestructura_unidad_construccionCreationAttributes } from "./rl_infraestructura_unidad_construccion";
import { rl_infraestructura_unidad_construccion_inmueble as _rl_infraestructura_unidad_construccion_inmueble } from "./rl_infraestructura_unidad_construccion_inmueble";
import type { rl_infraestructura_unidad_construccion_inmuebleAttributes, rl_infraestructura_unidad_construccion_inmuebleCreationAttributes } from "./rl_infraestructura_unidad_construccion_inmueble";
import { rl_infraestructura_unidad_equipo_discapacidad as _rl_infraestructura_unidad_equipo_discapacidad } from "./rl_infraestructura_unidad_equipo_discapacidad";
import type { rl_infraestructura_unidad_equipo_discapacidadAttributes, rl_infraestructura_unidad_equipo_discapacidadCreationAttributes } from "./rl_infraestructura_unidad_equipo_discapacidad";
import { rl_infraestructura_unidad_espacio_inmueble as _rl_infraestructura_unidad_espacio_inmueble } from "./rl_infraestructura_unidad_espacio_inmueble";
import type { rl_infraestructura_unidad_espacio_inmuebleAttributes, rl_infraestructura_unidad_espacio_inmuebleCreationAttributes } from "./rl_infraestructura_unidad_espacio_inmueble";
import { rl_infraestructura_unidad_espacios_educativos as _rl_infraestructura_unidad_espacios_educativos } from "./rl_infraestructura_unidad_espacios_educativos";
import type { rl_infraestructura_unidad_espacios_educativosAttributes, rl_infraestructura_unidad_espacios_educativosCreationAttributes } from "./rl_infraestructura_unidad_espacios_educativos";
import { rl_infraestructura_unidad_fin_inmueble as _rl_infraestructura_unidad_fin_inmueble } from "./rl_infraestructura_unidad_fin_inmueble";
import type { rl_infraestructura_unidad_fin_inmuebleAttributes, rl_infraestructura_unidad_fin_inmuebleCreationAttributes } from "./rl_infraestructura_unidad_fin_inmueble";
import { rl_infraestructura_unidad_nivel as _rl_infraestructura_unidad_nivel } from "./rl_infraestructura_unidad_nivel";
import type { rl_infraestructura_unidad_nivelAttributes, rl_infraestructura_unidad_nivelCreationAttributes } from "./rl_infraestructura_unidad_nivel";
import { rl_infraestructura_unidad_obra_mantenimiento as _rl_infraestructura_unidad_obra_mantenimiento } from "./rl_infraestructura_unidad_obra_mantenimiento";
import type { rl_infraestructura_unidad_obra_mantenimientoAttributes, rl_infraestructura_unidad_obra_mantenimientoCreationAttributes } from "./rl_infraestructura_unidad_obra_mantenimiento";
import { rl_infraestructura_unidad_suministro_agua as _rl_infraestructura_unidad_suministro_agua } from "./rl_infraestructura_unidad_suministro_agua";
import type { rl_infraestructura_unidad_suministro_aguaAttributes, rl_infraestructura_unidad_suministro_aguaCreationAttributes } from "./rl_infraestructura_unidad_suministro_agua";

export {
  _ct_accion as ct_accion,
  _ct_infraestructura_almacenamiento_agua as ct_infraestructura_almacenamiento_agua,
  _ct_infraestructura_antiguedad_inmueble as ct_infraestructura_antiguedad_inmueble,
  _ct_infraestructura_area as ct_infraestructura_area,
  _ct_infraestructura_construccion_inmueble as ct_infraestructura_construccion_inmueble,
  _ct_infraestructura_departamento as ct_infraestructura_departamento,
  _ct_infraestructura_dimension_terreno as ct_infraestructura_dimension_terreno,
  _ct_infraestructura_direccion as ct_infraestructura_direccion,
  _ct_infraestructura_edificio as ct_infraestructura_edificio,
  _ct_infraestructura_equipo_discapacidad as ct_infraestructura_equipo_discapacidad,
  _ct_infraestructura_espacio_educativo as ct_infraestructura_espacio_educativo,
  _ct_infraestructura_espacio_inmueble as ct_infraestructura_espacio_inmueble,
  _ct_infraestructura_fin_inmueble as ct_infraestructura_fin_inmueble,
  _ct_infraestructura_frecuencia_limpieza as ct_infraestructura_frecuencia_limpieza,
  _ct_infraestructura_jefe_sector as ct_infraestructura_jefe_sector,
  _ct_infraestructura_material_paredes as ct_infraestructura_material_paredes,
  _ct_infraestructura_material_pisos as ct_infraestructura_material_pisos,
  _ct_infraestructura_material_techo as ct_infraestructura_material_techo,
  _ct_infraestructura_nivel_educativo as ct_infraestructura_nivel_educativo,
  _ct_infraestructura_obra_mantenimiento as ct_infraestructura_obra_mantenimiento,
  _ct_infraestructura_pauta_de_seguridad as ct_infraestructura_pauta_de_seguridad,
  _ct_infraestructura_problema_edificio as ct_infraestructura_problema_edificio,
  _ct_infraestructura_razon_no_construccion as ct_infraestructura_razon_no_construccion,
  _ct_infraestructura_sostenimiento as ct_infraestructura_sostenimiento,
  _ct_infraestructura_suministro_agua as ct_infraestructura_suministro_agua,
  _ct_infraestructura_suministro_energia as ct_infraestructura_suministro_energia,
  _ct_infraestructura_suministro_gas as ct_infraestructura_suministro_gas,
  _ct_infraestructura_supervisor as ct_infraestructura_supervisor,
  _ct_infraestructura_tipo_construccion as ct_infraestructura_tipo_construccion,
  _ct_infraestructura_tipo_descarga as ct_infraestructura_tipo_descarga,
  _ct_infraestructura_tipo_escuela as ct_infraestructura_tipo_escuela,
  _ct_infraestructura_unidad as ct_infraestructura_unidad,
  _ct_inventario as ct_inventario,
  _ct_inventario_clases as ct_inventario_clases,
  _ct_inventario_clasificacion as ct_inventario_clasificacion,
  _ct_inventario_color as ct_inventario_color,
  _ct_inventario_estado_fisico as ct_inventario_estado_fisico,
  _ct_inventario_marcas as ct_inventario_marcas,
  _ct_inventario_material as ct_inventario_material,
  _ct_inventario_modelo as ct_inventario_modelo,
  _ct_inventario_proveedor as ct_inventario_proveedor,
  _ct_inventario_subclases as ct_inventario_subclases,
  _ct_localidad as ct_localidad,
  _ct_municipio as ct_municipio,
  _ct_usuario as ct_usuario,
  _dt_bitacora as dt_bitacora,
  _migrations as migrations,
  _rl_infraestructura_edificio_problema as rl_infraestructura_edificio_problema,
  _rl_infraestructura_edificios as rl_infraestructura_edificios,
  _rl_infraestructura_unidad_almacenamiento_agua as rl_infraestructura_unidad_almacenamiento_agua,
  _rl_infraestructura_unidad_construccion as rl_infraestructura_unidad_construccion,
  _rl_infraestructura_unidad_construccion_inmueble as rl_infraestructura_unidad_construccion_inmueble,
  _rl_infraestructura_unidad_equipo_discapacidad as rl_infraestructura_unidad_equipo_discapacidad,
  _rl_infraestructura_unidad_espacio_inmueble as rl_infraestructura_unidad_espacio_inmueble,
  _rl_infraestructura_unidad_espacios_educativos as rl_infraestructura_unidad_espacios_educativos,
  _rl_infraestructura_unidad_fin_inmueble as rl_infraestructura_unidad_fin_inmueble,
  _rl_infraestructura_unidad_nivel as rl_infraestructura_unidad_nivel,
  _rl_infraestructura_unidad_obra_mantenimiento as rl_infraestructura_unidad_obra_mantenimiento,
  _rl_infraestructura_unidad_suministro_agua as rl_infraestructura_unidad_suministro_agua,
};

export type {
  ct_accionAttributes,
  ct_accionCreationAttributes,
  ct_infraestructura_almacenamiento_aguaAttributes,
  ct_infraestructura_almacenamiento_aguaCreationAttributes,
  ct_infraestructura_antiguedad_inmuebleAttributes,
  ct_infraestructura_antiguedad_inmuebleCreationAttributes,
  ct_infraestructura_areaAttributes,
  ct_infraestructura_areaCreationAttributes,
  ct_infraestructura_construccion_inmuebleAttributes,
  ct_infraestructura_construccion_inmuebleCreationAttributes,
  ct_infraestructura_departamentoAttributes,
  ct_infraestructura_departamentoCreationAttributes,
  ct_infraestructura_dimension_terrenoAttributes,
  ct_infraestructura_dimension_terrenoCreationAttributes,
  ct_infraestructura_direccionAttributes,
  ct_infraestructura_direccionCreationAttributes,
  ct_infraestructura_edificioAttributes,
  ct_infraestructura_edificioCreationAttributes,
  ct_infraestructura_equipo_discapacidadAttributes,
  ct_infraestructura_equipo_discapacidadCreationAttributes,
  ct_infraestructura_espacio_educativoAttributes,
  ct_infraestructura_espacio_educativoCreationAttributes,
  ct_infraestructura_espacio_inmuebleAttributes,
  ct_infraestructura_espacio_inmuebleCreationAttributes,
  ct_infraestructura_fin_inmuebleAttributes,
  ct_infraestructura_fin_inmuebleCreationAttributes,
  ct_infraestructura_frecuencia_limpiezaAttributes,
  ct_infraestructura_frecuencia_limpiezaCreationAttributes,
  ct_infraestructura_jefe_sectorAttributes,
  ct_infraestructura_jefe_sectorCreationAttributes,
  ct_infraestructura_material_paredesAttributes,
  ct_infraestructura_material_paredesCreationAttributes,
  ct_infraestructura_material_pisosAttributes,
  ct_infraestructura_material_pisosCreationAttributes,
  ct_infraestructura_material_techoAttributes,
  ct_infraestructura_material_techoCreationAttributes,
  ct_infraestructura_nivel_educativoAttributes,
  ct_infraestructura_nivel_educativoCreationAttributes,
  ct_infraestructura_obra_mantenimientoAttributes,
  ct_infraestructura_obra_mantenimientoCreationAttributes,
  ct_infraestructura_pauta_de_seguridadAttributes,
  ct_infraestructura_pauta_de_seguridadCreationAttributes,
  ct_infraestructura_problema_edificioAttributes,
  ct_infraestructura_problema_edificioCreationAttributes,
  ct_infraestructura_razon_no_construccionAttributes,
  ct_infraestructura_razon_no_construccionCreationAttributes,
  ct_infraestructura_sostenimientoAttributes,
  ct_infraestructura_sostenimientoCreationAttributes,
  ct_infraestructura_suministro_aguaAttributes,
  ct_infraestructura_suministro_aguaCreationAttributes,
  ct_infraestructura_suministro_energiaAttributes,
  ct_infraestructura_suministro_energiaCreationAttributes,
  ct_infraestructura_suministro_gasAttributes,
  ct_infraestructura_suministro_gasCreationAttributes,
  ct_infraestructura_supervisorAttributes,
  ct_infraestructura_supervisorCreationAttributes,
  ct_infraestructura_tipo_construccionAttributes,
  ct_infraestructura_tipo_construccionCreationAttributes,
  ct_infraestructura_tipo_descargaAttributes,
  ct_infraestructura_tipo_descargaCreationAttributes,
  ct_infraestructura_tipo_escuelaAttributes,
  ct_infraestructura_tipo_escuelaCreationAttributes,
  ct_infraestructura_unidadAttributes,
  ct_infraestructura_unidadCreationAttributes,
  ct_inventarioAttributes,
  ct_inventarioCreationAttributes,
  ct_inventario_clasesAttributes,
  ct_inventario_clasesCreationAttributes,
  ct_inventario_clasificacionAttributes,
  ct_inventario_clasificacionCreationAttributes,
  ct_inventario_colorAttributes,
  ct_inventario_colorCreationAttributes,
  ct_inventario_estado_fisicoAttributes,
  ct_inventario_estado_fisicoCreationAttributes,
  ct_inventario_marcasAttributes,
  ct_inventario_marcasCreationAttributes,
  ct_inventario_materialAttributes,
  ct_inventario_materialCreationAttributes,
  ct_inventario_modeloAttributes,
  ct_inventario_modeloCreationAttributes,
  ct_inventario_proveedorAttributes,
  ct_inventario_proveedorCreationAttributes,
  ct_inventario_subclasesAttributes,
  ct_inventario_subclasesCreationAttributes,
  ct_localidadAttributes,
  ct_localidadCreationAttributes,
  ct_municipioAttributes,
  ct_municipioCreationAttributes,
  ct_usuarioAttributes,
  ct_usuarioCreationAttributes,
  dt_bitacoraAttributes,
  dt_bitacoraCreationAttributes,
  migrationsAttributes,
  migrationsCreationAttributes,
  rl_infraestructura_edificio_problemaAttributes,
  rl_infraestructura_edificio_problemaCreationAttributes,
  rl_infraestructura_edificiosAttributes,
  rl_infraestructura_edificiosCreationAttributes,
  rl_infraestructura_unidad_almacenamiento_aguaAttributes,
  rl_infraestructura_unidad_almacenamiento_aguaCreationAttributes,
  rl_infraestructura_unidad_construccionAttributes,
  rl_infraestructura_unidad_construccionCreationAttributes,
  rl_infraestructura_unidad_construccion_inmuebleAttributes,
  rl_infraestructura_unidad_construccion_inmuebleCreationAttributes,
  rl_infraestructura_unidad_equipo_discapacidadAttributes,
  rl_infraestructura_unidad_equipo_discapacidadCreationAttributes,
  rl_infraestructura_unidad_espacio_inmuebleAttributes,
  rl_infraestructura_unidad_espacio_inmuebleCreationAttributes,
  rl_infraestructura_unidad_espacios_educativosAttributes,
  rl_infraestructura_unidad_espacios_educativosCreationAttributes,
  rl_infraestructura_unidad_fin_inmuebleAttributes,
  rl_infraestructura_unidad_fin_inmuebleCreationAttributes,
  rl_infraestructura_unidad_nivelAttributes,
  rl_infraestructura_unidad_nivelCreationAttributes,
  rl_infraestructura_unidad_obra_mantenimientoAttributes,
  rl_infraestructura_unidad_obra_mantenimientoCreationAttributes,
  rl_infraestructura_unidad_suministro_aguaAttributes,
  rl_infraestructura_unidad_suministro_aguaCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const ct_accion = _ct_accion.initModel(sequelize);
  const ct_infraestructura_almacenamiento_agua = _ct_infraestructura_almacenamiento_agua.initModel(sequelize);
  const ct_infraestructura_antiguedad_inmueble = _ct_infraestructura_antiguedad_inmueble.initModel(sequelize);
  const ct_infraestructura_area = _ct_infraestructura_area.initModel(sequelize);
  const ct_infraestructura_construccion_inmueble = _ct_infraestructura_construccion_inmueble.initModel(sequelize);
  const ct_infraestructura_departamento = _ct_infraestructura_departamento.initModel(sequelize);
  const ct_infraestructura_dimension_terreno = _ct_infraestructura_dimension_terreno.initModel(sequelize);
  const ct_infraestructura_direccion = _ct_infraestructura_direccion.initModel(sequelize);
  const ct_infraestructura_edificio = _ct_infraestructura_edificio.initModel(sequelize);
  const ct_infraestructura_equipo_discapacidad = _ct_infraestructura_equipo_discapacidad.initModel(sequelize);
  const ct_infraestructura_espacio_educativo = _ct_infraestructura_espacio_educativo.initModel(sequelize);
  const ct_infraestructura_espacio_inmueble = _ct_infraestructura_espacio_inmueble.initModel(sequelize);
  const ct_infraestructura_fin_inmueble = _ct_infraestructura_fin_inmueble.initModel(sequelize);
  const ct_infraestructura_frecuencia_limpieza = _ct_infraestructura_frecuencia_limpieza.initModel(sequelize);
  const ct_infraestructura_jefe_sector = _ct_infraestructura_jefe_sector.initModel(sequelize);
  const ct_infraestructura_material_paredes = _ct_infraestructura_material_paredes.initModel(sequelize);
  const ct_infraestructura_material_pisos = _ct_infraestructura_material_pisos.initModel(sequelize);
  const ct_infraestructura_material_techo = _ct_infraestructura_material_techo.initModel(sequelize);
  const ct_infraestructura_nivel_educativo = _ct_infraestructura_nivel_educativo.initModel(sequelize);
  const ct_infraestructura_obra_mantenimiento = _ct_infraestructura_obra_mantenimiento.initModel(sequelize);
  const ct_infraestructura_pauta_de_seguridad = _ct_infraestructura_pauta_de_seguridad.initModel(sequelize);
  const ct_infraestructura_problema_edificio = _ct_infraestructura_problema_edificio.initModel(sequelize);
  const ct_infraestructura_razon_no_construccion = _ct_infraestructura_razon_no_construccion.initModel(sequelize);
  const ct_infraestructura_sostenimiento = _ct_infraestructura_sostenimiento.initModel(sequelize);
  const ct_infraestructura_suministro_agua = _ct_infraestructura_suministro_agua.initModel(sequelize);
  const ct_infraestructura_suministro_energia = _ct_infraestructura_suministro_energia.initModel(sequelize);
  const ct_infraestructura_suministro_gas = _ct_infraestructura_suministro_gas.initModel(sequelize);
  const ct_infraestructura_supervisor = _ct_infraestructura_supervisor.initModel(sequelize);
  const ct_infraestructura_tipo_construccion = _ct_infraestructura_tipo_construccion.initModel(sequelize);
  const ct_infraestructura_tipo_descarga = _ct_infraestructura_tipo_descarga.initModel(sequelize);
  const ct_infraestructura_tipo_escuela = _ct_infraestructura_tipo_escuela.initModel(sequelize);
  const ct_infraestructura_unidad = _ct_infraestructura_unidad.initModel(sequelize);
  const ct_inventario = _ct_inventario.initModel(sequelize);
  const ct_inventario_clases = _ct_inventario_clases.initModel(sequelize);
  const ct_inventario_clasificacion = _ct_inventario_clasificacion.initModel(sequelize);
  const ct_inventario_color = _ct_inventario_color.initModel(sequelize);
  const ct_inventario_estado_fisico = _ct_inventario_estado_fisico.initModel(sequelize);
  const ct_inventario_marcas = _ct_inventario_marcas.initModel(sequelize);
  const ct_inventario_material = _ct_inventario_material.initModel(sequelize);
  const ct_inventario_modelo = _ct_inventario_modelo.initModel(sequelize);
  const ct_inventario_proveedor = _ct_inventario_proveedor.initModel(sequelize);
  const ct_inventario_subclases = _ct_inventario_subclases.initModel(sequelize);
  const ct_localidad = _ct_localidad.initModel(sequelize);
  const ct_municipio = _ct_municipio.initModel(sequelize);
  const ct_usuario = _ct_usuario.initModel(sequelize);
  const dt_bitacora = _dt_bitacora.initModel(sequelize);
  const migrations = _migrations.initModel(sequelize);
  const rl_infraestructura_edificio_problema = _rl_infraestructura_edificio_problema.initModel(sequelize);
  const rl_infraestructura_edificios = _rl_infraestructura_edificios.initModel(sequelize);
  const rl_infraestructura_unidad_almacenamiento_agua = _rl_infraestructura_unidad_almacenamiento_agua.initModel(sequelize);
  const rl_infraestructura_unidad_construccion = _rl_infraestructura_unidad_construccion.initModel(sequelize);
  const rl_infraestructura_unidad_construccion_inmueble = _rl_infraestructura_unidad_construccion_inmueble.initModel(sequelize);
  const rl_infraestructura_unidad_equipo_discapacidad = _rl_infraestructura_unidad_equipo_discapacidad.initModel(sequelize);
  const rl_infraestructura_unidad_espacio_inmueble = _rl_infraestructura_unidad_espacio_inmueble.initModel(sequelize);
  const rl_infraestructura_unidad_espacios_educativos = _rl_infraestructura_unidad_espacios_educativos.initModel(sequelize);
  const rl_infraestructura_unidad_fin_inmueble = _rl_infraestructura_unidad_fin_inmueble.initModel(sequelize);
  const rl_infraestructura_unidad_nivel = _rl_infraestructura_unidad_nivel.initModel(sequelize);
  const rl_infraestructura_unidad_obra_mantenimiento = _rl_infraestructura_unidad_obra_mantenimiento.initModel(sequelize);
  const rl_infraestructura_unidad_suministro_agua = _rl_infraestructura_unidad_suministro_agua.initModel(sequelize);

  ct_infraestructura_almacenamiento_agua.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidads', through: rl_infraestructura_unidad_almacenamiento_agua, foreignKey: "id_almacenamiento", otherKey: "id_unidad" });
  ct_infraestructura_construccion_inmueble.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccion_inmuebles', through: rl_infraestructura_unidad_construccion_inmueble, foreignKey: "id_construccion", otherKey: "id_unidad" });
  ct_infraestructura_edificio.belongsToMany(ct_infraestructura_problema_edificio, { as: 'id_problema_ct_infraestructura_problema_edificios', through: rl_infraestructura_edificio_problema, foreignKey: "id_edificio", otherKey: "id_problema" });
  ct_infraestructura_equipo_discapacidad.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_equipo_discapacidads', through: rl_infraestructura_unidad_equipo_discapacidad, foreignKey: "id_equipo", otherKey: "id_unidad" });
  ct_infraestructura_espacio_educativo.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacios_educativos', through: rl_infraestructura_unidad_espacios_educativos, foreignKey: "id_espacio", otherKey: "id_unidad" });
  ct_infraestructura_espacio_inmueble.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_espacio_inmuebles', through: rl_infraestructura_unidad_espacio_inmueble, foreignKey: "id_espacio", otherKey: "id_unidad" });
  ct_infraestructura_fin_inmueble.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_fin_inmuebles', through: rl_infraestructura_unidad_fin_inmueble, foreignKey: "id_fin", otherKey: "id_unidad" });
  ct_infraestructura_nivel_educativo.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_nivels', through: rl_infraestructura_unidad_nivel, foreignKey: "id_nivel", otherKey: "id_unidad" });
  ct_infraestructura_obra_mantenimiento.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_obra_mantenimientos', through: rl_infraestructura_unidad_obra_mantenimiento, foreignKey: "id_obra", otherKey: "id_unidad" });
  ct_infraestructura_problema_edificio.belongsToMany(ct_infraestructura_edificio, { as: 'id_edificio_ct_infraestructura_edificios', through: rl_infraestructura_edificio_problema, foreignKey: "id_problema", otherKey: "id_edificio" });
  ct_infraestructura_suministro_agua.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_suministro_aguas', through: rl_infraestructura_unidad_suministro_agua, foreignKey: "id_suministro_agua", otherKey: "id_unidad" });
  ct_infraestructura_tipo_construccion.belongsToMany(ct_infraestructura_unidad, { as: 'id_unidad_ct_infraestructura_unidad_rl_infraestructura_unidad_construccions', through: rl_infraestructura_unidad_construccion, foreignKey: "id_construccion", otherKey: "id_unidad" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_almacenamiento_agua, { as: 'id_almacenamiento_ct_infraestructura_almacenamiento_aguas', through: rl_infraestructura_unidad_almacenamiento_agua, foreignKey: "id_unidad", otherKey: "id_almacenamiento" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_construccion_inmueble, { as: 'id_construccion_ct_infraestructura_construccion_inmuebles', through: rl_infraestructura_unidad_construccion_inmueble, foreignKey: "id_unidad", otherKey: "id_construccion" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_equipo_discapacidad, { as: 'id_equipo_ct_infraestructura_equipo_discapacidads', through: rl_infraestructura_unidad_equipo_discapacidad, foreignKey: "id_unidad", otherKey: "id_equipo" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_espacio_educativo, { as: 'id_espacio_ct_infraestructura_espacio_educativos', through: rl_infraestructura_unidad_espacios_educativos, foreignKey: "id_unidad", otherKey: "id_espacio" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_espacio_inmueble, { as: 'id_espacio_ct_infraestructura_espacio_inmuebles', through: rl_infraestructura_unidad_espacio_inmueble, foreignKey: "id_unidad", otherKey: "id_espacio" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_fin_inmueble, { as: 'id_fin_ct_infraestructura_fin_inmuebles', through: rl_infraestructura_unidad_fin_inmueble, foreignKey: "id_unidad", otherKey: "id_fin" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_nivel_educativo, { as: 'id_nivel_ct_infraestructura_nivel_educativos', through: rl_infraestructura_unidad_nivel, foreignKey: "id_unidad", otherKey: "id_nivel" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_obra_mantenimiento, { as: 'id_obra_ct_infraestructura_obra_mantenimientos', through: rl_infraestructura_unidad_obra_mantenimiento, foreignKey: "id_unidad", otherKey: "id_obra" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_suministro_agua, { as: 'id_suministro_agua_ct_infraestructura_suministro_aguas', through: rl_infraestructura_unidad_suministro_agua, foreignKey: "id_unidad", otherKey: "id_suministro_agua" });
  ct_infraestructura_unidad.belongsToMany(ct_infraestructura_tipo_construccion, { as: 'id_construccion_ct_infraestructura_tipo_construccions', through: rl_infraestructura_unidad_construccion, foreignKey: "id_unidad", otherKey: "id_construccion" });
  ct_inventario.belongsTo(ct_accion, { as: "id_accion_ct_accion", foreignKey: "id_accion"});
  ct_accion.hasMany(ct_inventario, { as: "ct_inventarios", foreignKey: "id_accion"});
  rl_infraestructura_unidad_almacenamiento_agua.belongsTo(ct_infraestructura_almacenamiento_agua, { as: "id_almacenamiento_ct_infraestructura_almacenamiento_agua", foreignKey: "id_almacenamiento"});
  ct_infraestructura_almacenamiento_agua.hasMany(rl_infraestructura_unidad_almacenamiento_agua, { as: "rl_infraestructura_unidad_almacenamiento_aguas", foreignKey: "id_almacenamiento"});
  ct_infraestructura_unidad.belongsTo(ct_infraestructura_antiguedad_inmueble, { as: "id_antiguedad_inmueble_ct_infraestructura_antiguedad_inmueble", foreignKey: "id_antiguedad_inmueble"});
  ct_infraestructura_antiguedad_inmueble.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_antiguedad_inmueble"});
  rl_infraestructura_unidad_construccion_inmueble.belongsTo(ct_infraestructura_construccion_inmueble, { as: "id_construccion_ct_infraestructura_construccion_inmueble", foreignKey: "id_construccion"});
  ct_infraestructura_construccion_inmueble.hasMany(rl_infraestructura_unidad_construccion_inmueble, { as: "rl_infraestructura_unidad_construccion_inmuebles", foreignKey: "id_construccion"});
  ct_infraestructura_area.belongsTo(ct_infraestructura_departamento, { as: "id_departamento_ct_infraestructura_departamento", foreignKey: "id_departamento"});
  ct_infraestructura_departamento.hasMany(ct_infraestructura_area, { as: "ct_infraestructura_areas", foreignKey: "id_departamento"});
  ct_infraestructura_jefe_sector.belongsTo(ct_infraestructura_departamento, { as: "id_departamento_ct_infraestructura_departamento", foreignKey: "id_departamento"});
  ct_infraestructura_departamento.hasMany(ct_infraestructura_jefe_sector, { as: "ct_infraestructura_jefe_sectors", foreignKey: "id_departamento"});
  ct_infraestructura_supervisor.belongsTo(ct_infraestructura_departamento, { as: "id_departamento_ct_infraestructura_departamento", foreignKey: "id_departamento"});
  ct_infraestructura_departamento.hasMany(ct_infraestructura_supervisor, { as: "ct_infraestructura_supervisors", foreignKey: "id_departamento"});
  rl_infraestructura_edificios.belongsTo(ct_infraestructura_departamento, { as: "id_departamento_ct_infraestructura_departamento", foreignKey: "id_departamento"});
  ct_infraestructura_departamento.hasMany(rl_infraestructura_edificios, { as: "rl_infraestructura_edificios", foreignKey: "id_departamento"});
  ct_infraestructura_unidad.belongsTo(ct_infraestructura_dimension_terreno, { as: "id_dimension_terreno_ct_infraestructura_dimension_terreno", foreignKey: "id_dimension_terreno"});
  ct_infraestructura_dimension_terreno.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_dimension_terreno"});
  ct_infraestructura_departamento.belongsTo(ct_infraestructura_direccion, { as: "id_direccion_ct_infraestructura_direccion", foreignKey: "id_direccion"});
  ct_infraestructura_direccion.hasMany(ct_infraestructura_departamento, { as: "ct_infraestructura_departamentos", foreignKey: "id_direccion"});
  rl_infraestructura_edificios.belongsTo(ct_infraestructura_direccion, { as: "id_direccion_ct_infraestructura_direccion", foreignKey: "id_direccion"});
  ct_infraestructura_direccion.hasMany(rl_infraestructura_edificios, { as: "rl_infraestructura_edificios", foreignKey: "id_direccion"});
  rl_infraestructura_edificio_problema.belongsTo(ct_infraestructura_edificio, { as: "id_edificio_ct_infraestructura_edificio", foreignKey: "id_edificio"});
  ct_infraestructura_edificio.hasMany(rl_infraestructura_edificio_problema, { as: "rl_infraestructura_edificio_problemas", foreignKey: "id_edificio"});
  rl_infraestructura_unidad_equipo_discapacidad.belongsTo(ct_infraestructura_equipo_discapacidad, { as: "id_equipo_ct_infraestructura_equipo_discapacidad", foreignKey: "id_equipo"});
  ct_infraestructura_equipo_discapacidad.hasMany(rl_infraestructura_unidad_equipo_discapacidad, { as: "rl_infraestructura_unidad_equipo_discapacidads", foreignKey: "id_equipo"});
  rl_infraestructura_unidad_espacios_educativos.belongsTo(ct_infraestructura_espacio_educativo, { as: "id_espacio_ct_infraestructura_espacio_educativo", foreignKey: "id_espacio"});
  ct_infraestructura_espacio_educativo.hasMany(rl_infraestructura_unidad_espacios_educativos, { as: "rl_infraestructura_unidad_espacios_educativos", foreignKey: "id_espacio"});
  rl_infraestructura_unidad_espacio_inmueble.belongsTo(ct_infraestructura_espacio_inmueble, { as: "id_espacio_ct_infraestructura_espacio_inmueble", foreignKey: "id_espacio"});
  ct_infraestructura_espacio_inmueble.hasMany(rl_infraestructura_unidad_espacio_inmueble, { as: "rl_infraestructura_unidad_espacio_inmuebles", foreignKey: "id_espacio"});
  rl_infraestructura_unidad_fin_inmueble.belongsTo(ct_infraestructura_fin_inmueble, { as: "id_fin_ct_infraestructura_fin_inmueble", foreignKey: "id_fin"});
  ct_infraestructura_fin_inmueble.hasMany(rl_infraestructura_unidad_fin_inmueble, { as: "rl_infraestructura_unidad_fin_inmuebles", foreignKey: "id_fin"});
  ct_infraestructura_unidad.belongsTo(ct_infraestructura_frecuencia_limpieza, { as: "id_frecuencia_limpieza_ct_infraestructura_frecuencia_limpieza", foreignKey: "id_frecuencia_limpieza"});
  ct_infraestructura_frecuencia_limpieza.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_frecuencia_limpieza"});
  rl_infraestructura_edificios.belongsTo(ct_infraestructura_jefe_sector, { as: "id_jefe_sector_ct_infraestructura_jefe_sector", foreignKey: "id_jefe_sector"});
  ct_infraestructura_jefe_sector.hasMany(rl_infraestructura_edificios, { as: "rl_infraestructura_edificios", foreignKey: "id_jefe_sector"});
  rl_infraestructura_unidad_nivel.belongsTo(ct_infraestructura_nivel_educativo, { as: "id_nivel_ct_infraestructura_nivel_educativo", foreignKey: "id_nivel"});
  ct_infraestructura_nivel_educativo.hasMany(rl_infraestructura_unidad_nivel, { as: "rl_infraestructura_unidad_nivels", foreignKey: "id_nivel"});
  rl_infraestructura_unidad_obra_mantenimiento.belongsTo(ct_infraestructura_obra_mantenimiento, { as: "id_obra_ct_infraestructura_obra_mantenimiento", foreignKey: "id_obra"});
  ct_infraestructura_obra_mantenimiento.hasMany(rl_infraestructura_unidad_obra_mantenimiento, { as: "rl_infraestructura_unidad_obra_mantenimientos", foreignKey: "id_obra"});
  rl_infraestructura_edificio_problema.belongsTo(ct_infraestructura_problema_edificio, { as: "id_problema_ct_infraestructura_problema_edificio", foreignKey: "id_problema"});
  ct_infraestructura_problema_edificio.hasMany(rl_infraestructura_edificio_problema, { as: "rl_infraestructura_edificio_problemas", foreignKey: "id_problema"});
  ct_infraestructura_unidad.belongsTo(ct_infraestructura_razon_no_construccion, { as: "id_razon_no_construccion_ct_infraestructura_razon_no_construccion", foreignKey: "id_razon_no_construccion"});
  ct_infraestructura_razon_no_construccion.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_razon_no_construccion"});
  ct_infraestructura_unidad.belongsTo(ct_infraestructura_sostenimiento, { as: "id_sostenimiento_ct_infraestructura_sostenimiento", foreignKey: "id_sostenimiento"});
  ct_infraestructura_sostenimiento.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_sostenimiento"});
  rl_infraestructura_unidad_suministro_agua.belongsTo(ct_infraestructura_suministro_agua, { as: "id_suministro_agua_ct_infraestructura_suministro_agua", foreignKey: "id_suministro_agua"});
  ct_infraestructura_suministro_agua.hasMany(rl_infraestructura_unidad_suministro_agua, { as: "rl_infraestructura_unidad_suministro_aguas", foreignKey: "id_suministro_agua"});
  ct_infraestructura_unidad.belongsTo(ct_infraestructura_suministro_energia, { as: "id_suministro_energia_ct_infraestructura_suministro_energium", foreignKey: "id_suministro_energia"});
  ct_infraestructura_suministro_energia.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_suministro_energia"});
  ct_infraestructura_unidad.belongsTo(ct_infraestructura_suministro_gas, { as: "id_suministro_gas_ct_infraestructura_suministro_ga", foreignKey: "id_suministro_gas"});
  ct_infraestructura_suministro_gas.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_suministro_gas"});
  rl_infraestructura_edificios.belongsTo(ct_infraestructura_supervisor, { as: "id_supervisor_ct_infraestructura_supervisor", foreignKey: "id_supervisor"});
  ct_infraestructura_supervisor.hasMany(rl_infraestructura_edificios, { as: "rl_infraestructura_edificios", foreignKey: "id_supervisor"});
  rl_infraestructura_unidad_construccion.belongsTo(ct_infraestructura_tipo_construccion, { as: "id_construccion_ct_infraestructura_tipo_construccion", foreignKey: "id_construccion"});
  ct_infraestructura_tipo_construccion.hasMany(rl_infraestructura_unidad_construccion, { as: "rl_infraestructura_unidad_construccions", foreignKey: "id_construccion"});
  ct_infraestructura_unidad.belongsTo(ct_infraestructura_tipo_descarga, { as: "id_tipo_descarga_ct_infraestructura_tipo_descarga", foreignKey: "id_tipo_descarga"});
  ct_infraestructura_tipo_descarga.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_tipo_descarga"});
  ct_infraestructura_unidad.belongsTo(ct_infraestructura_tipo_escuela, { as: "id_tipo_escuela_ct_infraestructura_tipo_escuela", foreignKey: "id_tipo_escuela"});
  ct_infraestructura_tipo_escuela.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_tipo_escuela"});
  ct_infraestructura_edificio.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(ct_infraestructura_edificio, { as: "ct_infraestructura_edificios", foreignKey: "id_unidad"});
  rl_infraestructura_edificios.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_edificios, { as: "rl_infraestructura_edificios", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_almacenamiento_agua.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_almacenamiento_agua, { as: "rl_infraestructura_unidad_almacenamiento_aguas", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_construccion.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_construccion, { as: "rl_infraestructura_unidad_construccions", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_construccion_inmueble.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_construccion_inmueble, { as: "rl_infraestructura_unidad_construccion_inmuebles", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_equipo_discapacidad.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_equipo_discapacidad, { as: "rl_infraestructura_unidad_equipo_discapacidads", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_espacio_inmueble.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_espacio_inmueble, { as: "rl_infraestructura_unidad_espacio_inmuebles", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_espacios_educativos.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_espacios_educativos, { as: "rl_infraestructura_unidad_espacios_educativos", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_fin_inmueble.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_fin_inmueble, { as: "rl_infraestructura_unidad_fin_inmuebles", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_nivel.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_nivel, { as: "rl_infraestructura_unidad_nivels", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_obra_mantenimiento.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_obra_mantenimiento, { as: "rl_infraestructura_unidad_obra_mantenimientos", foreignKey: "id_unidad"});
  rl_infraestructura_unidad_suministro_agua.belongsTo(ct_infraestructura_unidad, { as: "id_unidad_ct_infraestructura_unidad", foreignKey: "id_unidad"});
  ct_infraestructura_unidad.hasMany(rl_infraestructura_unidad_suministro_agua, { as: "rl_infraestructura_unidad_suministro_aguas", foreignKey: "id_unidad"});
  ct_inventario_subclases.belongsTo(ct_inventario_clases, { as: "id_clase_ct_inventario_clase", foreignKey: "id_clase"});
  ct_inventario_clases.hasMany(ct_inventario_subclases, { as: "ct_inventario_subclases", foreignKey: "id_clase"});
  ct_inventario.belongsTo(ct_inventario_color, { as: "id_color_ct_inventario_color", foreignKey: "id_color"});
  ct_inventario_color.hasMany(ct_inventario, { as: "ct_inventarios", foreignKey: "id_color"});
  ct_inventario.belongsTo(ct_inventario_estado_fisico, { as: "id_estadoFisico_ct_inventario_estado_fisico", foreignKey: "id_estadoFisico"});
  ct_inventario_estado_fisico.hasMany(ct_inventario, { as: "ct_inventarios", foreignKey: "id_estadoFisico"});
  ct_inventario.belongsTo(ct_inventario_marcas, { as: "id_marca_ct_inventario_marca", foreignKey: "id_marca"});
  ct_inventario_marcas.hasMany(ct_inventario, { as: "ct_inventarios", foreignKey: "id_marca"});
  ct_inventario.belongsTo(ct_inventario_material, { as: "id_material_ct_inventario_material", foreignKey: "id_material"});
  ct_inventario_material.hasMany(ct_inventario, { as: "ct_inventarios", foreignKey: "id_material"});
  ct_inventario.belongsTo(ct_inventario_proveedor, { as: "id_proveedor_ct_inventario_proveedor", foreignKey: "id_proveedor"});
  ct_inventario_proveedor.hasMany(ct_inventario, { as: "ct_inventarios", foreignKey: "id_proveedor"});
  ct_inventario.belongsTo(ct_inventario_subclases, { as: "id_subclase_ct_inventario_subclase", foreignKey: "id_subclase"});
  ct_inventario_subclases.hasMany(ct_inventario, { as: "ct_inventarios", foreignKey: "id_subclase"});
  ct_infraestructura_unidad.belongsTo(ct_localidad, { as: "id_localidad_ct_localidad", foreignKey: "id_localidad"});
  ct_localidad.hasMany(ct_infraestructura_unidad, { as: "ct_infraestructura_unidads", foreignKey: "id_localidad"});
  ct_localidad.belongsTo(ct_municipio, { as: "id_municipio_ct_municipio", foreignKey: "id_municipio"});
  ct_municipio.hasMany(ct_localidad, { as: "ct_localidads", foreignKey: "id_municipio"});
  ct_inventario.belongsTo(rl_infraestructura_edificios, { as: "id_edificios_rl_infraestructura_edificio", foreignKey: "id_edificios"});
  rl_infraestructura_edificios.hasMany(ct_inventario, { as: "ct_inventarios", foreignKey: "id_edificios"});

  return {
    ct_accion: ct_accion,
    ct_infraestructura_almacenamiento_agua: ct_infraestructura_almacenamiento_agua,
    ct_infraestructura_antiguedad_inmueble: ct_infraestructura_antiguedad_inmueble,
    ct_infraestructura_area: ct_infraestructura_area,
    ct_infraestructura_construccion_inmueble: ct_infraestructura_construccion_inmueble,
    ct_infraestructura_departamento: ct_infraestructura_departamento,
    ct_infraestructura_dimension_terreno: ct_infraestructura_dimension_terreno,
    ct_infraestructura_direccion: ct_infraestructura_direccion,
    ct_infraestructura_edificio: ct_infraestructura_edificio,
    ct_infraestructura_equipo_discapacidad: ct_infraestructura_equipo_discapacidad,
    ct_infraestructura_espacio_educativo: ct_infraestructura_espacio_educativo,
    ct_infraestructura_espacio_inmueble: ct_infraestructura_espacio_inmueble,
    ct_infraestructura_fin_inmueble: ct_infraestructura_fin_inmueble,
    ct_infraestructura_frecuencia_limpieza: ct_infraestructura_frecuencia_limpieza,
    ct_infraestructura_jefe_sector: ct_infraestructura_jefe_sector,
    ct_infraestructura_material_paredes: ct_infraestructura_material_paredes,
    ct_infraestructura_material_pisos: ct_infraestructura_material_pisos,
    ct_infraestructura_material_techo: ct_infraestructura_material_techo,
    ct_infraestructura_nivel_educativo: ct_infraestructura_nivel_educativo,
    ct_infraestructura_obra_mantenimiento: ct_infraestructura_obra_mantenimiento,
    ct_infraestructura_pauta_de_seguridad: ct_infraestructura_pauta_de_seguridad,
    ct_infraestructura_problema_edificio: ct_infraestructura_problema_edificio,
    ct_infraestructura_razon_no_construccion: ct_infraestructura_razon_no_construccion,
    ct_infraestructura_sostenimiento: ct_infraestructura_sostenimiento,
    ct_infraestructura_suministro_agua: ct_infraestructura_suministro_agua,
    ct_infraestructura_suministro_energia: ct_infraestructura_suministro_energia,
    ct_infraestructura_suministro_gas: ct_infraestructura_suministro_gas,
    ct_infraestructura_supervisor: ct_infraestructura_supervisor,
    ct_infraestructura_tipo_construccion: ct_infraestructura_tipo_construccion,
    ct_infraestructura_tipo_descarga: ct_infraestructura_tipo_descarga,
    ct_infraestructura_tipo_escuela: ct_infraestructura_tipo_escuela,
    ct_infraestructura_unidad: ct_infraestructura_unidad,
    ct_inventario: ct_inventario,
    ct_inventario_clases: ct_inventario_clases,
    ct_inventario_clasificacion: ct_inventario_clasificacion,
    ct_inventario_color: ct_inventario_color,
    ct_inventario_estado_fisico: ct_inventario_estado_fisico,
    ct_inventario_marcas: ct_inventario_marcas,
    ct_inventario_material: ct_inventario_material,
    ct_inventario_modelo: ct_inventario_modelo,
    ct_inventario_proveedor: ct_inventario_proveedor,
    ct_inventario_subclases: ct_inventario_subclases,
    ct_localidad: ct_localidad,
    ct_municipio: ct_municipio,
    ct_usuario: ct_usuario,
    dt_bitacora: dt_bitacora,
    migrations: migrations,
    rl_infraestructura_edificio_problema: rl_infraestructura_edificio_problema,
    rl_infraestructura_edificios: rl_infraestructura_edificios,
    rl_infraestructura_unidad_almacenamiento_agua: rl_infraestructura_unidad_almacenamiento_agua,
    rl_infraestructura_unidad_construccion: rl_infraestructura_unidad_construccion,
    rl_infraestructura_unidad_construccion_inmueble: rl_infraestructura_unidad_construccion_inmueble,
    rl_infraestructura_unidad_equipo_discapacidad: rl_infraestructura_unidad_equipo_discapacidad,
    rl_infraestructura_unidad_espacio_inmueble: rl_infraestructura_unidad_espacio_inmueble,
    rl_infraestructura_unidad_espacios_educativos: rl_infraestructura_unidad_espacios_educativos,
    rl_infraestructura_unidad_fin_inmueble: rl_infraestructura_unidad_fin_inmueble,
    rl_infraestructura_unidad_nivel: rl_infraestructura_unidad_nivel,
    rl_infraestructura_unidad_obra_mantenimiento: rl_infraestructura_unidad_obra_mantenimiento,
    rl_infraestructura_unidad_suministro_agua: rl_infraestructura_unidad_suministro_agua,
  };
}
