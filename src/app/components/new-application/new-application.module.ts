import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewApplicationComponent } from './new-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NewApplicationComponent
    ],
    exports: [
        NewApplicationComponent
    ]
})
export class NewApplicationModule { }
