import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports:[
    TableComponent
  ]
})
export class WebModule { }
