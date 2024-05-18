import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  constructor(private http: HttpClient) { }

  islogin: boolean = true;

  sendtags() {
    return this.http.get('http://87.249.49.250:8080/tags?page=0&size=100&types=SKILL&avStatuses=AVAILABLE&avStatuses=VERIFICATION&avStatuses=UNAVAILABLE');
  }
}