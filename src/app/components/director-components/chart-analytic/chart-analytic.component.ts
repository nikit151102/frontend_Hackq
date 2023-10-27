import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, Tooltip } from 'chart.js';
import { DataService } from '../../data.service';
import { tree } from 'ngx-bootstrap-icons';
import { ChartTypeRegistry } from 'chart.js/auto';
import { SetColor } from '../chart-analytic/color'
import { fi } from 'date-fns/locale';
import th from 'date-fns/esm/locale/th/index.js';
@Component({
  selector: 'app-chart-analytic',
  templateUrl: './chart-analytic.component.html',
  styleUrls: ['./chart-analytic.component.css']
})

export class ChartAnalyticComponent implements OnInit {

  private chart: Chart | undefined;
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;
  pribl: number = 0;
  saleZatrat: number = 0;
  obfaiaSale: number = 0;
  fromDate: string = '2023-09-01';
  toDate: string = '2023-09-30';
  dateRange: string[] = [];
  dataFromServer: any = [];
  line1: line[] = []
  line2: line[] = []
  line3: line[] = []
  line4: line[] = []
  line5: line[] = []
  line6: line[] = []
  line7: line[] = []
  line8: line[] = []
  showLine1: boolean = true;
  showLine2: boolean = true;
  showLine3: boolean = true;
  lineCombined: any[] = []
  isChartVisible: boolean = false;
  selectedChartType: keyof ChartTypeRegistry = 'line';

  constructor(private dataService: DataService) {
    // this.updateDateRange(); // Вызываем функцию при инициализации компонента
  }

  ngOnInit() {
    this.dataService.startPolling(null); // Опрашивать каждые 5 секунд (настройте интервал по вашему усмотрению)
    this.showLine2 = false;
    this.showLine3 = false;
    this.fetchData();
  }

  fetchData() {
    this.dataService.sendDataToServer().subscribe((response) => {
      //console.log('Ответ сервера:', response);
      this.dataFromServer = response;
      this.updateDateRange();
      this.updateTotal(); // Вызывайте метод обновления total здесь
    });
  }

  updateTotal() {
    this.updateChartVisibility()
    this.calculateTotal(this.dataFromServer, this.fromDate, this.toDate);
  }


  onDateChange() {
    this.updateDateRange(); // Вызываем функцию при изменении дат
    this.updateTotal()
  }

