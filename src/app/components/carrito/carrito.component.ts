import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  @Input() dataSourceProductos: any[] = [];
  displayedColumns: string[] = ['name', 'price', 'quantity'];
  constructor() {}

  ngOnInit(): void {}
}
