import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../../data.service';
import { ModalService } from '../modal.service'
import { DatePipe, NgIf } from '@angular/common';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { DataItem, TransformedDataItem } from './table.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    animations: [
        trigger('customFadeIn', [
            state('void', style({ opacity: 0 })),
            transition(':enter', animate('500ms ease-out', style({ opacity: 1 }))) // Анимация при входе
        ])
    ],
    standalone: true,
    imports: [NgIf, TableModule, SharedModule, RatingModule, ReactiveFormsModule, FormsModule, ToastModule, AddItemModalComponent, ConfirmDialogModule]
})
export class TableComponent implements OnInit {

  dataFromServer: DataItem[] = [];
  transformedData: TransformedDataItem[] = [];
  rowsPerPage: number = 10; // Количество строк на странице
  currentPage: number = 1; // Текущая страница
  pages: number[] = []; // Список страниц
  someValue: string = ''

  constructor(private confirmationService: ConfirmationService,
              private dataService: DataService, public modalService: ModalService,
              private cdr: ChangeDetectorRef,
              private messageService: MessageService,
              private datePipe: DatePipe) { }

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
          id: item.id,
          requestnumber: item.requestnumber,
          discharged: item.discharged,
          submissiondate: item.submissiondate,
          revenue: item.revenue,
          expenses: item.expenses,
          profit: item.profit,
          statuspayment: item.statuspayment,
          statusrequest: item.statusrequest,
          employeelastname: item.employeelastname,
          employeefirstname: item.employeefirstname,
          employeemiddlename: item.employeemiddlename,

          child: [{
            reason: item.reason,
            comment: item.comment,
            estimation: item.estimation,
            clientlastname: item.clientlastname,
            clientfirstname: item.clientfirstname,
            clientmiddlename: item.clientmiddlename,
            clientphone: item.clientphone,
            namecompany: item.namecompany,
            street: item.street,
            house: item.house,
            office: item.office,
          }]
        };
      });

      console.log("transformedData.child[0]", this.transformedData[0].child)
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
    const totalPages = Math.ceil(this.dataFromServer.length / this.rowsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  openModal(id: string) {
    this.modalService.showDialog = true;
    this.someValue = id;
  }

  confirm1(event: Event, rowId: string, rowNumber: string) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Вы действительно хотите удалить  заявку №' + rowNumber + " ?",
      header: 'Удаление',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      acceptLabel: "Подтвердить",
      rejectLabel: "Отмена",
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Удаление', detail: 'Удалена заявка №' + rowNumber });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Отмена', detail: 'Отмена удаление заявки №' + rowNumber, life: 3000 });
      }
    });
  }

}

