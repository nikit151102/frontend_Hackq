import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WeeklyScheduleComponent } from './weekly-schedule.component';
import { weeklyScheduleRoutingModule } from './weekly-schedule.routing.module';



@NgModule({
  declarations: [
    WeeklyScheduleComponent
  ],
  imports: [
    CommonModule,
    weeklyScheduleRoutingModule
  ],
  providers: [DatePipe]
})
export class WeeklyScheduleModule { }
