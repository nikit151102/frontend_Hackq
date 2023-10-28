import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentdirector } from './home.component';
import { HomeChartsComponent } from './home-charts/home-charts.component';
import { HomeStatCounterComponent } from './home-stat-counter/home-stat-counter.component';
import { HomeRoutingModule } from './home.routng.module';



@NgModule({
  declarations: [
    HomeComponentdirector,
    HomeChartsComponent,
    HomeStatCounterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
