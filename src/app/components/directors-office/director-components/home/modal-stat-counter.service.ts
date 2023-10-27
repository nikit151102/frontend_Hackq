import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalStatCounterService {

  constructor(private http: HttpClient) { }

  viewStat(): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3000/homechart/withdrawalofcostsandprofits', {});
  }
}
