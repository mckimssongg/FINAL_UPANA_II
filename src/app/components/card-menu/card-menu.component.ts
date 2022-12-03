import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css'],
})
export class CardMenuComponent implements OnInit {
  @Input() nombre: string = '';
  @Input() precio: number = 0;
  @Input() descripcion: string = '';
  @Input() imagen: string = '';

  ngOnInit(): void {}
}
