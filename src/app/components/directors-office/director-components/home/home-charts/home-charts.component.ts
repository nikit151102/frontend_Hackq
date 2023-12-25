import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartTypeRegistry, Tooltip } from 'chart.js';
import {ModalgrafsService} from '../modalgrafs.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-charts',
  templateUrl: './home-charts.component.html',
  styleUrls: ['./home-charts.component.css']
})

export class HomeChartsComponent implements OnInit {
  

  
  formGroup1!: FormGroup;
  formGroup2!: FormGroup;
  selectedValue1: {
    label:string,
    value: keyof ChartTypeRegistry,
    parent: any
  } = {
    label: "Линейный график",
    value:"line",
    parent: []
  };
  selectedValue2: {
    label:string,
    value: keyof ChartTypeRegistry,
    parent: any
  } = {
    label: "Линейный график",
    value:"line",
    parent: []
  };

  nodes = [
    { label: 'Линейный график', value: 'line' },
    { label: 'Столбчатая диаграмма', value: 'bar'},
    { label: 'Радиолокационная карта', value: 'radar'},
    { label: 'круговые диаграммы', value: 'doughnut'},
  ];
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  
  private ctx: CanvasRenderingContext2D | null = null; 
  dataFromEJS: any[] = [];
  constructor(private  modalgrafsService : ModalgrafsService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fetchChartData();
    this.getDoughnutDataAndRenderChart();
    this.formGroup2 = this.fb.group({
      selectedNodes: []
    });
    this.formGroup1 = this.fb.group({
      selectedNodes: []
    });
  }
 
  createColor(rgb1: string, rgb2: string, ctx:CanvasRenderingContext2D  ) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, rgb1);
    gradient.addColorStop(1, rgb2);
    return gradient
  }

  updateSelectedValue(value: any) {
    this.selectedValue1 = value;
    console.log(this.selectedValue1);
    console.log('Label:', this.selectedValue1.label);
    console.log('Value:', this.selectedValue1.value);
    console.log('Parent:', this.selectedValue1.parent);
    this.fetchChartData()

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

private chart1: Chart | undefined;
  createChart(dataFromEJS: any[]) {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      if (this.chart1) {
        this.chart1.destroy();
      }
      this.canvas.nativeElement.width = 300; 
      this.canvas.nativeElement.height = 300; 

      const gradientBlue = this.createColor('rgba(0, 123, 255, 0.5)','rgba(0, 123, 255, 0.05)',ctx);
      const gradientGreen = this.createColor('rgba(40, 167, 69, 0.5)','rgba(40, 167, 69, 0.05)',ctx);
      const gradientRed = this.createColor('rgba(220, 53, 69, 0.5)','rgba(220, 53, 69, 0.05)',ctx);

  
      console.log("item",dataFromEJS)
      this.chart1 =new Chart(ctx, {
        type: this.selectedValue1.value,
        data: {
          labels: dataFromEJS.map(item => item.datas),
          datasets: [
            {
              label: 'Кол-во клиентов за неделю',
              backgroundColor: gradientBlue,
              data: dataFromEJS.map(item => item.data_count),
            },
            {
              label: 'Кол-во закрытых заявок',
              backgroundColor: gradientGreen,
              data: dataFromEJS.map(item => item.closed_count),
            },
            {
              label: 'Кол-во выполненных заявок',
              backgroundColor: gradientRed,
              data: dataFromEJS.map(item => item.completed_count),
            },
          ],
        },
        options: {
          responsive: false,
          scales: {
            y: {
              beginAtZero: true,
              suggestedMin: 10,
              ticks: {
                stepSize: 1,
              }
            }
        },
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


   
  updateSelectedValue2(value: any) {
    this.selectedValue2 = value;
    console.log(this.selectedValue2);
    console.log('Label:', this.selectedValue2.label);
    console.log('Value:', this.selectedValue2.value);
    console.log('Parent:', this.selectedValue2.parent);
    this.getDoughnutDataAndRenderChart()

  }

  getDoughnutDataAndRenderChart() {
    this.modalgrafsService.getDoughnutData().subscribe(
      (doughnuttoday: any) => {
        console.log("doughnuttoday",doughnuttoday)
        this.renderDoughnutChart(doughnuttoday);
      },
      (error) => {
        console.error('Error fetching data for doughnut chart:', error);
      }
    );
  }
   
  private chart2: Chart | undefined;
  renderDoughnutChart(doughnuttoday: any) {
    const ctx = this.doughnutChart.nativeElement.getContext('2d');
    if (ctx) {
      const bgGradient = ctx.createRadialGradient(120, 120, 0, 120, 120, 150);
      bgGradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
      bgGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      if (this.chart2) {
        this.chart2.destroy();
      }
      const gradientBlue = this.createColor('rgba(0, 123, 255, 0.5)','rgba(0, 123, 255, 0.05)',ctx);
      const gradientGreen = this.createColor('rgba(40, 167, 69, 0.5)','rgba(40, 167, 69, 0.05)',ctx);
      const gradientRed = this.createColor('rgba(220, 53, 69, 0.5)','rgba(220, 53, 69, 0.05)',ctx);
      this.doughnutChart.nativeElement.width = 300; 
      this.doughnutChart.nativeElement.height = 300; 
      this.chart2 = new Chart(ctx, {
        type: this.selectedValue2.value,
        data: {
          labels: [doughnuttoday.label1, doughnuttoday.label2, doughnuttoday.label3],
          datasets: [{
            data: [doughnuttoday.value1, doughnuttoday.value2, doughnuttoday.value3],
            backgroundColor: [gradientBlue, gradientGreen, gradientRed],
          }],
        },
        options: {
          responsive: false,
          plugins: {
            
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
