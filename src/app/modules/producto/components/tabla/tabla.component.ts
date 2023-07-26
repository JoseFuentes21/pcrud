import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '@modules/producto/model/producto-modelo';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() producto:Producto[]=[];
  cards:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
