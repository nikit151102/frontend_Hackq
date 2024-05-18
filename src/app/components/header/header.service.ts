import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }
    
  islogin:boolean = true;

  getCounts() {
      return this.http.get<any>('http://87.249.49.250:8080/users/signup');
  }

}
