export interface IDireccion {
  id_direccion: number;
  nombre: string;
  id_puesto: number;
  estado: number;
  fecha_in: Date;
  fecha_at: Date;
}

export interface IDireccionResponse {
  id_direccion: number;
  nombre: string;
}
