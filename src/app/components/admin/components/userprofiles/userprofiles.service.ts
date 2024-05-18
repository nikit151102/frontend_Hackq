import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofilesService {

  constructor(private http: HttpClient) { }
    
  islogin:boolean = true;

  sendUsers() {
      return this.http.get('http://87.249.49.250:8080/users?page=0&size=10000');
  }
}
