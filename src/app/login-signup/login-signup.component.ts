
import { AutentificacionService } from '../service/autentificacion.service';
import { RestService } from '../service/rest.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent {
  private serverURL = 'http://192.168.1.2:5000';
  Username!: string;
  Pswd!: string;
  registerUsername!: string;
  registerPswd!: string;
  acceptTerms: boolean = false;
  //datostoken!: string;
  constructor(

    private router: Router,
    private CallAPI: RestService,
    private Autentificacion: AutentificacionService, private toastr: ToastrService
  ) { }
  async abrirUser() {
    localStorage.clear();
    await this.solicitud_verificar_token();
  }

  async solicitud_verificar_token() {
    if (localStorage.getItem('token')) {
      await this.Autentificacion.verifytoken();
    } else {
      
      await this.login();
    }
  }

  async login() {
    try {
      await this.Autentificacion.Service_login(this.Username, this.Pswd);
      // El token se ha creado y almacenado en la cookie, ahora verificamos
      // await this.Autentificacion.verifytoken();
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  }

  to_signup() {
    console.log('to_signup');

    const data = {
      username: this.registerUsername,
      password: this.registerPswd,
    };
    this.CallAPI.CrearUsuarioComun(
      this.serverURL + '/usuarios/crear_usuario',
      data
    ).subscribe(
      (respuesta) => {
       
        this.registerUsername = '';
        this.registerPswd = '';
        this.acceptTerms = false;
        this.toastr.success('¡Registro exitoso!');
      },
      (error) => {
        console.error('Error al realizar la petición:', error);

        // Puedes acceder al código de estado HTTP en el error si es una respuesta HTTP
        if (error.status == 500) {
          console.error('Código de estado HTTP:', error.status);
          alert("El Usuario Ya Esta Registrado")
        }
      }
    );
  }

  abrirAdmin() {
    this.router.navigate(['/admin']);
  }

  public cargarData() {
    this.CallAPI.get(this.serverURL + '/usuarios/listausuarios').subscribe(
      (respuestas) => {
        console.log(respuestas);
      }
    );
  }
}

/*

  async abrirUser()  {

    await this.solicitud_verificar_token()
    await this.login()


  }


  async login() {
    let token = this.cookieService.check('token')
    if (token) {
      console.log(token)
    } else {
      this.Autentificacion.limpiarCookieSiExiste();
    await this.Autentificacion.Service_login(this.Username, this.Pswd);

    }

  }

  async solicitud_verificar_token() {

  if (this.cookieService.check('token')) {
    this.Autentificacion.verifytoken();

    const URLVerifyToken = this.serverURL+'/verify_token/up';
    const token = this.cookieService.get('token');


    // Crear un encabezado de autorización con el token Bearer
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };

    // Realizar la solicitud POST con el encabezado de autorización
    await this.RestService.posttoken(URLVerifyToken, null, options).subscribe(
      (response) => {
        // Manejar la respuesta aquí

        //
        if (response.message) {
          console.log('Si Hay Token Ya puedes pasar');


          if (response.data.roles === 'admin') {
            this.router.navigate(['/admin']);

          } else { this.router.navigate(['/user']); }

        } else {
          alert('No Se Reconoce El Tipo De Rol')
        }
      },
      (error) => {
        // Manejar los errores aquí
        console.error('Error:', error);
      }
    );
       
  } else {
    // Manejar el caso en el que no se encuentra un token
    console.log('No Hay Token Crea Uno Nuevo');
    this.Autentificacion.Service_login(this.Username, this.Pswd);
  }


}

**/
