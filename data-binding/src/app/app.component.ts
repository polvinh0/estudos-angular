import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
    String Interpolation: utilizar valores que propiedades possuem para mostra-los para o usuario.
  */
 /**
  * property binding: utilizar valores de propiedades para 
  * atribuilos a atributos html
  */
 /**
  * event biding: utilizado para ouvir eventos da DOM dentro do Angular
  */
  
  title = 'Angular é muito bom!';
  tipoInput: string = 'password'
  n1:number = 0
  n2:number = 0
  valor:number = 0;
  somar(x: number, y: number) {
    return x + y
  }

  // mudarTipoDoInput(): void{
  //   if(this.tipoInput =='password') {
  //     this.tipoInput = 'text'
  //   } else {
  //     this.tipoInput = 'password'
  //   }
  // }
  maisUm(): void{
      this.valor += 1;
    }
    menosUm(): number{
    return this.valor -= 1;
  }

}
