import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  distancia: number = null;
  consumo: number = null;
  gastoreais: number = 0;
  gasosa: number =null;

  constructor() { }

  calcularGasosa() {
    let conta1 = this.distancia / this.consumo;
    this.gastoreais = conta1 * this.gasosa;
    
  }
}

