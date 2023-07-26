import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadMedida } from '@modules/producto/model/unidadmedida-model';
import { MedidaService } from '@modules/producto/services/medida.service';

@Component({
  selector: 'app-nuevo-edita',
  templateUrl: './nuevo-edita.component.html',
  styleUrls: ['./nuevo-edita.component.scss']
})
export class NuevoEditaComponent implements OnInit {
  @Input() leyenda:string='Nuevo';

  formProducto!: FormGroup;
  uniMedidas:UnidadMedida[]=[];

  constructor(private fb: FormBuilder, private medidaService: MedidaService) { }

  ngOnInit(): void {
    this.formProducto = this.iniciarFormulario();
    this.llenaComboxMedidas();
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      nombre: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      precio: ['',[Validators.required]],
      tipoBebida: ['',[Validators.required]],
      unidadMedida: [' ',[Validators.required,]]
    });
  }

  llenaComboxMedidas(){
    this.medidaService.obtenerMedidas().subscribe( resp => {
      this.uniMedidas = resp;
    });
  }

  esCampoValido(campo: string){
    const validarCampo = this.formProducto.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
     ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }

  guardar(){
    if(this.formProducto.valid){

    }else {

    }
  }
  mostrar(){

  }



}
