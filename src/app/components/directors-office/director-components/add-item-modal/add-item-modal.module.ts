import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemModalComponent } from './add-item-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    AddItemModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TabViewModule,
    InputTextareaModule,
    AutoCompleteModule,
    DropdownModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [
    AddItemModalComponent
  ]
})
export class AddItemModalModule { }
