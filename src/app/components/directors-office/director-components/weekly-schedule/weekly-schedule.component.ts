import { Component, OnInit } from '@angular/core';
import { WeeklyScheduleService } from './weekly-schedule.service';
import { WorkingWithDates } from './dates';

@Component({
  selector: 'app-weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.css']
})

export class WeeklyScheduleComponent implements OnInit {

  displayedData: any = [];
  daysOfWeek: string[] = [];

  constructor(private weeklyScheduleService: WeeklyScheduleService,private workingWithDates:WorkingWithDates) { }

  ngOnInit(): void {
    this.daysOfWeek.splice(0, this.daysOfWeek.length);
    let currentWeek = this.workingWithDates.currentWeek()
    this.filterDataByDate(this.workingWithDates.formatDate(currentWeek.monday), this.workingWithDates.formatDate(currentWeek.sunday))
    this.daysOfWeek = this.workingWithDates.filterdaysOfWeek(currentWeek.monday);
    console.log("this.daysOfWeek", this.daysOfWeek)
  }

  filterDataByDate(date1: string, date2: string): any {
    this.weeklyScheduleService.sendDataToServer({ "startdate": date1, "enddate": date2 }).subscribe((response) => {
      console.log('Ответ сервера response:', response);
      this.displayedData = response
      return response
    });
  }

  previousWeek() {
    let week = this.workingWithDates.viewLastWeek(this.daysOfWeek);
    if (week) {
      const formattedFirstDate = week.firstDate
      const formattedLastDate = week.lastDate
      console.log("formattedFirstDate", formattedFirstDate)
      this.daysOfWeek.splice(0, this.daysOfWeek.length);
      this.daysOfWeek = this.workingWithDates.filterdaysOfWeek(week.firstDate);
      const formattedDate = `${formattedFirstDate.getDate().toString().padStart(2, '0')}.${(formattedFirstDate.getMonth() + 1).toString().padStart(2, '0')}.${formattedFirstDate.getFullYear()}`;
      const formattedDate2 = `${formattedLastDate.getDate().toString().padStart(2, '0')}.${(formattedLastDate.getMonth() + 1).toString().padStart(2, '0')}.${formattedLastDate.getFullYear()}`;
      this.filterDataByDate(formattedDate,formattedDate2)
    }
  }


  nextWeek() {
    let week = this.workingWithDates.viewNextWeek(this.daysOfWeek);
    if (week) {
      const formattedFirstDate = week.firstDate
      const formattedLastDate = week.lastDate
      console.log("formattedFirstDate", formattedFirstDate)
      this.daysOfWeek.splice(0, this.daysOfWeek.length);
      this.daysOfWeek = this.workingWithDates.filterdaysOfWeek(week.firstDate);
      const formattedDate = `${formattedFirstDate.getDate().toString().padStart(2, '0')}.${(formattedFirstDate.getMonth() + 1).toString().padStart(2, '0')}.${formattedFirstDate.getFullYear()}`;
      const formattedDate2 = `${formattedLastDate.getDate().toString().padStart(2, '0')}.${(formattedLastDate.getMonth() + 1).toString().padStart(2, '0')}.${formattedLastDate.getFullYear()}`;

      this.filterDataByDate(formattedDate,formattedDate2)
    }
  }
}
