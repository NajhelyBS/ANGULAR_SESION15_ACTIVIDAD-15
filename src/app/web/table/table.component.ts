import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

@Input()  registros: any = [{
  nombre:"Najhely",
  apellidos:"Banda",
  carrera:"Psicología"
  },
];


receivedMessageHandler(p:any) {
  
  this.registros = this.registros.concat(p);
}

delete(element:any){

  var delBtn = confirm(" Do you want to delete ?");
    
    if(delBtn == true){
      this.registros.forEach((value: any, index: any) => {
        if (value == element) {
          this.registros.splice(index, 1);
        }
      });
    }
}

}
