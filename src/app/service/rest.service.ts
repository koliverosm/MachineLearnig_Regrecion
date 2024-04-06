import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  /**
   * Peticiones de tipo get
   */
  public get(url: any) {
    return this.http.get(url);

  }

  public getData(url:any):Observable<any>{

    return this.http.get(url)
  }
  public post(url: any, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'response'
  }) {

    return this.http.post(url, body);
  }

  public posttoken(url: string, body: any, options?: any): Observable<any> {

    const requestOptions: any = {};


    if (options) {
      if (options.headers) {
        if (options.headers instanceof HttpHeaders) {
          // Si las cabeceras son del tipo HttpHeaders, simplemente las asignamos
          requestOptions.headers = options.headers;
        } else if (typeof options.headers === 'string') {
          // Si las cabeceras son una cadena de texto, las asignamos directamente
          requestOptions.headers = new HttpHeaders({ Authorization: options.headers });
        }
      }
      // Puedes agregar más opciones según sea necesario
    }

    // Realiza la solicitud POST con la URL, cuerpo y opciones
    return this.http.post(url, body, requestOptions);
  }


  public CrearUsuarioComun(url: string, body: any): Observable<any> {

    return this.http.post(url, body);
  }
  public CrearUsuarioAdmin(body: any): Observable<any> {
    const url = 'http://192.168.1.2:5000/usuarios/crear_usuario_admin';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, body , {headers});
  }

  public Predeccir(body:any):Observable<any>{
    const url = 'http://192.168.1.2:5000/machine/predecir';
      
     return this.http.post(url, body);
   }


  public put(url: string, body: JsonPipe) {

    return this.http.put(url, body);
  }
  public delete(url: string) {
    return this.http.delete(url);
  }



}
