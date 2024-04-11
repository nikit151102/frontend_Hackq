import { Component, OnInit } from '@angular/core';
import { ModalgrafsService } from '../modalgrafs.service'
import { ChartComponent } from './area-chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-charts',
    templateUrl: './home-charts.component.html',
    styleUrls: ['./home-charts.component.css'],
    standalone: true,
    imports: [CommonModule, PieChartComponent, ChartComponent]
})

export class HomeChartsComponent implements OnInit {


  dataFromEJS: any[] = [];
  dataPie: any[] = [];
  errorPie: string =''
  constructor(private modalgrafsService: ModalgrafsService) { }

  ngOnInit(): void {
    // Вызываем только один метод, который включает последовательный запрос
    this.fetchChartData();
  }

  fetchChartData() {
    // Запрос данных о линии
    this.modalgrafsService.viewline().subscribe((dataFromEJS: any[]) => {
      // Получаем данные о линии
      this.dataFromEJS = dataFromEJS;
      // После получения данных о линии, делаем запрос данных о пироге
      this.getDoughnutDataAndRenderChart();
    });
  }

  getDoughnutDataAndRenderChart() {
    // Запрос данных о пироге
    this.modalgrafsService.getDoughnutData().subscribe(
      (doughnuttoday: any) => {
        // Получаем данные о пироге
        this.dataPie = doughnuttoday;
        // Теперь у нас есть все данные, и мы можем отправить их в компоненты графиков
      },
      (error) => {
        this.errorPie = error.error.detail;
        console.error(error);
      }
    );
  }

}





