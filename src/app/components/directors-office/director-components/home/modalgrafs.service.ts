import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalgrafsService {
  
  constructor(private http: HttpClient) {}
  viewline(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/director/home/statisticsForTheWeek');
  }
  getDoughnutData(): Observable<any> {
    return this.http.get('http://localhost:8000/director/home/todaydoughnut');
  }
}
