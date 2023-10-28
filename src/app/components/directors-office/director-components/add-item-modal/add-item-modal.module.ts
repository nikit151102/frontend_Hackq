import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemModalComponent } from './add-item-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddItemModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddItemModalComponent
  ]
})
export class AddItemModalModule { }
