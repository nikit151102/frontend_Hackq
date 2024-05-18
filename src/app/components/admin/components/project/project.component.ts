import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

interface project {
  id: string
  Date_of_registration: string;
  User_profile: string;
  Title: string;
  Status: string;
  Sphere: string;
  child: [{
    Description: string;
    Links: string;
    Done: string;
    Tasks: string;
    Team: string;
    Project_news: string;
    Ads: string;
  }]
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  standalone: true,
  imports: [TableModule, ButtonModule, RippleModule, ToastModule, ConfirmDialogModule],
})
export class ProjectComponent {
  products: project[] = [
    {
      id: '1',
      Date_of_registration: '01.01.2024',
      User_profile: 'John Doe',
      Title: 'Project Alpha',
      Status: 'Active',
      Sphere: 'Technology',
      child: [
        {
          Description: 'A technology project focused on developing a new software application.',
          Links: 'https://example.com/alpha',
          Done: 'Completed initial design and prototyping.',
          Tasks: 'Develop, test, and deploy the application.',
          Team: 'John Doe, Jane Smith, Bob Brown',
          Project_news: 'Beta version released.',
          Ads: 'Hiring additional developers.'
        }
      ]
    },
    {
      id: '2',
      Date_of_registration: '15.02.2024',
      User_profile: 'Jane Smith',
      Title: 'Project Beta',
      Status: 'Completed',
      Sphere: 'Healthcare',
      child: [
        {
          Description: 'A healthcare project aimed at improving patient management systems.',
          Links: 'https://example.com/beta',
          Done: 'System development and testing completed.',
          Tasks: 'Implement system in hospitals.',
          Team: 'Jane Smith, Alice Johnson, Dana Edwards',
          Project_news: 'Project successfully implemented in two hospitals.',
          Ads: 'Seeking feedback from healthcare professionals.'
        }
      ]
    }
  ];

  clonedProducts: { [s: string]: project } = {};

  constructor(private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  onRowEditInit(product: project) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: project) {
  }

  onRowEditCancel(product: project, index: number) {
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
