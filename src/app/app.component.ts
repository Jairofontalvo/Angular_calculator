import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Calculadora';
  numCurrent = '0';
  numState = false;
  decState = false;
  initial = '';

  //Metodo para leer la tecla que se pulsa en la calculadora
  clickNumber( n ) {
      if (this.numCurrent === '0') {
        this.numCurrent = n
      } else {
          this.numCurrent += n;
      }
  }

  //Metodo para insertar punto decimal y validar la no repeticion
  insertDecimal() {
      if (!this.numCurrent.includes('.')) {
          this.numCurrent += '.';
          this.decState = false;
      } else {
          if (this.decState) {
              this.numCurrent += '.';
              this.decState = false;
          }
      }
  }

  //Metodo leer la operacion que se pulsa en la calculadora
  getOperation( o ) {
      if ( o == "=" ) {
        // en const x capturo el ultimo x numero ingresado
          const x = this.numCurrent.charAt( this.numCurrent.length - 1 );
          var re = new RegExp("([0-9])");

          //resultado del test donde ultimo x numero es evaluado
          if ( re.test(x) ) {
              const result = eval(this.numCurrent);
              this.initial = this.numCurrent;
              this.numCurrent = String(result);
          } else {
              //Si lo presionado no fue un numero, se alerta de un error
              alert("Error! Enter a second number after the operation");
              this.clean();
          }

      } else {
          //Si operacion no es '='. Concatene segun la operacion y cambie el estado de decState a true
            var numUlt = this.numCurrent.charAt( this.numCurrent.length - 1 );

            if( !(numUlt == "+" || numUlt == "-" || numUlt == "*" || numUlt == "/" ) ) {
                this.numCurrent += o;
                this.decState = true;
            }
      }
  }

  //Metodo para restablecer las variables a su estado inicial
  clean() {
      this.numCurrent = '0';
      this.initial = '';
      this.numState = false;
      this.decState = false;
  }
}
