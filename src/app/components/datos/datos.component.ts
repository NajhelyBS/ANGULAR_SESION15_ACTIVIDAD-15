import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
name = "";
apellidos = "";
carrera = "";

registros:any = [{
  nombre:"",
  apellidos:"",
  carrera:"",
}];

@Output() childButtonEvent = new EventEmitter();

constructor() { }

insertarDatos(){
  this.registros = [{
    nombre: this.name,
    apellidos: this.apellidos,
    carrera: this.carrera,
  }];

  this.childButtonEvent.emit(this.registros);
  
  }
}
