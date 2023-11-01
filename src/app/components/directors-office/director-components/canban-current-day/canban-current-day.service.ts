import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CanbanCurrentDayService {

  constructor(private http: HttpClient) {}
  
  sendDataToServer() {
    const url = 'http://127.0.0.1:8000/director/kanbanCurrentDay/getDataCanbanCurrentDay'; 
    return this.http.get(url);
  }
  
}
