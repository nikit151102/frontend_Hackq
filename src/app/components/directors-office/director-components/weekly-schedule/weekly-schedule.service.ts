import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription  } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class WeeklyScheduleService {
  constructor(private http: HttpClient) {}
  
  sendDataToServer(values:dates) {
    const url = 'http://127.0.0.1:8000/director/canban/getDataCanban'; 
    return this.http.post(url,values);
  }
  
}
interface dates{"startdate":string,"enddate":string}