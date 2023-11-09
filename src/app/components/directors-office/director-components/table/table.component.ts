import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../../data.service';
import { ModalService } from '../modal.service'
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { DataItem, TransformedDataItem } from './table.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('customFadeIn', [
      state('void', style({ opacity: 0 })), // Состояние компонента при его создании
      transition(':enter', animate('500ms ease-out', style({ opacity: 1 }))) // Анимация при входе
    ])
  ]
})
export class TableComponent implements OnInit {

  dataFromServer:DataItem[] = [];
  transformedData:TransformedDataItem[] =[];
  rowsPerPage: number = 10; // Количество строк на странице
  currentPage: number = 1; // Текущая страница
  pages: number[] = []; // Список страниц

  constructor(private dataService: DataService,public modalService: ModalService,private cdr: ChangeDetectorRef,private messageService: MessageService,private datePipe: DatePipe) { }
  isLoading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500); 
    this.dataService.startPolling(null); // Опрашивать каждые 5 секунд (настройте интервал по вашему усмотрению)
    this.fetchData();
    this.dataService.sendDataToServer().subscribe((response) => {
      console.log('Ответ сервера:', response);
      
      this.dataFromServer = response as DataItem[];

      this.transformedData = this.dataFromServer.map(item => {
        return {
          id_application: item.id_application,
          number_application: item.number_application,
          discharged: item.discharged,    
          datas: this.datePipe.transform(item.datas, 'dd MMMM yyyy'),
          expenses: item.expenses,
          revenue: item.revenue,
          profit: item.profit,
          payment_content: item.payment_content,
          status_content: item.status_content,
          employee_fullname: item.employee_fullname,
         
          child: [{
            content_application: item.content_application,
            comment_application: item.comment_application,
            estimation: item.estimation,
            client_fullname: item.client_fullname,
            client_phone: item.client_phone,
            name_company: item.name_company,
            street: item.street,
            house: item.house,
            office: item.office,
          }]
        };
      });
      
      console.log("transformedData.child[0]",this.transformedData[0].child)
    });
  }

 
  first = 0;

  rows = 3;

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
}

isLastPage(): boolean {
    return this.transformedData ? this.first === this.transformedData.length - this.rows : true;
}

isFirstPage(): boolean {
    return this.transformedData ? this.first === 0 : true;
}

  fetchData() {
    this.dataService.sendDataToServer().subscribe((response) => {
      console.log('Ответ сервера:', response);
      this.updateTable(response); 
      this.cdr.detectChanges();
    });
  }

  updateTable(data: any) {
    console.log('Updating table with data:', data);
    this.dataFromServer = data;
    // Вызовите метод обновления пагинации, если это необходимо
    this.updatePages();
  }

  //страницы и количество строк
  onRowsPerPageChange(): void {
    this.currentPage = 1;
    this.updatePages();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  updatePages(): void {
    // Вычисление списка страниц на основе dataFromServer и rowsPerPage
    // Например, если у вас есть 100 записей и rowsPerPage установлено на 10, то у вас будет 10 страниц
    const totalPages = Math.ceil(this.dataFromServer.length / this.rowsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }


//кнопка удаления
handledeleteClick(rowId: string) {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  // Здесь вы можете выполнить необходимые действия с id строки, например, вывести его в консоль
  console.log('Clicked on row with id:', Number(rowId) );
  this.dataService.deleteItem( Number(rowId)).subscribe(response => {
    // Обработка ответа от сервера
    console.log('Server Response:', response);

  });
}


openModal() {
  this.modalService.showDialog = true;
}

}

