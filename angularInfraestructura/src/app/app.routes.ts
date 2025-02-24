import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Ejemplo de otra ruta
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UnidadMapComponent } from './components/unidad-map/unidad-map.component';
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'usuarios', component: UsuarioListComponent },
    { path: 'unidades', component: UnidadMapComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
];
