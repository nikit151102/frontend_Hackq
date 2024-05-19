import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobOpeningsService {

  constructor(private http: HttpClient) { }

  sendData(){
    return this.http.get(`http://31.128.39.73:8080/vacancies`);
  }
  deleteItem(vacancyid: number){
    return this.http.delete(`http://31.128.39.73:8080/vacancies/${vacancyid}`);
  }
  
}
