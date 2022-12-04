import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../interfaces/menu';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],
})
export class SolicitudComponent implements OnInit {
  constructor() {}

  menuList: Menu[] = [];

  ngOnInit(): void {}

  @Output() data: EventEmitter<Menu[]> = new EventEmitter<Menu[]>();

  getNewMenu(event: any) {
    let obj_menu: Menu = {
      nombre: event.nombre,
      precio: event.precio,
      descripcion: event.descripcion,
      imagen: event.imagen,
    };
    let menulist = [...this.menuList, obj_menu];
    this.menuList = menulist;
    this.data.emit(this.menuList);
  }
}
