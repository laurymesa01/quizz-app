import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Quizz } from '../models/quizz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private http = inject(HttpClient);
  private url = 'http://localhost:3000/quizzes';

  constructor() { }

  getQuizzes(){
    return this.http.get<Quizz[]>(this.url);
  }
}
