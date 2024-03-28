import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';
import { SetColor } from './color'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CreateChart } from './Class-chart';
import { WorkingWithDates } from './dates-class';
import { DataChartAnalyticService } from './data-chart-analytic.service';
import { StatusApplication, StatusPayment } from '../add-item-modal/model-interface';
import { Initials } from './chart-anakytic.interface';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-chart-analytic',
    templateUrl: './chart-analytic.component.html',
    styleUrls: ['./chart-analytic.component.css'],
    animations: [
        trigger('customFadeIn', [
            state('void', style({ opacity: 0 })),
            transition(':enter', animate('500ms ease-out', style({ opacity: 1 }))) // Анимация при входе
        ])
    ],
    standalone: true,
    imports: [NgIf, AccordionModule, CalendarModule, ReactiveFormsModule, FormsModule, DropdownModule]
})

export class ChartAnalyticComponent implements OnInit {


  constructor(private dataChartAnalyticService: DataChartAnalyticService) { }

  private chart: Chart | undefined;
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;

  isLoading: boolean = true;

  createdChart = new CreateChart
  workingWithDates = new WorkingWithDates

  pribl: number = 0;
  saleZatrat: number = 0;
  obfaiaSale: number = 0;
  fromDate: string = '';
  toDate: string = '';
  line1: any[] = []

  dataStatusApplication: StatusApplication[] | undefined = [];
  Initials:Initials[] | undefined = []
  typeLine: any[] | undefined = []; 
  selectedTypeLine:{type: string,code: keyof ChartTypeRegistry} = {type: '', code: 'line'}

  ngOnInit() {
    setTimeout(() => {
      this.dataChartAnalyticService.getStatusApplication().subscribe(
        (response: StatusApplication[]) => {
          this.dataStatusApplication = response;
          console.log("this.dataStatusApplication",this.dataStatusApplication)
        }
      );
      this.isLoading = false;
      this.typeLine = [
        { type: 'Линейный график', code: 'line' },
        { type: 'Столбчатая диаграмма', code: 'bar' },
        { type: 'Радиолокационная карта', code: 'radar' },
        { type: 'Карта полярных областей', code: 'polarArea' },
        { type: 'Круговые диаграммы', code: 'doughnut' }
    ];
    this.dataChartAnalyticService.getInitials().subscribe(
      (response: Initials[]) => {
        this.Initials = response;
        console.log("this.Initials",this.Initials)
      }
    );
      this.fetchData();
    }, 500);

  }
  
  fetchData() {
    this.dataChartAnalyticService.sendDataToServer().subscribe((response) => {
      console.log("response",response)
      this.createdChart.setdataFromServer(response);
      this.createdChart.setdateRange(this.workingWithDates.updateDateRange(this.fromDate, this.toDate));
      this.viewcanvasdate()
      this.updateTotal(); // Вызывайте метод обновления total здесь
    });
  }

  updateTotal() {

  }


  onDateChange() {
    this.createdChart.setLines([])
    this.createdChart.setdateRange(this.workingWithDates.updateDateRange(this.fromDate, this.toDate))
    console.log(this.createdChart.getdateRange())
    this.updateTotal();
    this.createChart()
    this.viewcanvasdate()
  }

  countval: number = 0;
  countval2: number = 0;
  countval3: number = 0;

  viewcanvasdate() {
    this.createdChart.setdateRange(this.workingWithDates.updateDateRange(this.fromDate, this.toDate));
    this.line1 = this.createdChart.updateDateCounts(false, false, false, false)

    const backgroundColors = this.createdChart.createColor(this.chartCanvas.nativeElement.getContext('2d'), 'rgba(0, 123, 255, 0.5)', 'rgba(0, 123, 255, 0.05)');

    let DateCounts = this.createdChart.updateDateCounts(false, false, false, false)
    this.createdChart.createChartData("Кол-во заявок", backgroundColors, 'blue', 1, DateCounts);
    this.createChart();
  }


  createChart() {
    if (this.chartCanvas) {
      const ctx = this.chartCanvas.nativeElement.getContext('2d');
      if (ctx) {
        // Уничтожение существующего графика, если он существует
        if (this.chart) {
          this.chart.destroy();
        }
        this.chartCanvas.nativeElement.width = 800; // Замените на желаемую ширину
        this.chartCanvas.nativeElement.height = 600; // Замените на желаемую высоту

        this.chart = new Chart(ctx, {
          type: this.createdChart.getChartType(),
          data: {
            labels: this.createdChart.getdateRange(),
            datasets: this.createdChart.getLines()
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
  }


  onChartTypeChange() {
    this.workingWithDates.updateDateRange(this.fromDate, this.toDate);
    let code = this.selectedTypeLine['code']
    this.createdChart.setChartType(code)
    this.updateTotal()
    this.createChart()
    console.log("selectedTypeLine",)
  }


  firs: { text: string, value: string } = { text: '', value: '' };;
  itemColor: number = 0
  status_application: {status_application:string} ={status_application: ''};
  valueinitials: {valueinitials:string} ={valueinitials: ''};
  addPair() {
    //first: this.firs.value, second: this.second, third: this.firs.text
    let backgroundColors = this.createdChart.createColor(this.chartCanvas.nativeElement.getContext('2d'), SetColor[this.itemColor].Color1, SetColor[this.itemColor].Color2)
      let borderColors = SetColor[this.itemColor].Color3;
    if(this.valueinitials){
      console.log("this.valueinitialsthis.valueinitials",this.valueinitials)
      let DateCounts = this.createdChart.updateDateCounts(true,this.status_application.status_application,true,this.valueinitials.valueinitials)
      this.createdChart.createChartData(this.status_application.status_application+'-'+this.valueinitials.valueinitials,backgroundColors, borderColors, 1, DateCounts);
      this.createChart()
      this.updateTotal()
    }else{
      let DateCounts = this.createdChart.updateDateCounts(true,this.status_application.status_application,false,false)
      this.createdChart.createChartData(this.status_application.status_application,backgroundColors, borderColors, 1, DateCounts);
      this.createChart()
  
      this.updateTotal()
    }
  }
}
