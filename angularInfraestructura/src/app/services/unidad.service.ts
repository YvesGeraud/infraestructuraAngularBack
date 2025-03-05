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

  getUnidadByCct(cct: string): Observable<Unidad> {
    return this.http.get<Unidad>(`${this.apiUrl}/unidades/cct/${cct}`).pipe(
      map(unidad => ({
        ...unidad,
        ubicacion: parsePoint(unidad.ubicacion as string)
      }))
    );
  }
}

function parsePoint(pointStr: string | null): { lat: number, lng: number } | null {
  try {
    if (!pointStr) {
      console.warn('No se encontró ubicación en el registro');
      return null;
    }

    // Verifica si es un objeto ya parseado
    if (typeof pointStr === 'object' && pointStr !== null) {
      const point = pointStr as any;
      if (point.coordinates && Array.isArray(point.coordinates)) {
        return {
          lng: point.coordinates[0],
          lat: point.coordinates[1]
        };
      }
      console.warn('Formato de objeto de ubicación no reconocido:', pointStr);
      return null;
    }

    // Si es string, intenta parsearlo
    const cleanStr = pointStr.toString().trim();
    if (!cleanStr.startsWith('POINT(') || !cleanStr.endsWith(')')) {
      console.warn('Formato de POINT inválido:', cleanStr);
      return null;
    }

    const coordsStr = cleanStr.substring(6, cleanStr.length - 1);
    const coords = coordsStr.split(' ').map(Number);

    if (coords.length !== 2 || isNaN(coords[0]) || isNaN(coords[1])) {
      console.warn('Coordenadas inválidas:', coordsStr);
      return null;
    }

    return {
      lng: coords[0],
      lat: coords[1]
    };
  } catch (error) {
    console.error('Error parseando ubicación:', error, 'Input:', pointStr);
    return null;
  }
}
