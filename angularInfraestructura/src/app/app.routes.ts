import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Ejemplo de otra ruta
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UnidadMapComponent } from './components/unidad-map/unidad-map.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'usuarios', 
        component: UsuarioListComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'unidades', 
        component: UnidadMapComponent,
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
];
