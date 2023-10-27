import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalgrafsService {
  
  constructor(private http: HttpClient) {}
  viewline(): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3000/homechart/statisticsForTheWeek', {});
  }
  getDoughnutData(): Observable<any> {
    return this.http.post('http://localhost:3000/homechart/todaydoughnut', {});
  }
}
