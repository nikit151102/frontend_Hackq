import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ResumeService } from './resume.service';


interface resume {
  id: string
  Date_of_registration: string;
  User_profile: string;
  Specialization: string;
  Skills: string[];
  Role: string;
  child: [{
    Motivation: string;
    Specialization: string;
    time_allocated_per_week: string;
    Job_status: string;
    Areas: string;
    About_me: string;
    Free_link: string;
    Own_link: string;
  }]
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  standalone: true,
  imports: [TableModule, ButtonModule, RippleModule, ToastModule, ConfirmDialogModule],
})
export class ResumeComponent {

  products = [
    {
      id: '1',
      Date_of_registration: '2023-01-01',
      User_profile: 'Иван Иванов',
      Specialization: 'Разработчик Java',
      Skills: ['Java', 'Spring', 'Hibernate'],
      Role: 'Backend разработчик',
      child: [{
        Motivation: 'Развитие карьеры',
        Specialization: 'Java',
        time_allocated_per_week: '40 часов',
        Job_status: 'Занят',
        Areas: 'Разработка ПО',
        About_me: 'Опытный Java разработчик с 5-летним стажем.',
        Free_link: 'ivanov_dev',
        Own_link: 'ivanov_dev_link'
      }]
    },
    {
      id: '2',
      Date_of_registration: '2023-01-15',
      User_profile: 'Анна Смирнова',
      Specialization: 'Веб-дизайнер',
      Skills: ['Photoshop', 'Figma', 'HTML/CSS'],
      Role: 'Дизайнер',
      child: [{
        Motivation: 'Креативная работа',
        Specialization: 'Дизайн',
        time_allocated_per_week: '35 часов',
        Job_status: 'Занят',
        Areas: 'Веб-дизайн, UX/UI',
        About_me: 'Креативный дизайнер с 3-летним опытом.',
        Free_link: 'smirnova_design',
        Own_link: 'smirnova_design_link'
      }]
    },
    {
      id: '3',
      Date_of_registration: '2023-02-03',
      User_profile: 'Петр Петров',
      Specialization: 'Аналитик данных',
      Skills: ['SQL', 'Python', 'R'],
      Role: 'Аналитик',
      child: [{
        Motivation: 'Анализ данных',
        Specialization: 'Data Science',
        time_allocated_per_week: '40 часов',
        Job_status: 'Свободен',
        Areas: 'Анализ данных, BI',
        About_me: 'Специалист по анализу данных с опытом в финансовом секторе.',
        Free_link: 'petrov_analytics',
        Own_link: 'petrov_analytics_link'
      }]
    },
    {
      id: '4',
      Date_of_registration: '2023-02-20',
      User_profile: 'Мария Кузнецова',
      Specialization: 'DevOps инженер',
      Skills: ['Docker', 'Kubernetes', 'CI/CD'],
      Role: 'Инженер DevOps',
      child: [{
        Motivation: 'Автоматизация процессов',
        Specialization: 'DevOps',
        time_allocated_per_week: '45 часов',
        Job_status: 'Занят',
        Areas: 'CI/CD, Облачные технологии',
        About_me: 'DevOps инженер с опытом работы в крупных проектах.',
        Free_link: 'kuznetsova_devops',
        Own_link: 'kuznetsova_devops_link'
      }]
    },
    {
      id: '5',
      Date_of_registration: '2023-03-05',
      User_profile: 'Алексей Сидоров',
      Specialization: 'Системный администратор',
      Skills: ['Linux', 'Windows Server', 'Networking'],
      Role: 'Системный администратор',
      child: [{
        Motivation: 'Поддержка инфраструктуры',
        Specialization: 'Системное администрирование',
        time_allocated_per_week: '40 часов',
        Job_status: 'Занят',
        Areas: 'Сетевое администрирование, Сервера',
        About_me: 'Опытный системный администратор с 7-летним стажем.',
        Free_link: 'sidorov_sysadmin',
        Own_link: 'sidorov_sysadmin_link'
      }]
    },
    {
      id: '6',
      Date_of_registration: '2023-03-18',
      User_profile: 'Елена Иванова',
      Specialization: 'Тестировщик ПО',
      Skills: ['Selenium', 'JUnit', 'TestNG'],
      Role: 'QA инженер',
      child: [{
        Motivation: 'Обеспечение качества',
        Specialization: 'Тестирование ПО',
        time_allocated_per_week: '38 часов',
        Job_status: 'Свободен',
        Areas: 'Автоматизация тестирования, Ручное тестирование',
        About_me: 'QA инженер с опытом в автоматизации тестирования.',
        Free_link: 'ivanova_qa',
        Own_link: 'ivanova_qa_link'
      }]
    }]

  clonedProducts: { [s: string]: resume } = {};

  constructor(private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef,
    private resumeService:ResumeService
  ) { }

  ngOnInit() {
    // this.fetchData();
  }

  onRowEditInit(product: resume) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: resume) {
  }

  onRowEditCancel(product: resume, index: number) {
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
    this.resumeService.sendResumes().subscribe((response) => {
      console.log(response)
      this.updateTable(response);
      this.cdr.detectChanges();
    });
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
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Отмена', detail: 'Отмена удаления юзера', life: 3000 });
      }
    });
  }

}
