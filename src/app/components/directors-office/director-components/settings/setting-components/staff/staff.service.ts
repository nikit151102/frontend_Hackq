import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  getDataUsers(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/director/setting/getDataUsers');
  }
}
