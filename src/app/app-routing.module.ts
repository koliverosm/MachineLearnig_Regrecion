import { RegresionLinealComponent } from './admin-resultado-colab/regresion-lineal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './dashboard-prediccion/admin-dashboard.component';
import { AdminDashboardPrediccionComponent } from './admin-dashboard-prediccion/admin-dashboard-prediccion.component';
import { AdminGestionComponent } from './admin-gestion/admin-gestion.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AuthGuard } from './guardservice/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: 'login-signup', component: LoginSignupComponent , },
  {
    path: 'user', canActivate:  [AuthGuard],
    component: UserLayoutComponent, // Componente de diseño para usuarios
    children: [
      { path: '', redirectTo: 'Prediccion', pathMatch: 'full' },
      { path: 'Prediccion', component: AdminDashboardComponent },
      
      
     
    ]
  },
  {
    path: 'admin',canActivate:  [AuthGuard],
    component: AdminLayoutComponent, // Componente de diseño para administradores
    children: [
      { path: '', redirectTo: 'admin-regresion-lineal', pathMatch: 'full' },
      { path: 'admin-regresion-lineal', component: RegresionLinealComponent},
      { path: 'admin-gestion', component: AdminGestionComponent},
      { path: 'admin-report', component: AdminReportComponent},
      {path: 'admin-dashboard-prediccion', component: AdminDashboardPrediccionComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
