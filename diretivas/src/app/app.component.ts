import { Component } from '@angular/core';
import { Produto } from './interfaces/produtos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
    nome: string = ''
    imagem: string = ''
    preco: number = 0
    estoque: number = 0
    descricao: string = ''

    produtos: Produto [] = []

    adicionarProduto(evento: any): void{
      console.log(evento)
      evento.preventDefault()
      /**
       * preventDefalut() faz com que o comportamento padrão
       * de um elemento HTML seja anulado.
       */
      evento.stopPropagation()
      /**
       * stopPropagation() evita com que a emissão do evento
       * afete outros elementos HTML.
       */
      this.produtos.push({
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco })
}
    
  }
  
  // p: Produto = {
  //   nome: 'Xbox',
  //   descricao: 'Console da Microsoft',
  //   estoque: 250,
  //   preco: 4000,
  //   imagem: 'https://http2.mlstatic.com/D_NQ_NP_627914-MLA40655732617_022020-O.webp',
  // }


