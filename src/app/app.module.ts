import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './dashboard-prediccion/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminGestionComponent } from './admin-gestion/admin-gestion.component';
import {  HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { PredictionDialogComponent } from './prediction-dialog/prediction-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IonicModule } from '@ionic/angular';
import { AdminDashboardPrediccionComponent } from './admin-dashboard-prediccion/admin-dashboard-prediccion.component';
import { RegresionLinealComponent } from './admin-resultado-colab/regresion-lineal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardPrediccionComponent ,
    UserLayoutComponent,
    AdminLayoutComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminReportComponent,
    AdminGestionComponent,
    RegresionLinealComponent,
    PredictionDialogComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-title',
      messageClass:'ease-in',
      closeButton: true,
      progressBar: true,
    }),
    IonicModule.forRoot({})
  ],
  providers: [/*{provide:HTTP_INTERCEPTORS,
  useClass:JwtInterceptorInterceptor,
  multi:true
  }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
