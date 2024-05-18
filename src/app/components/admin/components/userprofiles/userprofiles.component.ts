import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


interface user {
  id: string
  Date_of_registration: string;
  First_Name: string;
  Last_Name: string;
  Paul: string;
  Age: number;
  City_of_residence: string;
  child: [{
    Specialization: string;
    Mail: string;
    Telephone: string;
    Telegram: string;
    About_me: string;
    Free_link: string;
    Own_link: string;
  }]
}

@Component({
  selector: 'app-userprofiles',
  templateUrl: './userprofiles.component.html',
  styleUrls: ['./userprofiles.component.css'],
  standalone: true,
  imports: [TableModule, ButtonModule, RippleModule, ToastModule, ConfirmDialogModule],
  styles:['width: 90%;']
})
export class UserprofilesComponent {


  public products: user[] = [
    {
      id: '1',
      Date_of_registration:'2024-01-01',
      First_Name: 'John',
      Last_Name: 'Doe',
      Paul: 'Male',
      Age: 30,
      City_of_residence: 'New York',
      child: [{
        Specialization: 'Software Engineer',
        Mail: 'john.doe@example.com',
        Telephone: '+1234567890',
        Telegram: '@johndoe',
        About_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        Free_link: 'https://example.com/johndoe',
        Own_link: 'https://johndoe.com'
      }]

    },
    {
      id: '2',
      Date_of_registration: '2024-02-15',
      First_Name: 'Jane',
      Last_Name: 'Smith',
      Paul: 'Female',
      Age: 25,
      City_of_residence: 'Los Angeles',
      child: [{
        Specialization: 'Web Developer',
        Mail: 'jane.smith@example.com',
        Telephone: '+0987654321',
        Telegram: '@janesmith',
        About_me: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
        Free_link: 'https://example.com/janesmith',
        Own_link: 'https://janesmith.com'
      }]

    },
    {
      id: '3',
      Date_of_registration: '2024-03-10',
      First_Name: 'Michael',
      Last_Name: 'Johnson',
      Paul: 'Male',
      Age: 35,
      City_of_residence: 'Chicago',
      child: [{
        Specialization: 'Data Scientist',
        Mail: 'michael.johnson@example.com',
        Telephone: '+1122334455',
        Telegram: '@michaeljohnson',
        About_me: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
        Free_link: 'https://example.com/michaeljohnson',
        Own_link: 'https://michaeljohnson.com'
      }]

    },
    {
      id: '4',
      Date_of_registration: '2024-04-20',
      First_Name: 'Emily',
      Last_Name: 'Brown',
      Paul: 'Female',
      Age: 28,
      City_of_residence: 'San Francisco',
      child: [{
        Specialization: 'UX/UI Designer',
        Mail: 'emily.brown@example.com',
        Telephone: '+3344556677',
        Telegram: '@emilybrown',
        About_me: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        Free_link: 'https://example.com/emilybrown',
        Own_link: 'https://emilybrown.com'
      }]

    },
    {
      id: '5',
      Date_of_registration: '2024-05-05',
      First_Name: 'William',
      Last_Name: 'Taylor',
      Paul: 'Male',
      Age: 40,
      City_of_residence: 'Houston',
      child: [{
        Specialization: 'Project Manager',
        Mail: 'william.taylor@example.com',
        Telephone: '+5566778899',
        Telegram: '@williamtaylor',
        About_me: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        Free_link: 'https://example.com/williamtaylor',
        Own_link: 'https://williamtaylor.com'
      }]

    },
    {
      id: '6',
      Date_of_registration:'2024-06-15',
      First_Name: 'Olivia',
      Last_Name: 'Wilson',
      Paul: 'Female',
      Age: 32,
      City_of_residence: 'Seattle',
      child: [{
        Specialization: 'Marketing Specialist',
        Mail: 'olivia.wilson@example.com',
        Telephone: '+9900112233',
        Telegram: '@oliviawilson',
        About_me: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
        Free_link: 'https://example.com/oliviawilson',
        Own_link: 'https://oliviawilson.com'
      }]

    }]

  clonedProducts: { [s: string]: user } = {};

  constructor(private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  onRowEditInit(product: user) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: user) {
  }

  onRowEditCancel(product: user, index: number) {
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
