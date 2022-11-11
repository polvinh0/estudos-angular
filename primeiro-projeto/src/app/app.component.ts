import { Component } from '@angular/core';
// import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim'
  userData = {
    email: 'joaquim@email.com',
    cargo: 'Admin'
  }
  title = 'primeiro-projeto';
}
