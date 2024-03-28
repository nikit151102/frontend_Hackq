import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';


import { CanbanCurrentDayRoutingModule } from './canban-current-day.routing.module';
import { CanbanCurrentDayComponent } from './canban-current-daycomponent';
import { WorkingWithDates } from '../weekly-schedule/dates';
import { AddItemModalModule } from '../add-item-modal/add-item-modal.module';



@NgModule({
    imports: [
        CommonModule,
        CanbanCurrentDayRoutingModule,
        AddItemModalModule,
        CanbanCurrentDayComponent
    ],
    providers: [DatePipe, WorkingWithDates]
})
export class CanbanCurrentDayModule { }