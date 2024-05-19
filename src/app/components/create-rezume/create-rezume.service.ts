import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateRezumeService {

  constructor(private http: HttpClient) { }

  islogin: boolean = true;

  sendtags() {
    return this.http.get('http://31.128.39.73:8080/tags?page=0&size=100&types=SKILL&avStatuses=AVAILABLE&avStatuses=VERIFICATION&avStatuses=UNAVAILABLE');
  }
  postValue(data: any){
    return this.http.post('http://31.128.39.73:8080/resumes', data);
  }
}