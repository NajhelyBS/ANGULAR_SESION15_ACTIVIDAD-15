import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosComponent } from './datos/datos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DatosComponent
  ]
})
export class ComponentsModule { }
