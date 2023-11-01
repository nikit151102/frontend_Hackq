import { Component, OnInit } from '@angular/core';
import { CanbanCurrentDayService } from './canban-current-day.service';

@Component({
  selector: 'app-weekly-schedule',
  templateUrl: './canban-current-daycomponent.html',
  styleUrls: ['./canban-current-day.component.css']
})

export class CanbanCurrentDayComponent implements OnInit {

  displayedData: any = [];

  constructor(private canbanCurrentDayService: CanbanCurrentDayService) { }

  ngOnInit(): void {
    this.filterDataByDate();
  }

  filterDataByDate(): any {
    this.canbanCurrentDayService.sendDataToServer().subscribe((response) => {
      console.log('Ответ сервера response:', response);
      this.displayedData = response; 
      console.log("{{ typeof displayedData }}", typeof this.displayedData );
    });
  }
  
  modalOpen:boolean = false;
  someValue:string = ''
  viewEditItem(id:string){
    console.log("id",id);
    this.someValue = id;
    this.modalOpen = true;
  }

}
