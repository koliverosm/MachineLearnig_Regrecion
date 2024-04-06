import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../service/rest.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-gestion',
  templateUrl: './admin-gestion.component.html',
  styleUrls: ['./admin-gestion.component.css']
})
export class AdminGestionComponent implements OnInit {

  public datosUsuarioTabla: any[] = [];
  public formulario!: FormGroup;
   private url ='http://192.168.1.2:5000/usuarios'
  constructor(private formBuilder: FormBuilder, private Conexion: RestService) {
    this.formulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required],
      statu: ['', Validators.required]

    });
  }
 
  ngOnInit() {

   this.Conexion.getData(this.url+'/listausuarios').subscribe((response)=>{
    if (response.hasOwnProperty('data') && Array.isArray(response.data)) {
      this.datosUsuarioTabla = response.data; // Asigna la lista directamente
      
    } else {
      // Manejar el caso en que la propiedad 'data' no está presente o no es una lista
      console.error('La propiedad "data" no es una lista en la respuesta.');
    }

   })

  }



  enviarFormulario() {
   
    if (this.formulario.valid) {
      const usuario = this.formulario.value;
      usuario.rol = usuario.rol === 'admin' ? 1 : 2;
      usuario.statu = usuario.statu === 'activo' ? 1 : 0;
      const datosJson = JSON.stringify(this.formulario.value);

      this.Conexion.CrearUsuarioAdmin(datosJson).subscribe(
        (response) => {
          if (response) {
            console.log(response.status);
          } else {
            // Manejar el caso de respuesta sin contenido
          }
        },
        (error) => {
          // Manejar errores aquí
          if (error.status) {
            console.error(`El Usuario Ya Exite ${error.status}`);
            
          } else {
            console.error('Error de red. No se pudo conectar al servidor.');
            alert("El Usuario Ya Existe")
          }
        }
      );
      
      

    } else {
      alert('Todos Los Datos Deben Estar Digilenciados')
    }
  }

  editarUsuario(usuario: any) {
    // Lógica para manejar la edición del usuario
    console.log('Editar usuario:', usuario);
    // Puedes redirigir a una página de edición o mostrar un formulario modal, por ejemplo
  }

  borrarUsuario(usuarioId: number) {
    // Lógica para manejar la eliminación del usuario
    console.log('Borrar usuario con ID:', usuarioId);
    // Puedes enviar una solicitud de eliminación al servidor aquí
  }





}
