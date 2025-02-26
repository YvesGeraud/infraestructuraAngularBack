import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Ejemplo de otra ruta
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UnidadMapComponent } from './components/unidad-map/unidad-map.component';
import { AuthGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'usuarios', component: UsuarioListComponent },
      { path: 'unidades', component: UnidadMapComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
];