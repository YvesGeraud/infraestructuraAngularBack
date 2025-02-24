import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id_usuario: number;
  usuario: string;
  // Luego añadirán más propiedades
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
private apiUrl = 'http://localhost:3000/api/usuarios'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
}
