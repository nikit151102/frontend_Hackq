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

  products: any[] = []

  clonedProducts: { [s: string]: resume } = {};

  constructor(private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef,
    private resumeService:ResumeService
  ) { }

  ngOnInit() {
    this.fetchData();
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
