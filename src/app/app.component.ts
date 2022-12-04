import { Component, Input } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PROGRAMII_FINAL_UPANAA';
  dataSourceProductos: any[] = [];
  total_compra: number = 0;
  getListaProductos(event: any) {
    let lista_data = [...event];
    let lista_productos_por_cantidad = [];
    let lista_valida = [];
    for (let i = 0; i < lista_data.length; i++) {
      if (lista_valida.indexOf(lista_data[i].nombre) == -1) {
        let count = 0;
        for (let j = 0; j < lista_data.length; j++) {
          if (lista_data[i].nombre === lista_data[j].nombre) {
            count++;
          }
        }
        lista_valida.push(lista_data[i].nombre);
        lista_productos_por_cantidad.push({
          nombre: lista_data[i].nombre,
          precio: lista_data[i].precio,
          cantidad: count,
        });
      }
    }
    this.dataSourceProductos = lista_productos_por_cantidad;
    this.total_compra = 0;
    for (let i = 0; i < this.dataSourceProductos.length; i++) {
      this.total_compra +=
        this.dataSourceProductos[i].precio *
        this.dataSourceProductos[i].cantidad;
    }
  }
}