  countval: number = 0;
  countval2: number = 0;
  countval3: number = 0;
  updateDateRange() {
    const startDate = new Date(this.fromDate);
    const endDate = new Date(this.toDate);

    if (startDate <= endDate) {
      const range = [];
      let currentDate = startDate;
      while (currentDate <= endDate) {
        const formattedDate = this.formatDate(currentDate); // Форматируем дату
        range.push(formattedDate);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      this.dateRange = range;
    } else {
      this.dateRange = [];
    }

    this.viewcanvasdate()

  }


  viewcanvasdate() {
    this.line1 = this.updateDateCounts(false, false, false, false)
    this.line2 = this.updateDateCounts(true, 'выполнена', false)
    this.line3 = this.updateDateCounts(true, 'закрыта', false)

console.log(" this.line1", this.line1)
    this.lineCombined = this.line1.map((item1, index) => ({
      data: item1.data,
      val: item1.val,
      val2: this.line2[index].val,
      val3: this.line3[index].val
    }));
    console.log("this.lineCombined", this.line2)

    this.countval = this.lineCombined.reduce((total, item) => total + item.val, 0);
    this.countval2 = this.lineCombined.reduce((total, item) => total + item.val2, 0);
    this.countval3 = this.lineCombined.reduce((total, item) => total + item.val3, 0);

    const labels = [
      'Кол-во заявок',
      'Кол-во выполненных заявок',
      'Кол-во закрытых заявок',
    ];
    const gradientBlue = this.createColor('rgba(0, 123, 255, 0.5)','rgba(0, 123, 255, 0.05)');
    const gradientGreen = this.createColor('rgba(40, 167, 69, 0.5)','rgba(40, 167, 69, 0.05)');
    const gradientRed = this.createColor('rgba(220, 53, 69, 0.5)','rgba(220, 53, 69, 0.05)');
    const backgroundColors = [gradientBlue, gradientGreen, gradientRed];
    const borderColors = ['blue', 'green', 'red'];
    const borderWidths = [1, 1, 1];
    const dataArrays = [
      this.lineCombined.map(item => item.val),
      this.lineCombined.map(item => item.val2),
      this.lineCombined.map(item => item.val3),
    ];


    if (this.pairs.length > 0) {
      let color = 0
      let lines
      for (let point of this.pairs){
        labels.push(point.third+"-"+point.second);
        backgroundColors.push(this.createColor(SetColor[color].Color1, SetColor[color].Color2));
        borderColors.push(SetColor[color].Color3);
        borderWidths.push(1);
        lines = this.updateDateCounts(true, point.first, true,point.second);
        dataArrays.push(lines.map(item => item.val)); 
        color = color + 1
      }

      
    }
    const chartData = this.createChartData(labels, backgroundColors, borderColors, borderWidths, dataArrays);

    console.log("cec", chartData);
    //this.createChart(this.lineCombined);
    this.createChart(chartData, this.lineCombined);
  }

  createChartData(labels: string[], backgroundColors: string[], borderColors: string[], borderWidths: number[], dataArrays: any[]) {
    const chartData = [];

    for (let i = 0; i < labels.length; i++) {
      chartData.push({
        label: labels[i],
        backgroundColor: backgroundColors[i],
        borderColor: borderColors[i],
        borderWidth: borderWidths[i],
        data: dataArrays[i],
      });
    }

    return chartData;
  }


  createColor(rgb1: string, rgb2: string) {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, rgb1);
    gradient.addColorStop(1, rgb2);
    return gradient
  }


  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0'); // Получаем день и добавляем ведущий ноль
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Получаем месяц (начиная с 0) и добавляем ведущий ноль
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }




  updateDateCounts(flag1: boolean, valueFlag1: string | false = false, flag2: boolean, valueFlag2: string | false = false) {
    const dateCounts = [];

    for (const date of this.dateRange) {
      let filteredData: YourDataStructure[] = this.dataFromServer;

      // Применяем фильтры, если соответствующие флаги установлены
      if (flag1 && valueFlag1) {
        filteredData = filteredData.filter((item) => item.status_zaiavki === valueFlag1);
      }
      if (flag2 && valueFlag2) {
        filteredData = filteredData.filter((item) => item.sotrudnik === valueFlag2);
      }

      // Подсчитываем количество элементов после фильтрации
      const count = filteredData.filter((item) => item.datas === date).length;
      dateCounts.push({ date, count });
    }


    const lineArray: line[] = dateCounts.map((item) => ({ data: item.date, val: item.count }));

    return lineArray;
  }





  updateChartVisibility() {
    if (this.chart) {
      this.chart.data.datasets[0].hidden = !this.showLine1;
      this.chart.data.datasets[1].hidden = !this.showLine2;
      this.chart.data.datasets[2].hidden = !this.showLine3;
      // и так далее для других линий
      this.chart.update();
    }
  }









  createChart(dataFromEJS: any[], dates: any[]) {
    if (this.chartCanvas) {
      const ctx = this.chartCanvas.nativeElement.getContext('2d');
      if (ctx) {
        // Уничтожение существующего графика, если он существует
        if (this.chart) {
          this.chart.destroy();
        }
        console.log("dataFromEJS",dataFromEJS)
        this.chartCanvas.nativeElement.width = 800; // Замените на желаемую ширину
        this.chartCanvas.nativeElement.height = 600; // Замените на желаемую высоту

        this.chart = new Chart(ctx, {
          type: this.selectedChartType,
          data: {
            labels: dates.map(item => item.data),
            datasets: dataFromEJS
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


  // Статистика в цифрах
  calculateTotal(data: any[], fromDate: string, toDate: string) {

    this.pribl = 0;
    this.saleZatrat = 0;
    this.obfaiaSale = 0;

    var fromDateObj: Date;
    var toDateObj: Date;
    const datePartsfromDate = fromDate.split('-');
    const itemDatefromDate = new Date(parseInt(datePartsfromDate[0]), parseInt(datePartsfromDate[1]) - 1, parseInt(datePartsfromDate[2]));
    const datePartstoDate = toDate.split('-');
    const itemDatetoDate = new Date(parseInt(datePartstoDate[0]), parseInt(datePartstoDate[1]) - 1, parseInt(datePartstoDate[2]));
    fromDateObj = new Date(itemDatefromDate);
    toDateObj = new Date(itemDatetoDate);
    
    // Фильтрация данных по диапазону дат и вычисление суммы
    data.forEach((item) => {
      // Преобразование item.datas в формат JavaScript Date
      const dateParts = item.datas.split('-');
      const itemDate = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]));
      //console.log("itemDate-", itemDate)
      if (itemDate <= toDateObj) {
       
      }

      // Проверка на null перед выполнением вычислений
      if (itemDate >= fromDateObj && itemDate <= toDateObj) {
       // console.log("pribl", item.pribl)
        if (item.pribl !== null) {
          this.pribl += item.pribl;

        }
        if (item.sale_zatrat !== null) {
          this.saleZatrat += item.sale_zatrat;
        }
        if (item.obfaia_sale !== null) {
          this.obfaiaSale += item.obfaia_sale;
        }
      }
    });

  }


  onChartTypeChange() {
    this.updateDateRange(); 
    this.updateTotal()
  }

  //скрытие блоков
  isBlockVisible: boolean = false;
  isselectlineBlockVisible: boolean = false;
  isSelectDataBlockVisible: boolean = false;
  isStatCountBlockVisible: boolean = false;
  isnewLineBlockVisible: boolean = false;
  toggleBlockVisibility() {
    this.isBlockVisible = !this.isBlockVisible;
  }
  toggleselectlineBlockVisibility() {
    this.isselectlineBlockVisible = !this.isselectlineBlockVisible;
  }
  toggleSelectDataBlockVisibility() {
    this.isSelectDataBlockVisible = !this.isSelectDataBlockVisible;
  }

  toggleStatCountBlockVisibility() {
    this.isStatCountBlockVisible = !this.isStatCountBlockVisible;
  }
  togglenewLineBlockVisibility() {
    this.isnewLineBlockVisible = !this.isnewLineBlockVisible;
  }
  



  firs: {text: string, value: string} = { text: '', value: '' };;
  second: string = '';

  pairs: { first: string, second: string ,third: string }[] = [];
  addPair() {

      this.pairs.push({ first: this.firs.value, second: this.second, third: this.firs.text });
      console.log("this.pairs",this.pairs);
      this.updateDateRange(); 
      this.updateTotal()
   
  }

  removePair(index: number) {
    this.pairs.splice(index, 1);
    this.updateDateRange(); 
    this.updateTotal()
  }



}

interface YourDataStructure {
  datas: string;
  status_zaiavki: string;
  sotrudnik: string;
}

interface line {
  data: string;
  val: number;
}