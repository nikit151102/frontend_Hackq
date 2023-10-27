import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.css']
})

export class WeeklyScheduleComponent implements OnInit {
  currentWeekIndex: number = 0; // Индекс текущей недели
  weeks: Date[][] = []; // Массив недель
  displayedData: any = []; // Массив данных для отображения на карточках
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Инициализация данных для отображения недель
    this.generateWeeks();
    this.currentWeekIndex = this.weeks.findIndex(week => week.some(day => this.isSameDate(new Date(), day)));
    this.dataService.startPolling(null); // Опрашивать каждые 5 секунд (настройте интервал по вашему усмотрению)
    this.fetchData();
  }
  fetchData() {
    // Получение данных с сервера
    this.dataService.sendDataToServer().subscribe((response) => {
      console.log('Ответ сервера:', response);

      if (Array.isArray(response)) {
        // Если response является массивом, то используем его для инициализации showDetails и buttonText
        this.displayedData = response;
        this.showDetails = Array(response.length + 1).fill(false);
        this.buttonText = Array(response.length + 1).fill("Подробнее");

      } else {
        // Обработайте ситуацию, если структура данных отличается
        console.error('Неправильная структура данных в ответе сервера');
      }
    });
  }
  filterDataByDate(date: Date): any[] {
    return this.displayedData.filter((data: any) => this.isSameDate(date, data.datas));
  }
  isSameDate(date1: Date, date2: any): boolean {


    if (date1 && typeof date2 === 'string') {
      date2 = new Date(date2); // Преобразование строки в объект Date
      // Поменять местами месяц и день
      const day = date2.getDate();
      const month = date2.getMonth() + 1; // Прибавляем 1, так как месяцы в объекте Date начинаются с 0
      const year = date2.getFullYear();

      date2 = new Date(`${day}-${month}-${year}`);
    }

    if (date1 && date2 instanceof Date) {
      // Проверка на совпадение даты
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    }
    return false;
  }

  generateWeeks() {
    // Получите текущую дату
    const currentDate = new Date();

    // Найдите год текущей даты
    const currentYear = currentDate.getFullYear();

    // Установите дату на 1 января текущего года
    currentDate.setFullYear(currentYear, 0, 1);

    // Найдите день недели для 1 января текущего года (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)
    const firstDayOfWeek = currentDate.getDay();

    // Вычтите из текущей даты количество дней, чтобы вернуться к первому понедельнику текущего года
    currentDate.setDate(currentDate.getDate() - firstDayOfWeek + 1);

    // Генерация недель с Понедельника по Воскресенье до конца года текущего
    while (currentDate.getFullYear() === currentYear) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        week.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      this.weeks.push(week);
    }
    console.log(this.weeks);

    this.weeks = this.addMissingDatesToStart(this.weeks)

  }

  addMissingDatesToStart(arr: any) {
    const firstWeek = arr[0];
    const firstDate = firstWeek[0]; // Получаем первую дату из первой недели
    const firstYear = firstDate.getFullYear(); // Получаем год из первой даты
    const startDate = new Date(firstYear, 0, 1); // Создаем дату для 1 января года
    startDate.setHours(2); // Задаем часы (02)
    startDate.setMinutes(40); // Задаем минуты (40)
    startDate.setSeconds(4); // Задаем секунды (04)
    const dateRange = [];
    const currentDate = new Date(startDate);
    while (currentDate < firstDate) {
      dateRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    if (dateRange.length > 0) {
      dateRange.pop(); // Удаляем последний элемент
    }
    arr.splice(0, 0, dateRange);
    return arr
  }



  previousWeek() {
    // Логика для переключения на предыдущую неделю
    if (this.currentWeekIndex > 0) {
      this.currentWeekIndex--;
    }
  }

  nextWeek() {
    // Логика для переключения на следующую неделю
    if (this.currentWeekIndex < this.weeks.length - 1) {
      this.currentWeekIndex++;
    }
  }

  formatDate(date: Date | string): string {
    if (typeof date === 'string' && date.trim() === '') {
      return ''; // Вернуть пустую строку, если дата пустая
    }

    if (typeof date === 'string') {
      date = new Date(date); // Преобразовать строку в объект Date
    }

    if (date instanceof Date && !isNaN(date.getTime())) {
      return formatDate(date, 'dd.MM.yyyy', 'en-US');
    } else {
      return ''; // Вернуть пустую строку, если преобразование не удалось
    }
  }

  formatDatesInData(data: any): any {
    if (Array.isArray(data)) {
      return data.map(item => this.formatDatesInData(item));
    } else if (typeof data === 'object' && data !== null) {
      const formattedData: any = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          if (typeof data[key] === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(data[key])) {
            const dateParts = data[key].split('-');
            if (dateParts.length === 3) {
              formattedData[key] = dateParts[2] + '.' + dateParts[1] + '.' + dateParts[0];
            } else {
              formattedData[key] = data[key];
            }
          } else {
            formattedData[key] = this.formatDatesInData(data[key]);
          }
        }
      }
      return formattedData;
    } else {
      return data;
    }
  }




  // Добавьте свойство showDetails для контроля видимости дополнительных строк
  public showDetails: boolean[] = [];
  public buttonText: string[] = []; // Добавьте свойство для текста кнопки

  // Метод для переключения видимости дополнительных строк
  public toggleDetails(index: number): void {
    this.showDetails[index] = !this.showDetails[index];
    this.buttonText[index] = this.showDetails[index] ? "Скрыть" : "Подробнее";
  }
}
