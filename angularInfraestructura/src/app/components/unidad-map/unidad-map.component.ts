// src/app/components/unidad-map/unidad-map.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service'; // Si tienes uno para unidades, o crea uno específico.
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { UnidadService, Unidad } from '../../services/unidad.service';

@Component({
    selector: 'app-unidad-map',
    imports: [CommonModule, HttpClientModule, FormsModule],
    templateUrl: './unidad-map.component.html',
    styleUrls: ['./unidad-map.component.css']
})
export class UnidadMapComponent implements OnInit, AfterViewInit {
  unidades: Unidad[] = [];
  searchNombre: string = '';
  searchCct: string = '';
  private map!: L.Map;

  constructor(
    private unidadService: UnidadService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.buscar();
  }

  ngAfterViewInit(): void {
    const iconDefault = L.icon({
      iconUrl: window.location.origin + '/assets/leaflet/marker-icon.png',
      shadowUrl: window.location.origin + '/assets/leaflet/marker-shadow.png',
      iconRetinaUrl: window.location.origin + '/assets/leaflet/marker-icon-2x.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });

    L.Marker.prototype.options.icon = iconDefault;

    // Inicializar el mapa
    this.map = L.map('map').setView([19.4237, -98.1411], 9);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // vamos a añadir un geoJson
    this.http.get('assets/tlax_borde.geojson').subscribe((geojsonData: any) => {
      // 4. Agregarlo como una capa en el mapa
      L.geoJSON(geojsonData, {
        style: {
          color: 'green',       // Color del contorno
          weight: 1,           // Grosor de la línea
          fillColor: 'green',   // Color de relleno
          fillOpacity: 0.1     // Opacidad del relleno
        }
      }).addTo(this.map);
    });
  }

  buscar(): void {
    this.unidadService.searchUnidades({
      nombre: this.searchNombre,
      cct: this.searchCct
    }).subscribe({
      next: (data) => {
        this.unidades = data;
        this.mostrarMarcadores();
      },
      error: (err) => console.error('Error al buscar unidades', err)
    });
  }

  mostrarMarcadores(): void {
    // Limpia marcadores existentes (puedes guardar las referencias y removerlos)
    this.map.eachLayer((layer) => {
      if ((layer as L.Marker).getLatLng) {
        this.map.removeLayer(layer);
      }
    });

    // Añade una capa base nuevamente (tileLayer)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Itera sobre las unidades y añade un marcador por cada una
    this.unidades.forEach((unidad) => {
      if (unidad.ubicacion) {
        // Se asume que unidad.ubicacion viene en formato "POINT(lng lat)" o un objeto similar.
        // Por simplicidad, supongamos que el servicio parsea la ubicación y retorna { lat, lng }
        const { lat, lng } = unidad.ubicacion;
        L.marker([lat, lng]).addTo(this.map)
          .bindPopup(`<b>${unidad.nombre_unidad}</b><br>CCT: ${unidad.cct}`);
      }
    });
  }
}


