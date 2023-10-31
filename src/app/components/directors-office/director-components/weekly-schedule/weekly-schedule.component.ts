import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { WeeklyScheduleService } from './weekly-schedule.service';

@Component({
  selector: 'app-weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.css']
})

export class WeeklyScheduleComponent implements OnInit {

  displayedData: any = [];
  DateMonday: string = '';
  DateSunday: string = '';
  daysOfWeek: string[] = [];

  constructor(private weeklyScheduleService: WeeklyScheduleService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const mondayDifference = (currentDayOfWeek === 0) ? -6 : 1 - currentDayOfWeek;
    const sundayDifference = (currentDayOfWeek === 0) ? 0 : 7 - currentDayOfWeek;
    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayDifference);
    const sunday = new Date(today);
    sunday.setDate(today.getDate() + sundayDifference);

    this.DateMonday = this.formatDate(monday)
    this.DateSunday = this.formatDate(sunday)
    this.filterDataByDate(this.DateMonday, this.DateSunday)

    this.filterdaysOfWeek(monday);
    console.log("this.daysOfWeek", this.daysOfWeek)
  }

  filterDataByDate(date1: string, date2: string): any {
    this.weeklyScheduleService.sendDataToServer({ "startdate": date1, "enddate": date2 }).subscribe((response) => {
      console.log('Ответ сервера response:', response);
      this.displayedData = response
      return response
    });
  }

  filterdaysOfWeek(monday: Date) {
    console.log("monday", monday)
    this.daysOfWeek.splice(0, this.daysOfWeek.length);
    console.log("this.daysOfWeekthis.daysOfWeek", this.daysOfWeek)
    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);

      daysOfWeek.push(this.formatDate(day));
    }
    this.daysOfWeek = daysOfWeek;
    console.log("this.daysOfWeek", this.daysOfWeek)
  }

  viewLastWeek(dates: string[]) {
    const [day, month, year] = dates[0].split('.').map(Number);
    const firstDate = new Date(year, month - 1, day - 7);

    const [day2, month2, year2] = dates[6].split('.').map(Number);
    const lastDate = new Date(year2, month2 - 1, day2 - 7);

    return { firstDate: firstDate, lastDate: lastDate };
  }


  previousWeek() {

    let week = this.viewLastWeek(this.daysOfWeek);
    if (week) {
      const formattedFirstDate = week.firstDate
      const formattedLastDate = week.lastDate
      console.log("formattedFirstDate", formattedFirstDate)
      this.filterdaysOfWeek(week.firstDate);
      const formattedDate = `${formattedFirstDate.getDate().toString().padStart(2, '0')}.${(formattedFirstDate.getMonth() + 1).toString().padStart(2, '0')}.${formattedFirstDate.getFullYear()}`;
      const formattedDate2 = `${formattedLastDate.getDate().toString().padStart(2, '0')}.${(formattedLastDate.getMonth() + 1).toString().padStart(2, '0')}.${formattedLastDate.getFullYear()}`;

      this.filterDataByDate(formattedDate,formattedDate2)
    }

  }

  viewNextWeek(dates: string[]) {
    const [day, month, year] = dates[0].split('.').map(Number);
    const firstDate = new Date(year, month - 1, day + 7);

    const [day2, month2, year2] = dates[6].split('.').map(Number);
    const lastDate = new Date(year2, month2 - 1, day2 + 7);

    return { firstDate: firstDate, lastDate: lastDate };
  }

  nextWeek() {
    let week = this.viewNextWeek(this.daysOfWeek);
    if (week) {
      const formattedFirstDate = week.firstDate
      const formattedLastDate = week.lastDate
      console.log("formattedFirstDate", formattedFirstDate)
      this.filterdaysOfWeek(week.firstDate);
      const formattedDate = `${formattedFirstDate.getDate().toString().padStart(2, '0')}.${(formattedFirstDate.getMonth() + 1).toString().padStart(2, '0')}.${formattedFirstDate.getFullYear()}`;
      const formattedDate2 = `${formattedLastDate.getDate().toString().padStart(2, '0')}.${(formattedLastDate.getMonth() + 1).toString().padStart(2, '0')}.${formattedLastDate.getFullYear()}`;

      this.filterDataByDate(formattedDate,formattedDate2)
    }
  }

  formatDate(date: Date | string): string {
    if (typeof date === 'string' && date.trim() === '') {
      return ''; // Вернуть пустую строку, если дата пустая
    }

    if (typeof date === 'string') {
      date = new Date(date); // Преобразовать строку в объект Date
    }

    if (date instanceof Date && !isNaN(date.getTime())) {
      return formatDate(date, 'dd.MM.yyyy', 'en-US');
    } else {
      return ''; // Вернуть пустую строку, если преобразование не удалось
    }
  }


}
