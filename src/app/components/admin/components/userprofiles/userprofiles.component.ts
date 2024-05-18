import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UserprofilesService } from './userprofiles.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';



interface User {
  id: string;
  dateOfRegistration: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  cityOfResidence: string;
  Specialization: string;
  Mail: string;
  Telephone: string;
  Telegram: string;
  About_me: string;
  Free_link: string;
  Own_link: string;
}

@Component({
  selector: 'app-userprofiles',
  templateUrl: './userprofiles.component.html',
  styleUrls: ['./userprofiles.component.css'],
  standalone: true,
  imports: [TableModule, ButtonModule, RippleModule, ToastModule, ConfirmDialogModule]
})
export class UserprofilesComponent implements OnInit {
  products: User[] = [];
  clonedProducts: { [s: string]: User } = {};

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private userprofilesService: UserprofilesService
  ) { }

  ngOnInit() {
    this.userprofilesService.sendUsers().pipe(
      catchError(error => {
        console.error('AJAX error:', error);
        return of([]);
      })
    ).subscribe(
      (data: any) => {
        console.log(data);
        this.products = data;
        console.log(this.products);
      }
    );
    this.fetchData();
  }
  
  onRowEditInit(product: User) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditCancel(product: User, index: number) {
    this.products[index] = this.clonedProducts[product.id as string];
    delete this.clonedProducts[product.id as string];
  }

  first = 0;
  rows = 10;

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

  fetchData() {
    // this.dataService.sendDataToServer().subscribe((response) => {
    //   this.updateTable(response);
    //   this.cdr.detectChanges();
    // });
  }

  updateTable(data: any) {
    console.log('Updating table with data:', data);
    this.products = data;
    this.updatePages();
  }

  onRowsPerPageChange(): void {
    this.currentPage = 1;
    this.updatePages();
  }

  rowsPerPage: number = 10;
  currentPage: number = 1;
  pages: number[] = [];

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  updatePages(): void {
    const totalPages = Math.ceil(this.products.length / this.rowsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  confirm1(event: Event, rowId: string) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Вы действительно хотите удалить юзера ?',
      header: 'Удаление',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      acceptLabel: "Подтвердить",
      rejectLabel: "Отмена",
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Удаление', detail: 'Удален юзер' });
        console.log("")
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Отмена', detail: 'Отмена удаления юзера', life: 3000 });
      }
    });
  }
}
