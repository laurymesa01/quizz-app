import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Quizz } from '../models/quizz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private http = inject(HttpClient);
  private url = 'https://apiquizz-2.onrender.com';

  constructor() { }

  getQuizzes(){
    return this.http.get<Quizz[]>(`${this.url}/quizzes`);
  }

  getQuizzByTitle(title: string){
    const params = new HttpParams().set('title', title);
    return this.http.get<Quizz[]>(`${this.url}/quizzes`, { params });
  }
}
