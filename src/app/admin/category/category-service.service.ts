import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  headers = new HttpHeaders;

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers
  }
  constructor(private http: HttpClient) {
    this.headers = this.getHeaders();

  }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      "http://w36303-16/examwebapp/api/Categories", { headers: this.headers }
    );
  }

  postCategory(category : Category) : Observable<Category>{
    debugger
    return this.http.post<Category>(
      "http://w36303-16/examwebapp/api/Categories" , category , { headers: this.headers } 
      )
  }

  deleteCategory(id : number) : Observable<Category>{
    debugger
    return this.http.delete<Category>(
      "http://w36303-16/examwebapp/api/Categories/"+id  , { headers: this.headers } 
      )
  }

}
