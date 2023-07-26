import { UnidadMedida } from "./unidadmedida-model";

export class Producto{
  constructor(
    public idProducto:   number,
    public nombre:       string,
    public descripcion:  string,
    public tipoBebida:   string,
    public precio:       number,
    public unidadMedida: UnidadMedida
  ){}
}
