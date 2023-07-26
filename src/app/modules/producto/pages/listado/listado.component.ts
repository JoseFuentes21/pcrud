import { Component, OnInit } from '@angular/core';
import { Producto } from '@modules/producto/model/producto-modelo';
import { ProductoService } from '@modules/producto/services/producto.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  //
  parametroBuscar:string='';
  productos:Array<any>=[];

  //para la paginacion
  page:number = 0;
  size:number =5;
  totalElement: number = 0;//total de registros
  isFirst: boolean = false;//activar el inicio
  isLast: boolean = false; //activar el final
  totalPages: Array<number> = []; //todas las páginas

  constructor(private productoService: ProductoService,) { }


  ngOnInit(): void {
    this.mostrarProductos();
  }

  mostrarProductos(){
    this.productoService.obtenerProductos(this.page, this.size).subscribe( resp => {
      this.productos = resp.content;
        console.log(this.productos);
        this.isFirst = resp.first;
        this.isLast = resp.last;
        this.totalElement = resp.totalElements;
        this.totalPages = resp.totalElements;
        this.totalPages = new Array(resp['totalPages']);
    });
  }
  /*métodos de la paginación*/
  setPage(page: number): void{
    this.page = page;
    this.mostrarProductos();
  }

  setSize(num:number){
    this.size=num;
    this.mostrarProductos();
  }

  retroceder(){
    if(!this.isFirst){
      this.page--; //para navegar entre las paginas
      this.mostrarProductos();
    }
    return this.page;
  }
  adelante(){
    if(!this.isLast){
      this.page++;
      this.mostrarProductos();
    }
    return this.page;
  }
  //mas metodos
  buscar(){
    this.productoService.buscarProducto(this.parametroBuscar).subscribe( resp => {
      this.productos = resp;
    });
  }

}
