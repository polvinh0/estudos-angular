import { Component } from '@angular/core';
import { Livro } from './interfaces/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudos';

capa: string = ''
titulo: string = ''
autor: string = ''
paginas: string = ''
nota: string = ''

listaLivros: Livro [] = []

adicionarLivro(){
  this.listaLivros.push({
    titulo: this.titulo,
    capa: this.capa,
    autor: this.autor,
    paginas: this.paginas,
    nota: this.nota,
  })

    this.titulo = ''
    this.capa = ''
    this.autor = ''
    this.paginas = ''
    this.nota = ''

}

excluirLivro(livro: Livro){
  let index = this.listaLivros.indexOf(livro)
  this.listaLivros.splice(index)

}
}

