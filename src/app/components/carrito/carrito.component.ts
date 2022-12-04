import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  @Input() dataSource: any[] = [
    {
      nombre: 'Cafe',
      precio: 10,
      cantidad: 2,
    },
  ];
  displayedColumns: string[] = ['nombre', 'precio', 'cantidad'];
  constructor() {}

  ngOnInit(): void {
    console.log('dataSource', this.dataSource);
  }
}
