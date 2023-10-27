import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, Tooltip } from 'chart.js';
import {ModalgrafsService} from '../modalgrafs.service'

@Component({
  selector: 'app-home-charts',
  templateUrl: './home-charts.component.html',
  styleUrls: ['./home-charts.component.css']
})

export class HomeChartsComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  
  private ctx: CanvasRenderingContext2D | null = null; 
  dataFromEJS: any[] = [];
  constructor(private  modalgrafsService : ModalgrafsService) { }

  ngOnInit(): void {
    this.fetchChartData();
    this.getDoughnutDataAndRenderChart();
  }

  fetchChartData() {
    this.modalgrafsService.viewline().subscribe((dataFromEJS: any[]) => {
      this.dataFromEJS = dataFromEJS;
      this.createChart(dataFromEJS);
    });
  }

  createGradient(color1: string, color2: string) {
    if (this.ctx) { // Проверяем, что ctx не равно null
      const gradient = this.ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      return gradient;
    }
    return null; // Возвращаем null, если ctx равен null
}

  createChart(dataFromEJS: any[]) {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
      gradientBlue.addColorStop(0, 'rgba(0, 123, 255, 0.5)');
      gradientBlue.addColorStop(1, 'rgba(0, 123, 255, 0.05)');
  
      const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
      gradientGreen.addColorStop(0, 'rgba(40, 167, 69, 0.5)');
      gradientGreen.addColorStop(1, 'rgba(40, 167, 69, 0.05)');
  
      const gradientRed = ctx.createLinearGradient(0, 0, 0, 400);
      gradientRed.addColorStop(0, 'rgba(220, 53, 69, 0.5)');
      gradientRed.addColorStop(1, 'rgba(220, 53, 69, 0.05)');
  
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: dataFromEJS.map(item => item.datas),
          datasets: [
            {
              label: 'Кол-во клиентов за неделю',
              backgroundColor: gradientBlue,
              borderColor: 'blue',
              borderWidth: 1,
              data: dataFromEJS.map(item => item.data_count),
            },
            {
              label: 'Кол-во закрытых заявок',
              backgroundColor: gradientGreen,
              borderColor: 'green',
              borderWidth: 1,
              data: dataFromEJS.map(item => item.closed_count),
            },
            {
              label: 'Кол-во выполненных заявок',
              backgroundColor: gradientRed,
              borderColor: 'red',
              borderWidth: 1,
              data: dataFromEJS.map(item => item.completed_count),
            },
          ],
        },
        options: {
          responsive: false,
          plugins: {
            legend: {
              display: false,
              position: 'bottom',
            },
          }
        },
      });
    }
    
  }







  @ViewChild('doughnutChart', { static: true }) doughnutChart!: ElementRef<HTMLCanvasElement>;


   
  

  getDoughnutDataAndRenderChart() {
    this.modalgrafsService.getDoughnutData().subscribe(
      (doughnuttoday: any) => {
        this.renderDoughnutChart(doughnuttoday);
      },
      (error) => {
        console.error('Error fetching data for doughnut chart:', error);
      }
    );
  }

  renderDoughnutChart(doughnuttoday: any) {
    const ctx = this.doughnutChart.nativeElement.getContext('2d');
    if (ctx) {
      const bgGradient = ctx.createRadialGradient(120, 120, 0, 120, 120, 150);
      bgGradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
      bgGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [doughnuttoday.label1, doughnuttoday.label2, doughnuttoday.label3],
          datasets: [{
            data: [doughnuttoday.value1, doughnuttoday.value2, doughnuttoday.value3],
            backgroundColor: ['blue', 'green', 'red'],
          }],
        },
        options: {
          responsive: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
          },
          elements: {
            arc: {
              backgroundColor: bgGradient,
            },
          }
        },
      });
    }
  }
  
}
