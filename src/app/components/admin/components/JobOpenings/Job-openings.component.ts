import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { JobOpeningsService } from './Job-openings.service';

interface job {
  id: string
  Date_of_registration: string;
  User_profile: string;
  Project: string;
  Card_title: string[];
  child: [{
    Specialization: string;
    Skills: string[];
    Work_schedule: string;
    Areas: string;
    About_me: string;
    Payment_format: string;
  }]
}

@Component({
  selector: 'app-resume',
  templateUrl: './Job-openings.component.html',
  styleUrls: ['./Job-openings.component.css'],
  standalone: true,
  imports: [TableModule, ButtonModule, RippleModule, ToastModule, ConfirmDialogModule],
})
export class JobOpeningsComponent {


  products: any[] = [
    {
      id: '1',
      Date_of_registration: '2023-01-01',
      User_profile: 'Компания A',
      Project: 'Проект X',
      Card_title: ['Дизайнер UX/UI'],
      child: [{
        Specialization: 'Дизайнер',
        Skills: ['Photoshop', 'Figma', 'Sketch'],
        Work_schedule: 'Полный день',
        Areas: 'Веб-дизайн, мобильные приложения',
        About_me: 'Креативный дизайнер с 5-летним опытом',
        Payment_format: 'По часам'
      }]
    },
    {
      id: '2',
      Date_of_registration: '2023-01-15',
      User_profile: 'Компания B',
      Project: 'Проект Y',
      Card_title: ['Разработчик Java'],
      child: [{
        Specialization: 'Разработчик',
        Skills: ['Java', 'Spring', 'Hibernate'],
        Work_schedule: 'Удаленная работа',
        Areas: 'Финансовые технологии, банкинг',
        About_me: 'Опытный разработчик с 7-летним стажем',
        Payment_format: 'Фиксированная зарплата'
      }]
    },
    {
      id: '3',
      Date_of_registration: '2023-02-01',
      User_profile: 'Компания C',
      Project: 'Проект Z',
      Card_title: ['Аналитик данных'],
      child: [{
        Specialization: 'Аналитик данных',
        Skills: ['SQL', 'Python', 'R'],
        Work_schedule: 'Частичная занятость',
        Areas: 'Маркетинговые исследования, биг дата',
        About_me: 'Аналитик с 3-летним опытом',
        Payment_format: 'По проекту'
      }]
    },
    {
      id: '4',
      Date_of_registration: '2023-02-20',
      User_profile: 'Компания D',
      Project: 'Проект A',
      Card_title: ['DevOps инженер'],
      child: [{
        Specialization: 'DevOps инженер',
        Skills: ['Docker', 'Kubernetes', 'AWS'],
        Work_schedule: 'Полный день',
        Areas: 'Облачные технологии, CI/CD',
        About_me: 'Специалист по DevOps с 4-летним опытом',
        Payment_format: 'По часам'
      }]
    },
    {
      id: '5',
      Date_of_registration: '2023-03-05',
      User_profile: 'Компания E',
      Project: 'Проект B',
      Card_title: ['Системный администратор'],
      child: [{
        Specialization: 'Системный администратор',
        Skills: ['Linux', 'Windows Server', 'Networking'],
        Work_schedule: 'Удаленная работа',
        Areas: 'Системное администрирование, безопасность',
        About_me: 'Администратор сетей с 6-летним опытом',
        Payment_format: 'Фиксированная зарплата'
      }]
    },
    {
      id: '6',
      Date_of_registration: '2023-03-18',
      User_profile: 'Компания F',
      Project: 'Проект C',
      Card_title: ['Тестировщик ПО'],
      child: [{
        Specialization: 'Тестировщик ПО',
        Skills: ['Selenium', 'JUnit', 'Postman'],
        Work_schedule: 'Полный день',
        Areas: 'Автоматизированное тестирование, API тестирование',
        About_me: 'QA инженер с 5-летним опытом',
        Payment_format: 'По проекту'
      }]
    },
    {
      id: '7',
      Date_of_registration: '2023-04-02',
      User_profile: 'Компания G',
      Project: 'Проект D',
      Card_title: ['Backend разработчик'],
      child: [{
        Specialization: 'Backend разработчик',
        Skills: ['Node.js', 'Express', 'MongoDB'],
        Work_schedule: 'Удаленная работа',
        Areas: 'Веб-разработка, REST API',
        About_me: 'Опытный разработчик бэкенда с 5-летним стажем',
        Payment_format: 'Фиксированная зарплата'
      }]
    },
    {
      id: '8',
      Date_of_registration: '2023-04-17',
      User_profile: 'Компания H',
      Project: 'Проект E',
      Card_title: ['Специалист по маркетингу'],
      child: [{
        Specialization: 'Маркетолог',
        Skills: ['SEO', 'Google Analytics', 'SMM'],
        Work_schedule: 'Частичная занятость',
        Areas: 'Цифровой маркетинг, контент-маркетинг',
        About_me: 'Опытный маркетолог с 6-летним стажем',
        Payment_format: 'По проекту'
      }]
    },
    {
      id: '9',
      Date_of_registration: '2023-05-01',
      User_profile: 'Компания I',
      Project: 'Проект F',
      Card_title: ['Фронтенд разработчик'],
      child: [{
        Specialization: 'Фронтенд разработчик',
        Skills: ['React', 'Redux', 'CSS'],
        Work_schedule: 'Полный день',
        Areas: 'Веб-разработка, SPA',
        About_me: 'Разработчик интерфейсов с 4-летним опытом',
        Payment_format: 'По часам'
      }]
    },
    {
      id: '10',
      Date_of_registration: '2023-05-15',
      User_profile: 'Компания J',
      Project: 'Проект G',
      Card_title: ['Архитектор систем'],
      child: [{
        Specialization: 'Архитектор систем',
        Skills: ['Microservices', 'AWS', 'Kubernetes'],
        Work_schedule: 'Удаленная работа',
        Areas: 'Системная архитектура, облачные технологии',
        About_me: 'Архитектор с 10-летним опытом',
        Payment_format: 'Фиксированная зарплата'
      }]
    },
    {
      id: '11',
      Date_of_registration: '2023-06-01',
      User_profile: 'Компания K',
      Project: 'Проект H',
      Card_title: ['Менеджер проектов'],
      child: [{
        Specialization: 'Менеджер проектов',
        Skills: ['Scrum', 'Agile', 'JIRA'],
        Work_schedule: 'Полный день',
        Areas: 'Управление проектами, ИТ',
        About_me: 'Менеджер с 8-летним опытом',
        Payment_format: 'По проекту'
      }]
    },
    {
      id: '12',
      Date_of_registration: '2023-06-15',
      User_profile: 'Компания L',
      Project: 'Проект I',
      Card_title: ['Специалист по безопасности'],
      child: [{
        Specialization: 'Специалист по безопасности',
        Skills: ['Pentesting', 'Firewalls', 'Encryption'],
        Work_schedule: 'Удаленная работа',
        Areas: 'Кибербезопасность, информационная безопасность',
        About_me: 'Специалист с 6-летним опытом',
        Payment_format: 'Фиксированная зарплата'
      }]
    }]

