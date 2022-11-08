import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Moviedbrepo } from './interfaces/Moviedbrepo';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MovieForm: FormGroup = this.fb.group({
  filme: ['', [Validators.required]]
  })

  movie!: Moviedbrepo

  constructor(
    private fb: FormBuilder,
    private movieservice: MovieService
  ) {}

}
