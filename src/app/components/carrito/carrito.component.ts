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

  @Input() total: number = 0;

  ngOnInit(): void {}
}
