import { Component, OnInit } from '@angular/core';
import { ModalgrafsService } from '../modalgrafs.service'
import { ChartComponent } from './area-chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@Component({
    selector: 'app-home-charts',
    templateUrl: './home-charts.component.html',
    styleUrls: ['./home-charts.component.css'],
    standalone: true,
    imports: [PieChartComponent, ChartComponent]
})

export class HomeChartsComponent implements OnInit {


  dataFromEJS: any[] = [];
  dataPie: any[] = [];
  constructor(private modalgrafsService: ModalgrafsService) { }
 

  ngOnInit(): void {
    this.fetchChartData();
    this.getDoughnutDataAndRenderChart();
  }

  fetchChartData() {
    this.modalgrafsService.viewline().subscribe((dataFromEJS: any[]) => {
      this.dataFromEJS = dataFromEJS;
    });
  }


  getDoughnutDataAndRenderChart() {
    this.modalgrafsService.getDoughnutData().subscribe(
      (doughnuttoday: any) => {
        this.dataPie = doughnuttoday
      },
      (error) => {
        console.error('Error fetching data for doughnut chart:', error);
      }
    );
  }

}





