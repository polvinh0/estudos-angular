import { Component } from '@angular/core';
import { Produto } from './interfaces/produtos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  p: Produto = {
    nome: 'Xbox',
    descricao: 'Console da Microsoft',
    estoque: 250,
    preco: 4000,
    imagem: 'https://http2.mlstatic.com/D_NQ_NP_627914-MLA40655732617_022020-O.webp',
  }
}
