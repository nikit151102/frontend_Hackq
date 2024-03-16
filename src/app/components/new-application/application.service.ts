import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  sendApplicationData(formData: any) {
    return this.http.put('http://127.0.0.1:8000/newClientApplication/request', formData);
  }
  
}
