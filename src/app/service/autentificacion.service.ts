
import { Observable } from 'rxjs';
import { Router, RouterEvent } from '@angular/router';
import { RestService } from './rest.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AutentificacionService {
  private token: any;
  private serverURL = 'http://192.168.1.2:5000';

  constructor(private http: HttpClient, private router: Router, private restService: RestService
  ) { }



  async Service_login(username: any, password: any) {
    const credentials = { username, password };
    interface AuthResponse {
      success: boolean;
      token: string;
    }

    try {

      this.http.post<AuthResponse>(this.serverURL + '/autenticacion/generated_token', credentials, { observe: 'response' })
        .subscribe(async (response) => {
          const statusCode = response.status;
         
          if (response.status === 201) {
            const responseBody = response.body;


            if (responseBody && responseBody.success && responseBody.token) {
              
              const token = responseBody.token;
              localStorage.setItem('token', token);
              await this.verifytoken();
            } else {
              console.error('La respuesta no tiene la estructura esperada.');
            }

            //  await this.verifytoken();
          } else if (response.status === 404) {
            console.log('Este es el servicio de login. No se creó un token.');
          }
        }, error => {
          console.error('Error en la solicitud:', error);
        });
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  }


  createAuthorization() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`})}

    
  
  }
  async verifytoken() {
    if (localStorage.getItem("token")) {
     
      try {
        this.restService.posttoken(this.serverURL + '/verify_token/up',null, this.createAuthorization()).subscribe(
          (response) => {
            // Manejar la respuesta aquí
            //
            if (response.message) {
             
               
                 
                localStorage.setItem("username",response.data.username)
              if (response.data.roles === 'user') {
                
                this.router.navigate(['/user']);
              

              } else {
              this.router.navigate(['/admin']); }

            } else {
              alert('No Se Reconoce El Tipo De Rol');
            }
          },
          (error) => {
           
            
             this.router.navigate(['/login-signup']);
             alert('Este Token No Es Valido, Vamos Generar Uno Nuevo ');
             

          }
        );
          

      } catch (error) {
        // Manejar los errores aquí
       
      }
    } else {
      console.log('No hay token. Crea uno nuevo.');
      // this.Service_login(this.Username, this.Pswd);
    }
  }


  to_register() {
  }


  

}