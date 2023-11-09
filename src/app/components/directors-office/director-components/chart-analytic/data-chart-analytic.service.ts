import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { StatusApplication, StatusPayment } from '../add-item-modal/model-interface';
@Injectable({
  providedIn: 'root'
})
export class DataChartAnalyticService {
  constructor(private http: HttpClient) {}
  
  sendDataToServer() {
    const url = 'http://127.0.0.1:8000/director/analytic/getDataAnalytic'; 
    return this.http.get(url);
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

