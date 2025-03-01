// src/app/services/unidad.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Unidad {
  id_unidad: number;
  cct: string;
  nombre_unidad: string;
  ubicacion?: any;
  municipio_id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  searchUnidades(filtros: { nombre?: string; cct?: string; municipio_id?: number }): Observable<Unidad[]> {
    let params = new HttpParams();
    if (filtros.nombre) {
      params = params.set('nombre', filtros.nombre);
    }
    if (filtros.cct) {
      params = params.set('cct', filtros.cct);
    }
    if (filtros.municipio_id) {
      params = params.set('municipio_id', filtros.municipio_id.toString());
    }
    return this.http.get<Unidad[]>(`${this.apiUrl}/unidades`, { params }).pipe(
      map((unidades: Unidad[]) => unidades.map(u => ({
        ...u,
        ubicacion: parsePoint(u.ubicacion as string)
      })))
    );
  }
}

function parsePoint(pointStr: string | null): { lat: number, lng: number } | null {
  if (!pointStr) {
    console.warn('No se encontró ubicación en el registro');
    return null;
  }
  const coords = pointStr.replace("POINT(", "").replace(")", "").split(" ");
  return {
    lng: parseFloat(coords[0]),
    lat: parseFloat(coords[1])
  };
}
