import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'act-calculator',
    template: `
        <h2> {{biography}} </h2>
        <h2> {{birthday}} </h2>
    `
  })
  export class ActComponent {
    public biography: string;
    public birthday: string;
    constructor(){
        this.biography = "Mi nombre es Jairo Santiago Fontalvo Martinez, soy de la ciudad de Valledupar, Estudio Ingenieria de Sistemas en la Universidad de la Costa";
        this.birthday = "Tengo 27 años y faltan "+ moment().diff(moment().format('2021-02-26'),'days')*-1 + " dias para mi cumpleaños";

        console.log("Componente act-pena cargado !!");
    }
  }
