import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  
})
export class PieChartComponent implements OnInit {

  @Input() chartData: any;

  Highcharts = Highcharts;
  
  chartOptions: any;

  constructor(){}
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && changes['chartData'].currentValue) {
      this.optionsChart(this.chartData)
    }
  }
  ngOnInit() {
      this.optionsChart(this.chartData)
      console.log("this.chartData",this.chartData)
  }

  optionsChart(chartData: any) {
    if (chartData) {
        this.chartOptions = {
            chart: {
                type: 'pie',
            },
            title: {
                text: 'Количество заявок за день'
            },
            tooltip: {
                valueSuffix: ''
            },
            credits: {
                enabled: false,
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: [{
                        enabled: true,
                        distance: 20
                    }, {
                        enabled: true,
                        distance: -40,
                        format: '{point.percentage:.1f}%',
                        style: {
                            fontSize: '1.2em',
                            textOutline: 'none',
                            opacity: 0.5
                        },
                        filter: {
                            operator: '>',
                            property: 'percentage',
                            value: 10
                        }
                    }]
                }
            },
            series: [{
                colorByPoint: true,
                data: chartData.map((item: any) => ({
                    name: item.label,
                    y: item.value
                }))
            }]
        };
    }
}


  

}

