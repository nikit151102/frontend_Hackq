import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WeeklyScheduleComponent } from './weekly-schedule.component';
import { weeklyScheduleRoutingModule } from './weekly-schedule.routing.module';
import { WorkingWithDates } from './dates';
import { AddItemModalModule } from '../add-item-modal/add-item-modal.module';
import { WeeklySchedulCardComponent } from './weekly-schedule-components/weekly-schedule-card.component';

   
@NgModule({
  declarations: [
    WeeklyScheduleComponent,
    WeeklySchedulCardComponent
  ],
  imports: [
    CommonModule,
    weeklyScheduleRoutingModule,
    AddItemModalModule
  ],
  providers: [DatePipe,WorkingWithDates]
})
export class WeeklyScheduleModule { }
