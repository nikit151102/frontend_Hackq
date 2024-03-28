import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ModalgrafsService } from '../../modalgrafs.service';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
    selector: 'app-area-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
    standalone: true,
    imports: [HighchartsChartModule],
})
export class ChartComponent implements OnInit {

  @Input() chartData: any;

  Highcharts = Highcharts;
  
  chartOptions: any;

  constructor(private modalgrafsService: ModalgrafsService){}

  ngOnInit() {
    this.modalgrafsService.viewline().subscribe((dataFromEJS: any[]) => {
      this.chartData = {
        labels: dataFromEJS.map(item => item.datas),
        datasets: [
          {
            label: 'Кол-во клиентов за неделю',
            data: dataFromEJS.map(item => item.data_count),
          },
          {
            label: 'Кол-во закрытых заявок',
            data: dataFromEJS.map(item => item.closed_count),
          },
          {
            label: 'Кол-во выполненных заявок',
            data: dataFromEJS.map(item => item.completed_count),
          },
        ],
      };
      this.optionsChart(this.chartData)
    });
  }



  optionsChart(chartData: any) {
    if (chartData) {
      this.chartOptions = {
        chart: {
            type: 'area',
        },
        title: {
            text: 'Количество заявок за неделю',
            align: 'center',
        },
        credits: {
            enabled: false,
        },
        xAxis: {
            categories: chartData.labels,
            title: {
                useHTML: true,
                text: 'Даты',
            },
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Кол-во заявок',
            },
        },
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>',
        },
        plotOptions: {
            series: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666',
                    },
                },
            },
        },
        series: chartData.datasets.map((dataset: { label: any; data: any; }) => ({
            name: dataset.label,
            data: dataset.data,
        })),
        
    };
     }}
  
    
  

}

