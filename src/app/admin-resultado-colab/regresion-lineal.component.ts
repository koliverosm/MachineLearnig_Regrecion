import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regresion-lineal',
  templateUrl: './regresion-lineal.component.html',
  styleUrls: ['./regresion-lineal.component.css']
})
export class RegresionLinealComponent implements OnInit {
  htmlContent: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Reemplaza la URL con la ubicación pública de tu archivo HTML de Google Colab.
    const htmlUrl = 'https://koliverosm.github.io/Machine_Learnig/';

    this.http.get(htmlUrl, { responseType: 'text' }).subscribe((data) => {
      this.htmlContent = data;
    });
  }
}
