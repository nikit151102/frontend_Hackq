import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval,Subscription  } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class DataService {
  constructor(private http: HttpClient) {}
  private pollingSubscription: Subscription | undefined;
  
  sendDataToServer() {
    const url = 'http://127.0.0.1:8000/director/table/getDataTable'; 
    return this.http.get(url);
  }
  startPolling(intervalTime: number | null) {
    if(intervalTime !== null){
      this.pollingSubscription = interval(intervalTime).subscribe(() => {
        this.sendDataToServer().subscribe((response) => {
          console.log('Ответ сервера:', response);
        });
      });
    }else{
      this.sendDataToServer().subscribe((response) => {
        console.log('Ответ сервера:', response);
      });
    }
    
  }
  // Метод для отправки POST-запроса для удаления 
  deleteItem(id: number) {
    console.log("number", typeof(id))
    const data:deletes = {
      name: 'удаление',
      idITEM: id
    };
    console.log(JSON.stringify(data))
    return this.http.post<deletes>('http://localhost:3000/Directors/delete', data); 
  }
  
}

interface deletes {
  name: string;
  idITEM: number;
}