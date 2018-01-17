import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
    this.subscription = this.regresaObs()
    .subscribe(
      num => console.log(`Subs ${num}`),
      err => console.log(`error ${err}`),
      () => console.log('El observador termiano')
    );
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
  ngOnInit() {
  }
  regresaObs(): Observable<any> {

    return  new Observable( observer => {
      
      let contador = 0;

      let intervalor = setInterval( () => {

        contador += 1;

        let salida = {
          valor: contador
        };

        observer.next(salida);

       /* if ( contador === 3) {
          clearInterval(intervalor);

          observer.complete();
        }*/
       /* if ( contador === 2) {
          //clearInterval(intervalor);
          observer.error('Auxilio');
        }*/

      }, 500);

    } ).retry(2).map( (res: any) => {
          return res.valor;
        }).filter (  (valor, index) => {
          //console.log( `Filter ${valor}, su index ${index}`);
          if ( (valor % 2) === 1) {
            return true;
          }else {
            return false;
          }
        });
  }
}
