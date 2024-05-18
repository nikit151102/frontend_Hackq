import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }
    
  islogin:boolean = true;

  sendResumes() {
      return this.http.get('http://87.249.49.250:8080/resumes');
  }
}
