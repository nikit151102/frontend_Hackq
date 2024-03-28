import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentdirector } from './home.component';
import { HomeChartsComponent } from './home-charts/home-charts.component';
import { HomeStatCounterComponent } from './home-stat-counter/home-stat-counter.component';
import { HomeRoutingModule } from './home.routng.module';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './home-charts/area-chart/chart.component';
import { PieChartComponent } from './home-charts/pie-chart/pie-chart.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        TreeSelectModule,
        FormsModule,
        ReactiveFormsModule,
        HighchartsChartModule,
        HomeComponentdirector,
        HomeChartsComponent,
        HomeStatCounterComponent,
        ChartComponent,
        PieChartComponent
    ]
})
export class HomeModule { }
