export interface IDepartamento {
  id_departamento: number;
  nombre: string;
  id_direccion: number;
  estado: number;
}

export interface IDepartamentoResponse {
  id_departamento: number;
  nombre: string;
}

export interface IDepartamentoConDireccion {
  id_departamento: number;
  nombre: string;
  direccion: {
    id_direccion: number;
    nombre: string;
  };
}

export interface IDepartamentosPorDireccion {
  id_direccion: number;
  nombre_direccion: string;
  departamentos: Array<{
    id_departamento: number;
    nombre: string;
  }>;
}
