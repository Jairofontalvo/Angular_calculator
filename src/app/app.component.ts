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
  numDec = false;
  initial = '';

  clickNumber(n: string) {
      console.log(n);
      if (this.numState) {
          this.numCurrent = n;
          this.numState = false;
      } else {
          this.numCurrent === '0' ? this.numCurrent = n : this.numCurrent += n;
      }
  }

  insertDecimal() {
      if (!this.numCurrent.includes('.')) {
          this.numCurrent += '.';
      } else {
          if (this.numDec) {
              this.numCurrent += '.';
              this.numDec = false;
          }
      }
  }

  getOperation(o: string) {
      if (o == "=") {
          const x = this.numCurrent.charAt(this.numCurrent.length - 1);
          var re = new RegExp("([0-9])");

          if (re.test(x)) {
              const result = eval(this.numCurrent);
              this.initial = this.numCurrent;
              this.numCurrent = String(result);
          } else {
              alert("error");
              this.clean();
          }

      }else{
          this.numCurrent += o
          this.numDec = true;
      }
  }

  clean() {
      this.numCurrent = '0';
      this.initial = '';
      this.numState = false;
  }
}
