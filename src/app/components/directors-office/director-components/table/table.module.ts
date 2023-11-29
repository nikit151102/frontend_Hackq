import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { AddItemModalModule } from '../add-item-modal/add-item-modal.module';
import { TableRoutingModule } from './table.routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RatingModule } from 'primeng/rating';
@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule,
    AddItemModalModule,
    TableModule,
    ButtonModule,
    ToastModule,
    RatingModule
  ],
  providers: [DatePipe,MessageService]
})
export class TablepageModule { }
