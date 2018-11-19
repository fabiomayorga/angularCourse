import { Component } from '@angular/core';

//@ es un decorador --- parametros del componente
@Component({
    selector: 'Parques',
    templateUrl: './parques.component.html',

})

//se definen las propiedades de la clase
export class ParquesComponent{
    public nombre : string; // es de tipo public, llamado nombre y de TIPO DE DATO string
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;

    //valores iniciales
    constructor(){
        this.nombre = " Para caballos ";
        this.metros = 450;
        this.vegetacion = "Alta";
        this.abierto = true;
    }
}
