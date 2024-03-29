import { Component, OnInit } from '@angular/core';
import { WeeklyScheduleService } from './weekly-schedule.service';
import { WorkingWithDates } from './dates';
import { ModalService } from '../modal.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { map } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';
import { WeeklySchedulCardComponent } from './weekly-schedule-components/weekly-schedule-card.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-weekly-schedule',
    templateUrl: './weekly-schedule.component.html',
    styleUrls: ['./weekly-schedule.component.css'],
    animations: [
        trigger('customFadeIn', [
            state('void', style({ opacity: 0 })),
            transition(':enter', animate('500ms ease-out', style({ opacity: 1 }))) // Анимация при входе
        ])
    ],
    standalone: true,
    imports: [NgIf, NgFor, WeeklySchedulCardComponent, AddItemModalComponent]
})

export class WeeklyScheduleComponent implements OnInit {

  displayedData: any = [];
  daysOfWeek: string[] = [];
  datesSplit: {day: string, month: string, year: string}[] = [];
  someValue:string = ''
  isLoading: boolean = true;

  constructor(private weeklyScheduleService: WeeklyScheduleService,private workingWithDates:WorkingWithDates,private cdRef: ChangeDetectorRef,public modalService: ModalService) { }

  ngOnInit(): void {
    this.daysOfWeek.splice(0, this.daysOfWeek.length);
    const currentWeek = this.workingWithDates.currentWeek();
  
    this.filterDataByDate(this.workingWithDates.formatDate(currentWeek.monday), this.workingWithDates.formatDate(currentWeek.sunday))
      .subscribe((response: any) => {
        this.displayedData = response;
        console.log('displayedData:', this.displayedData);
  
        this.daysOfWeek = this.workingWithDates.filterdaysOfWeek(currentWeek.monday);
        console.log("this.daysOfWeek", this.daysOfWeek);
        this.datesSplit = this.workingWithDates.DatesSplit(this.daysOfWeek);
        console.log("this.datesSplit", this.datesSplit);
  
        this.isLoading = false;
        this.cdRef.detectChanges(); // Manually trigger change detection
      });
  }
  
  
  filterDataByDate(date1: string, date2: string): any {
    return this.weeklyScheduleService.sendDataToServer({ "startdate": date1, "enddate": date2 })
      .pipe(
        map(response => {
          console.log('Ответ сервера displayedData:', response);
          return response;
        })
      );
  }
  

  
  
  

  previousWeek() {
    let week = this.workingWithDates.viewWeek(this.daysOfWeek, 'last');

    if (week) {
      let {formattedDate, formattedDate2, daysOfWeek} = this.workingWithDates.changeWeek(week, this.daysOfWeek);
      this.daysOfWeek = daysOfWeek

      this.filterDataByDate(formattedDate,formattedDate2)
      .subscribe((response: any) => {
        this.displayedData = response;
        this.datesSplit = this.workingWithDates.DatesSplit(this.daysOfWeek);
        this.isLoading = false;
        this.cdRef.detectChanges(); 
      });
    }
  }


  nextWeek() {
    let week = this.workingWithDates.viewWeek(this.daysOfWeek, 'next');
    
    if (week) {
      let {formattedDate, formattedDate2, daysOfWeek} = this.workingWithDates.changeWeek(week, this.daysOfWeek);
      this.daysOfWeek = daysOfWeek

      this.filterDataByDate(formattedDate,formattedDate2)
      .subscribe((response: any) => {
        this.displayedData = response;
        this.datesSplit = this.workingWithDates.DatesSplit(this.daysOfWeek);
        this.isLoading = false;
        this.cdRef.detectChanges(); 
      });
    }
  }


 
}
