import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewApplicationComponent } from './new-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewApplicationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    NewApplicationComponent
  ]
})
export class NewApplicationModule { }
