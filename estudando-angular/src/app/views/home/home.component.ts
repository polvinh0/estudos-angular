import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor() {
    setTimeout(() => {
      this.objStyle['color'] = 'blue';
    }, 3000)
   }

  public user: string = 'Daniel Assis'

  public image: any = {
    src: "https://avatars.githubusercontent.com/u/109036998?v=4",
    alt: `Foto de ${this.user}`
  }

  public clicar():void {
    alert("Clicou !")
  }

  public objStyle: any = {
    'font-size': '50px',
    'color': 'red'
}

  public isError: boolean = false
  public classCor: string = 'red'

  public sapinho: boolean = true
  // public sapinho2: boolean = false
  public mudarSapinho():void {

    this.sapinho = !this.sapinho
    // this.sapinho2 = !this.sapinho2

  }

  public peixes: string[] = [
    "tubarão",
    "peixe2",
    "peixe 3",
    "polvo",
    "cavalo marinho",
  ]

  public textoPipe: string = "Texto de Exemplo (pipe)"
  public numberPipe: number = 35.3334;
  public nowPipe = new Date()
  public objPipe = {
    nome: 'Daniel Assis',
    idade: 30,
    area: 'Tecnologia'
  }
  }
