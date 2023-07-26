import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoEditaComponent } from './components/nuevo-edita/nuevo-edita.component';


@NgModule({
  declarations: [
    ListadoComponent,
    TablaComponent,
    NuevoEditaComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductoModule { }
