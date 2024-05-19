import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
    

  getvacancies() {
      return this.http.get<any>('http://31.128.39.73:8080/vacancies?page=0&size=1000');
  }
}
