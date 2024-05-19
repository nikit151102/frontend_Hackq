import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, registration, resetpassword } from './connect-interface';

@Injectable({
    providedIn: 'root',
})

export class ConnectService {

    constructor(private http: HttpClient) { }
    
    islogin:boolean = true;

    sendlogin(data: login) {
        return this.http.put<login>('http://31.128.39.73:8080/users/signin', data);
    }

    sendregistration(data: any) {
        return this.http.post<any>('http://31.128.39.73:8080/users/signup', data);
    }

    sendresetpassword(data: resetpassword) {
        return this.http.post<resetpassword>('http://31.128.39.73:8000/personal_account/resetpassword', data);
    }
}
