import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartAnalyticComponent } from './chart-analytic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartAnalyticRoutingModule } from './chart-analytic.routing.module';
import { AccordionModule } from 'primeng/accordion';
@NgModule({
  declarations: [
    ChartAnalyticComponent
  ],
  imports: [
    CommonModule,
    ChartAnalyticRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule
  ],
  exports: [
    ChartAnalyticComponent
  ]
})
export class ChartAnalyticModule { }
