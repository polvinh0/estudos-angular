import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  nomeCartao: string = ''
  nome(event: KeyboardEvent) {
    this.nomeCartao = (<HTMLInputElement>event.target).value
  }
  numeroCartao: string = ''
  numero(event: KeyboardEvent) {
    this.numeroCartao = (<HTMLInputElement>event.target).value
  }
  mesCartao: string = ''
  mes(event: KeyboardEvent) {
    this.mesCartao = (<HTMLInputElement>event.target).value
  }
  anoCartao: string = ''
  ano(event: KeyboardEvent) {
    this.anoCartao = (<HTMLInputElement>event.target).value
  }
  cvcCartao: string = ''
  cvc(event: KeyboardEvent) {
    this.cvcCartao = (<HTMLInputElement>event.target).value
  }


  constructor() { }

  ngOnInit(): void {
  }

}
