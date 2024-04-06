import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';




@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {
  private url = 'http://192.168.1.2:5000'
  public datosTabla: any[] = [];

  constructor(private http: RestService,) { }
  ngOnInit(): void {
    this.http.getData(this.url + '/machine/getData').subscribe((response) => {
      if (response.hasOwnProperty('data') && Array.isArray(response.data)) {
        this.datosTabla = response.data; // Asigna la lista directamente
       
      } else {
        // Manejar el caso en que la propiedad 'data' no está presente o no es una lista
        console.error('La propiedad "data" no es una lista en la respuesta.');
      }
    }

    )
  }


  exportToPDF(): void {
   


  

    
  }




}
