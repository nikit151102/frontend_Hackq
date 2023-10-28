import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { AddItemModalModule } from '../add-item-modal/add-item-modal.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddItemModalModule
  ]
})
export class TableModule { }
