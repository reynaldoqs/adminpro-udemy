import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      (msj) => console.log(`terminó ${msj}`)
    ).catch( error => console.log(`Error en la promesa ${error}`));
  }

  ngOnInit() {
  }
  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {

      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);

    });
  }
}
