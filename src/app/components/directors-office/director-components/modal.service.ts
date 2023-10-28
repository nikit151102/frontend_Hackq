import { Injectable } from '@angular/core';
//import {modelADD} from './add-item-modal/model-interface'
import { HttpClient } from '@angular/common/http';
import { interval,Subscription  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
 showDialog: boolean = false

 constructor(private http: HttpClient) {}

 sendDataToServer(data: any){
    return this.http.post<any>('http://localhost:3000/tableview/additem', data); 
 }
}
