import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly baseURL: string = `https://api.themoviedb.org/3/search/movie?api_key=c0a4d816b573edf94c145df4879416c2&query=${busca}`


  constructor(
    private http: HttpClient
  ) { }

  
}
