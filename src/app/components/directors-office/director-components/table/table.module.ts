import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { AddItemModalModule } from '../add-item-modal/add-item-modal.module';
import { TableRoutingModule } from './table.routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RatingModule } from 'primeng/rating';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

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
    RatingModule,
    ConfirmDialogModule
  ],
  providers: [DatePipe,MessageService,ConfirmationService]
})
export class TablepageModule { }
