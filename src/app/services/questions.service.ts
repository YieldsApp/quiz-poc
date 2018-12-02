import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  answers: {questionId: number, answerId: number}[]=[];

  baseUrl: '';
  constructor(private http: HttpClient) { }

    
    // Get all posts from the API
    getFirstQuestion() : Observable<Question>  {
      return this.http.get<Question>(this.baseUrl+ '/api/Question/0');
    }

    addAnswer(question: Question,answer: Answer){

      if(_.find(this.answers,{questionId: question.id})) return;
      this.answers.push({questionId: question.id, answerId:answer.id });
    }
    // Get all posts from the API
    getNextQuestion(question: Question,answer: Answer) {
      return this.http.get(this.baseUrl+  `/api/nextQuestion/${question.id}/${answer.id}`);
    }

    calculate():  Observable<{ name: string, probability:number}> {
       return this.http.post<{ name: string, probability:number}>(this.baseUrl+  '/api/results',this.answers);
    }

}