  clonedProducts: { [s: string]: job } = {};

  constructor(private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef, private jobOpeningsService: JobOpeningsService
  ) { }

  ngOnInit() {
    // this.fetchData();
  }

  onRowEditInit(product: job) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: job) {
  }

  onRowEditCancel(product: job, index: number) {
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
    this.jobOpeningsService.sendData().subscribe(
      (data: any) => {
        this.products = data
      },
      (error: any) => {
      }
    );
  }

  updateTable(data: any) {
    console.log('Updating table with data:', data);
    this.products = data;
    this.updatePages();
  }

  //страницы и количество строк
  onRowsPerPageChange(): void {
    this.currentPage = 1;
    this.updatePages();
  }

  rowsPerPage: number = 10; // Количество строк на странице
  currentPage: number = 1; // Текущая страница
  pages: number[] = []; // Список страниц
  someValue: string = ''


  onPageChange(page: number): void {
    this.currentPage = page;
  }
  updatePages(): void {
    const totalPages = Math.ceil(this.products.length / this.rowsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }


  confirm1(event: Event, productId: string) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Вы действительно хотите удалить юзера?',
      header: 'Подтверждение удаления',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-danger',
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
      accept: () => {
        this.jobOpeningsService.deleteItem(Number(productId)).subscribe(
          () => {
            // Удаление юзера прошло успешно
            this.messageService.add({ severity: 'success', summary: 'Успешно', detail: 'Юзер успешно удален' });
            // Обновляем интерфейс (например, список юзеров)
            this.refreshUserList();
          },
          (error: any) => {
            // Обработка ошибок при удалении
            this.messageService.add({ severity: 'error', summary: 'Ошибка', detail: 'Ошибка при удалении юзера' });
            console.error('Ошибка при удалении юзера:', error);
          }
        );
      },
      reject: () => {
        // Отмена удаления
        this.messageService.add({ severity: 'info', summary: 'Отмена', detail: 'Отмена удаления юзера' });
      }
    });
  }

  refreshUserList() {
    this.fetchData();
  }


}
