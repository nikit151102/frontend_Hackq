import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, registration, resetpassword } from './connect-interface';

@Injectable({
    providedIn: 'root',
})

export class ConnectService {

    constructor(private http: HttpClient) { }

    sendlogin(data: login) {
        return this.http.post<login>('http://127.0.0.1:8000/personal_account/user', data);
    }

    sendregistration(data: registration) {
        return this.http.post<registration>('http://127.0.0.1:8000/personal_account/registration', data);
    }

    sendresetpassword(data: resetpassword) {
        return this.http.post<resetpassword>('http://127.0.0.1:8000/personal_account/resetpassword', data);
    }
}
