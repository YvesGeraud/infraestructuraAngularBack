import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Municipio {
  id_municipio: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMunicipios(): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(`${this.apiUrl}/municipios`);
  }

  getGeoJsonByMunicipio(municipioId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/municipios/${municipioId}/geojson`);
  }

  getEstadoGeoJson(): Observable<any> {
    return this.http.get('/assets/tlax_borde.geojson');
  }
}
