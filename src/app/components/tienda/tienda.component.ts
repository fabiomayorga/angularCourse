import { Component } from '@angular/core';

//@ es un decorador --- parametros del componente
@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'] //debe ser un array
})

//se definen las propiedades de la clase
export class TiendaComponent{
    public titulo;

    //valores iniciales
    constructor(){
        this.titulo = "Tienda";
    }
}
