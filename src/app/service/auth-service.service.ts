import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AuthServiceService {
  
  private serverURL = 'http://192.168.1.2:5000/autenticacion/generated_token';
  constructor(private http: HttpClient) {

  }




  TokenLogin(token: string) {
    localStorage.setItem("token", token);
  }
  logoout() {
    localStorage.removeItem("token");
  }

  getToken(): string {
    const token = localStorage.getItem("");
    return token || '';
  }

  islogged(): boolean {
    return !!localStorage.getItem("token");
  }

  login(username: string, password: string) {
    const credentials = { username,password };
    console.log(credentials);
    this.http.post(this.serverURL, credentials)
      .subscribe(
        (response: any) => {
         //this.TokenLogin(response.token);
         console.log(response.token);
        
        },
        (error) => {
          console.error('Error en el inicio de sesión:', error);
         
        }
      );
  }

  
}
