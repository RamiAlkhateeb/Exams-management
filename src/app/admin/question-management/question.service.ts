import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';
import { Answer } from './answer';
import { QuestionVM } from './questionVM';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  headers = new HttpHeaders;

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers
  }
  constructor(private http: HttpClient) {
    this.headers = this.getHeaders();

  }


  getquestions(): Observable<Question[]> {
    return this.http.get<Question[]>(
      "http://w36303-16/examwebapp/api/questions", { headers: this.headers }
    );
  }

  

  postquestion(category : QuestionVM) : Observable<Question>{
    debugger
    return this.http.post<Question>(
      "http://w36303-16/examwebapp/api/questions" , category , { headers: this.headers } 
      )
  }

  deleteCategory(id : number) : Observable<Question>{
    debugger
    return this.http.delete<Question>(
      "http://w36303-16/examwebapp/api/questions/"+id  , { headers: this.headers } 
      )
  }

  getanswers(questionId : number){
    return this.http.get<Answer[]>(
      "http://w36303-16/examwebapp/api/questions/"+questionId , { headers: this.headers } 
    )
  }
  


  postAnswer(category : Answer) : Observable<Answer>{
    debugger
    return this.http.post<Answer>(
      "http://w36303-16/examwebapp/api/answers" , category , { headers: this.headers } 
      )
  }
}
