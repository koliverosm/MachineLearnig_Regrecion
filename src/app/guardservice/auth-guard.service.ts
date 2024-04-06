/*
import { AuthServiceService } from '../service/auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RestService } from '../service/rest.service';
import { AutentificacionService } from '../service/autentificacion.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private auth: AutentificacionService,private restService:RestService,private authService: AuthServiceService, private router: Router) {}
  private URLVerifyToken = 'http://192.168.1.2:5000/verify_token/up';
  canActivate(): boolean {
    if (this.authService.islogged()) {
      this.restService.posttoken(this.URLVerifyToken,null, this.auth.createAuthorization()).subscribe((response) => {
        console.log("Guardian:", response)
        
      }, err => { 
          alert("Error");

      });

      return false;
    } else {
      this.router.navigate(['/login-signup']);
      return false;
    }
  }
}
*/