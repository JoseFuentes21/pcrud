import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedidaService {

  private base_url = 'http://localhost:8080/api';
  constructor(private http:HttpClient) { }

  public obtenerMedidas():Observable<any>{
    return this.http.get<any>(`${this.base_url}/unidadmedida/lista`);
  }

}
