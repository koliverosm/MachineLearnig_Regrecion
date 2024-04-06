import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../service/rest.service';
import { PredictionDialogComponent } from '../prediction-dialog/prediction-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-dashboard-prediccion',
  templateUrl: './admin-dashboard-prediccion.component.html',
  styleUrls: ['./admin-dashboard-prediccion.component.css'],
  
})
export class AdminDashboardPrediccionComponent {
  private initialIdUser = localStorage.getItem("username");
  constructor(private fb: FormBuilder, private http:RestService,private dialog: MatDialog) {
    // Inicializa el formulario con validaciones si es necesario
    this.form = this.fb.group({
      iduser: [localStorage.getItem("username"),Validators.required],
      edad: ['',Validators.required],
      genero: ['', Validators.required],
      articulo: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
      ubicacion: ['', Validators.required],
      tamano: ['', Validators.required],
      color: ['', Validators.required],
      temporada: ['', Validators.required],
      calificacion: ['', [Validators.required, Validators.pattern(/^[1-5](\.\d{1,2})?$/)]],
      estadoSub: ['', Validators.required],
      metododepago: ['', Validators.required],
      metododeenvio: ['', Validators.required],
      descuento: ['', Validators.required],
      usocodigo: ['', Validators.required],
      compraranteriores: ['', Validators.required],
      metodopagopreferido: ['', Validators.required]
      // Puedes agregar más campos según sea necesario
    });


  }
  form!: FormGroup;
  generos = ['Male', 'Female'];
  articulos = ['Blouse', 'Sweater', 'Jeans', 'Sandals', 'Sneakers', 'Shirt', 'Shorts', 'Coat', 'Handbag', 'Shoes', 'Dress', 'Skirt', 'Sunglasses', 'Pants', 'Jacket', 'Hoodie', 'Jewelry', 'T-shirt', 'Scarf', 'Hat', 'Socks', 'Backpack', 'Belt', 'Boots', 'Gloves'];
  categorias = ['Clothing', 'Footwear', 'Outerwear', 'Accessories'];
  ubicaciones = ['Kentucky', 'Maine', 'Massachusetts', 'Rhode Island', 'Oregon', 'Wyoming', 'Montana', 'Louisiana', 'West Virginia', 'Missouri', 'Arkansas', 'Hawaii', 'Delaware', 'New Hampshire', 'New York', 'Alabama', 'Mississippi', 'North Carolina', 'California', 'Oklahoma', 'Florida', 'Texas', 'Nevada', 'Kansas', 'Colorado', 'North Dakota', 'Illinois', 'Indiana', 'Arizona', 'Alaska', 'Tennessee', 'Ohio', 'New Jersey', 'Maryland', 'Vermont', 'New Mexico', 'South Carolina', 'Idaho', 'Pennsylvania', 'Connecticut', 'Utah', 'Virginia', 'Georgia', 'Nebraska', 'Iowa', 'South Dakota', 'Minnesota', 'Washington', 'Wisconsin', 'Michigan'];

  tamanos = ['L', 'S', 'M', 'XL'];
  colores = ['Gray', 'Maroon', 'Turquoise', 'White', 'Charcoal', 'Silver', 'Pink', 'Purple', 'Olive', 'Gold', 'Violet', 'Teal', 'Lavender', 'Black', 'Green', 'Peach', 'Red', 'Cyan', 'Brown', 'Beige', 'Orange', 'Indigo', 'Yellow', 'Magenta', 'Blue'];
  temporadas = ['Winter', 'Spring', 'Summer', 'Fall'];
  estadosSub = ['Yes', 'No'];
  metodosPago = ['Credit Card', 'Bank Transfer', 'Cash', 'PayPal', 'Venmo', 'Debit Card'];
  metodosEnvio = ['Express', 'Free Shipping', 'Next Day Air', 'Standard', '2-Day Shipping', 'Store Pickup'];
  descuentos = ['Yes', 'No'];
  usosCodigo = ['Yes', 'No'];
  metodosPagoPreferidos = ['Venmo', 'Cash', 'Credit Card', 'PayPal', 'Bank Transfer', 'Debit Card'];
  get calificacionControl() {
    return this.form.get('calificacion');
  }

  openPredictionDialog(prediction: string): void {
    this.dialog.open(PredictionDialogComponent, {
      panelClass: 'mi-dialogo-estilizado',  data: { prediction },// Clase para el cuadro de diálogo
    });
    this.form.patchValue({
      edad: '',
      genero: '',
      articulo: '',
      categoria: '',
      precio: '',
      ubicacion: '',
      tamano: '',
      color: '',
      temporada: '',
      calificacion: '',
      estadoSub: '',
      metododepago: '',
      metododeenvio: '',
      descuento: '',
      usocodigo: '',
      compraranteriores: '',
      metodopagopreferido: ''
    });
    
    // Conservar el valor inicial de iduser
    this.form.get('iduser')!.setValue(this.initialIdUser);
  }
  onSubmit() {


   if (this.form.valid) {
      const data = this.form.value
      console.log(this.form.value);
      this.http.Predeccir(data).subscribe((response) => {


        if (response) {
          this.openPredictionDialog(response.prediccion);
        } else {

        }
      })
      // Puedes realizar la lógica adicional según tus necesidades
    } else {
      alert("Todos Los Campos Son Requeridos ");
   }
  }

}
