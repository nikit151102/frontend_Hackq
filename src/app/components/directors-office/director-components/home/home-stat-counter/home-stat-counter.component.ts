import { Component, OnInit } from '@angular/core';
import { ModalStatCounterService } from '../modal-stat-counter.service';

@Component({
  selector: 'app-home-stat-counter',
  templateUrl: './home-stat-counter.component.html',
  styleUrls: ['./home-stat-counter.component.css']
})
export class HomeStatCounterComponent implements OnInit {
  
  constructor(private modalStatCounterService:ModalStatCounterService) { }
  Counter: any[] = [] 

  ngOnInit(): void {
  this.setStat()
  }
  setStat(){
    this.modalStatCounterService.viewStat().subscribe(
      (value: any) => {
        this.Counter = value
        console.log(this.Counter)
      },
      (error) => {
        console.error('Error fetching data for doughnut chart:', error);
      }
    );
  }

}