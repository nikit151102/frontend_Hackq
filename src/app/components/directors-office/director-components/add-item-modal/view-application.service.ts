import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval,Observable,Subscription  } from 'rxjs';
import { StatusApplication, StatusPayment } from './model-interface';

@Injectable({
  providedIn: 'root',
})

export class ViewApplicationService {
  constructor(private http: HttpClient) {}

  getApplication(id:string): Observable<any[]> {
    console.log("id",id)
    const url = 'http://127.0.0.1:8000/director/viewApplication/getApplication'; 
    return this.http.post<any[]>(url,{"idRequest": id});
  }

  getStatusApplication(): Observable<StatusApplication[]> {
    const url = 'http://127.0.0.1:8000/director/viewApplication/getStatusApplication'; 
    return this.http.get<StatusApplication[]>(url);
  }

  getStatusPayment(): Observable<StatusPayment[]> {
    const url = 'http://127.0.0.1:8000/director/viewApplication/getStatusPayment'; 
    return this.http.get<StatusPayment[]>(url);
  }
}

