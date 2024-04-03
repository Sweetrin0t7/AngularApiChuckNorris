import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }

  getJokes(){
    return this.http.get(this.apiUrl)
  }
}
