import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';




@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txt') txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onChange(newEvent: number) {

    //let elementoHtml = document.getElementsByName('porcentaje')[0];


    if ( newEvent >= 100) {
      this.porcentaje = 100;
    }else if ( newEvent <= 0) {
      this.porcentaje = 0;
    }else {
      this.porcentaje = newEvent;
    }

    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);

  }
  cambiarValor(valor: number) {
    if ( this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }
    if ( this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }
}
