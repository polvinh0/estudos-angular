import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cadastrarPonto: FormGroup

  constructor(fb: FormBuilder) {
    this.cadastrarPonto = fb.group({
      nome: [""],
      estado: [""],
      cidade: [""],
      comeca: [""],
      termina: ["",]
    })
   }

  ngOnInit(): void {
  }

}
