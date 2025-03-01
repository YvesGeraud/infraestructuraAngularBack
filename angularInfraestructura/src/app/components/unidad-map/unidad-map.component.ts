// src/app/components/unidad-map/unidad-map.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as L from 'leaflet';
import { UnidadService, Unidad } from '../../services/unidad.service';
import { MunicipioService, Municipio } from '../../services/municipio.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-unidad-map',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './unidad-map.component.html',
  styleUrls: ['./unidad-map.component.scss']
})
export class UnidadMapComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  private baseLayer!: L.TileLayer;
  private markersLayer!: L.LayerGroup;
  private geoJsonLayer?: L.GeoJSON;
  private markers: L.Marker[] = [];

  searchControl = new FormControl('');
  municipioControl = new FormControl<Municipio | null>(null);
  municipios: Municipio[] = [];

  constructor(
    private unidadService: UnidadService,
    private municipioService: MunicipioService
  ) { }

  ngOnInit(): void {
    this.loadMunicipios();
    this.setupSearch();
  }

  ngAfterViewInit(): void {
    this.initializeMap();
    this.cargarGeoJsonEstatal();
  }

  private initializeMap(): void {
    const iconDefault = L.icon({
      iconUrl: 'assets/leaflet/marker-icon.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png',
      iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });

    L.Marker.prototype.options.icon = iconDefault;

    this.map = L.map('map').setView([19.4237, -98.1411], 9);
    this.baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
    this.markersLayer = L.layerGroup().addTo(this.map);
  }

  private loadMunicipios(): void {
    this.municipioService.getMunicipios().subscribe(municipios => {
      this.municipios = municipios;
    });
  }

  private setupSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(value => !value || value.length >= 2)
    ).subscribe(value => {
      this.buscarUnidades(value ?? undefined);
    });

    this.municipioControl.valueChanges.subscribe(municipio => {
      if (municipio) {
        this.cargarGeoJsonMunicipio(municipio.id_municipio);
        this.buscarUnidades(this.searchControl.value ?? undefined, municipio.id_municipio);
      } else {
        this.cargarGeoJsonEstatal();
        this.buscarUnidades(this.searchControl.value ?? undefined);
      }
    });
  }

  private cargarGeoJsonEstatal(): void {
    if (this.geoJsonLayer) {
      this.map.removeLayer(this.geoJsonLayer);
    }
    this.municipioService.getEstadoGeoJson().subscribe({
      next: (data) => {
        this.geoJsonLayer = L.geoJSON(data, {
          style: {
            color: '#28a745',
            weight: 2,
            opacity: 0.6
          }
        }).addTo(this.map);
      },
      error: (error) => {
        console.error('Error al cargar el GeoJSON del estado:', error);
      }
    });
  }

  private cargarGeoJsonMunicipio(municipioId: number): void {
    if (this.geoJsonLayer) {
      this.map.removeLayer(this.geoJsonLayer);
    }
    this.municipioService.getGeoJsonByMunicipio(municipioId).subscribe({
      next: (data) => {
        this.geoJsonLayer = L.geoJSON(data, {
          style: {
            color: '#28a745',
            weight: 2,
            opacity: 0.6
          }
        }).addTo(this.map);

        if (this.geoJsonLayer) {
          this.map.fitBounds(this.geoJsonLayer.getBounds());
        }
      },
      error: (error) => {
        console.error('Error al cargar el GeoJSON del municipio:', error);
      }
    });
  }

  private buscarUnidades(searchTerm?: string, municipioId?: number): void {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];

    this.unidadService.searchUnidades({
      nombre: searchTerm,
      municipio_id: municipioId
    }).subscribe({
      next: (unidades) => {
        unidades.forEach(unidad => {
          if (unidad.ubicacion) {
            const marker = L.marker([unidad.ubicacion.lat, unidad.ubicacion.lng])
              .bindPopup(`
                <strong>${unidad.nombre_unidad}</strong><br>
                CCT: ${unidad.cct}
              `);
            marker.addTo(this.map);
            this.markers.push(marker);
          }
        });
      },
      error: (error) => {
        console.error('Error al buscar unidades:', error);
      }
    });
  }
}


