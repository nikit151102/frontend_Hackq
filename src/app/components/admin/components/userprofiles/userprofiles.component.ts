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
  
  clonedProducts: { [s: string]: User } = {};

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private userprofilesService: UserprofilesService
  ) { }

  ngOnInit() {
    // this.userprofilesService.sendUsers().pipe(
    //   catchError(error => {
    //     console.error('AJAX error:', error);
    //     return of([]);
    //   })
    // ).subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.products = data;
    //     console.log(this.products);
    //   }
    // );
    // this.fetchData();
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
   products: User[] = [
    {
      id: '1',
      dateOfRegistration: '2022-01-01',
      firstName: 'Иван',
      lastName: 'Иванов',
      gender: 'Мужской',
      age: 30,
      cityOfResidence: 'Москва',
      Specialization: 'Разработчик Java',
      Mail: 'ivan.ivanov@example.com',
      Telephone: '+79991234567',
      Telegram: '@ivanov_ivan',
      About_me: 'Опытный Java разработчик',
      Free_link: 'ivanov_dev',
      Own_link: 'ivanov_dev_link'
    },
    {
      id: '2',
      dateOfRegistration: '2022-01-15',
      firstName: 'Анна',
      lastName: 'Смирнова',
      gender: 'Женский',
      age: 28,
      cityOfResidence: 'Санкт-Петербург',
      Specialization: 'Веб-дизайнер',
      Mail: 'anna.smirnova@example.com',
      Telephone: '+79999876543',
      Telegram: '@smirnova_anna',
      About_me: 'Опытный дизайнер веб-интерфейсов',
      Free_link: 'smirnova_design',
      Own_link: 'smirnova_design_link'
    },
    {
      id: '3',
      dateOfRegistration: '2022-02-03',
      firstName: 'Петр',
      lastName: 'Петров',
      gender: 'Мужской',
      age: 35,
      cityOfResidence: 'Екатеринбург',
      Specialization: 'Аналитик данных',
      Mail: 'petr.petrov@example.com',
      Telephone: '+79997654321',
      Telegram: '@petrov_petr',
      About_me: 'Опытный аналитик данных',
      Free_link: 'petrov_analytics',
      Own_link: 'petrov_analytics_link'
    },
    {
      id: '4',
      dateOfRegistration: '2022-02-20',
      firstName: 'Мария',
      lastName: 'Кузнецова',
      gender: 'Женский',
      age: 32,
      cityOfResidence: 'Новосибирск',
      Specialization: 'DevOps инженер',
      Mail: 'maria.kuznetsova@example.com',
      Telephone: '+79996543210',
      Telegram: '@kuznetsova_maria',
      About_me: 'Опытный специалист по DevOps',
      Free_link: 'kuznetsova_devops',
      Own_link: 'kuznetsova_devops_link'
    },
    {
      id: '5',
      dateOfRegistration: '2022-03-05',
      firstName: 'Алексей',
      lastName: 'Сидоров',
      gender: 'Мужской',
      age: 29,
      cityOfResidence: 'Казань',
      Specialization: 'Системный администратор',
      Mail: 'aleksey.sidorov@example.com',
      Telephone: '+79994433221',
      Telegram: '@sidorov_aleksey',
      About_me: 'Опытный администратор сетей',
      Free_link: 'sidorov_sysadmin',
      Own_link: 'sidorov_sysadmin_link'
    },
    {
      id: '6',
      dateOfRegistration: '2022-03-18',
      firstName: 'Елена',
      lastName: 'Иванова',
      gender: 'Женский',
      age: 27,
      cityOfResidence: 'Самара',
      Specialization: 'Тестировщик ПО',
      Mail: 'elena.ivanova@example.com',
      Telephone: '+79992233445',
      Telegram: '@ivanova_elena',
      About_me: 'Опытный QA инженер',
      Free_link: 'ivanova_qa',
      Own_link: 'ivanova_qa_link'
    },
    {
      id: '7',
      dateOfRegistration: '2022-04-02',
      firstName: 'Дмитрий',
      lastName: 'Козлов',
      gender: 'Мужской',
      age: 33,
      cityOfResidence: 'Ростов-на-Дону',
      Specialization: 'Backend разработчик',
      Mail: 'dmitriy.kozlov@example.com',
      Telephone: '+79995678900',
      Telegram: '@kozlov_dmitriy',
      About_me: 'Опытный разработчик бэкенда',
      Free_link: 'kozlov_backend',
      Own_link: 'kozlov_backend_link'
    },
    {
      id: '8',
      dateOfRegistration: '2022-04-17',
      firstName: 'Ольга',
      lastName: 'Морозова',
      gender: 'Женский',
      age: 31,
      cityOfResidence: 'Воронеж',
      Specialization: 'Специалист по маркетингу',
      Mail: 'olga.morozova@example.com',
      Telephone: '+79998887766',
      Telegram: '@morozova_olga',
      About_me: 'Опытный маркетолог',
      Free_link: 'morozova_marketing',
      Own_link: 'morozova_marketing_link'
    }]
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
