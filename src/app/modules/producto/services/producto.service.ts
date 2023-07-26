import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto-modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private base_url: string = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  public obtenerProductos(page:number, size:number):Observable<any>{
    return this.http.get<any>(`${this.base_url}/producto?page=${page}&size=${size}`);
  }

  buscarProducto(termino:string):Observable<Producto[]>{
    if(termino.length>1){
      return this.http.get<Producto[]>(`${this.base_url}/producto/busca/${termino}`);
    }else{
      return this.http.get<Producto[]>(`${this.base_url}/producto?page=0&size=5`);
    }
  }

}
