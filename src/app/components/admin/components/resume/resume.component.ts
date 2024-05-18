import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


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


  products: resume[] = [
    {
      id: '1',
      Date_of_registration: '01.01.2024',
      User_profile: 'John Doe',
      Specialization: 'Software Engineer',
      Skills: ['JavaScript', 'TypeScript', 'Angular'],
      Role: 'Developer',
      child: [
        {
          Motivation: 'To build innovative software solutions.',
          Specialization: 'Frontend Development',
          time_allocated_per_week: '40 hours',
          Job_status: 'Employed',
          Areas: 'Web Development',
          About_me: 'Passionate about creating web applications.',
          Free_link: 'https://example.com/johndoe',
          Own_link: 'https://johndoe.dev',
        }
      ]
    },
    {
      id: '2',
      Date_of_registration: '15.02.2024',
      User_profile: 'Jane Smith',
      Specialization: 'Web Developer',
      Skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      Role: 'Developer',
      child: [
        {
          Motivation: 'To design user-friendly web interfaces.',
          Specialization: 'UI/UX Design',
          time_allocated_per_week: '35 hours',
          Job_status: 'Freelancer',
          Areas: 'Frontend Development',
          About_me: 'Enjoys crafting beautiful and functional websites.',
          Free_link: 'https://example.com/janesmith',
          Own_link: 'https://janesmith.com',
        }
      ]
    },
    {
      id: '3',
      Date_of_registration: '10.03.2024',
      User_profile: 'Alice Johnson',
      Specialization: 'Data Scientist',
      Skills: ['Python', 'R', 'Machine Learning'],
      Role: 'Data Analyst',
      child: [
        {
          Motivation: 'To analyze data and extract valuable insights.',
          Specialization: 'Machine Learning',
          time_allocated_per_week: '40 hours',
          Job_status: 'Employed',
          Areas: 'Data Analysis',
          About_me: 'Loves working with data and algorithms.',
          Free_link: 'https://example.com/alicejohnson',
          Own_link: 'https://alicejohnson.ai',
        }
      ]
    },
    {
      id: '4',
      Date_of_registration: '25.04.2024',
      User_profile: 'Bob Brown',
      Specialization: 'DevOps Engineer',
      Skills: ['AWS', 'Docker', 'Kubernetes'],
      Role: 'Engineer',
      child: [
        {
          Motivation: 'To streamline development and deployment processes.',
          Specialization: 'Cloud Infrastructure',
          time_allocated_per_week: '45 hours',
          Job_status: 'Employed',
          Areas: 'DevOps',
          About_me: 'Passionate about automation and cloud technologies.',
          Free_link: 'https://example.com/bobbrown',
          Own_link: 'https://bobbrown.devops',
        }
      ]
    },
    {
      id: '5',
      Date_of_registration: '05.05.2024',
      User_profile: 'Charlie Davis',
      Specialization: 'Project Manager',
      Skills: ['Project Management', 'Agile', 'Scrum'],
      Role: 'Manager',
      child: [
        {
          Motivation: 'To lead teams to success.',
          Specialization: 'Project Management',
          time_allocated_per_week: '40 hours',
          Job_status: 'Employed',
          Areas: 'Management',
          About_me: 'Enjoys coordinating and managing projects.',
          Free_link: 'https://example.com/charliedavis',
          Own_link: 'https://charliedavis.pm',
        }
      ]
    },
    {
      id: '6',
      Date_of_registration: '12.06.2024',
      User_profile: 'Dana Edwards',
      Specialization: 'Graphic Designer',
      Skills: ['Photoshop', 'Illustrator', 'InDesign'],
      Role: 'Designer',
      child: [
        {
          Motivation: 'To create visually stunning designs.',
          Specialization: 'Graphic Design',
          time_allocated_per_week: '30 hours',
          Job_status: 'Freelancer',
          Areas: 'Design',
          About_me: 'Loves working on creative projects.',
          Free_link: 'https://example.com/danaedwards',
          Own_link: 'https://danaedwards.design',
        }
      ]
    },
    {
      id: '7',
      Date_of_registration: '18.07.2024',
      User_profile: 'Evan Fox',
      Specialization: 'Cybersecurity Specialist',
      Skills: ['Cybersecurity', 'Network Security', 'Ethical Hacking'],
      Role: 'Security Specialist',
      child: [
        {
          Motivation: 'To protect systems from cyber threats.',
          Specialization: 'Cybersecurity',
          time_allocated_per_week: '50 hours',
          Job_status: 'Employed',
          Areas: 'Security',
          About_me: 'Passionate about security and technology.',
          Free_link: 'https://example.com/evanfox',
          Own_link: 'https://evanfox.security',
        }
      ]
    },
    {
      id: '8',
      Date_of_registration: '22.08.2024',
      User_profile: 'Fiona Green',
      Specialization: 'Marketing Specialist',
      Skills: ['SEO', 'Content Marketing', 'Social Media'],
      Role: 'Marketer',
      child: [
        {
          Motivation: 'To create effective marketing strategies.',
          Specialization: 'Digital Marketing',
          time_allocated_per_week: '38 hours',
          Job_status: 'Employed',
          Areas: 'Marketing',
          About_me: 'Enjoys crafting marketing campaigns.',
          Free_link: 'https://example.com/fionagreen',
          Own_link: 'https://fionagreen.marketing',
        }
      ]
    },
    {
      id: '9',
      Date_of_registration: '30.09.2024',
      User_profile: 'George Harris',
      Specialization: 'Product Manager',
      Skills: ['Product Management', 'UX', 'Agile'],
      Role: 'Manager',
      child: [
        {
          Motivation: 'To build products that users love.',
          Specialization: 'Product Management',
          time_allocated_per_week: '40 hours',
          Job_status: 'Employed',
          Areas: 'Product Development',
          About_me: 'Passionate about product development.',
          Free_link: 'https://example.com/georgeharris',
          Own_link: 'https://georgeharris.product',
        }
      ]
    },
    {
      id: '10',
      Date_of_registration: '10.10.2024',
      User_profile: 'Hannah Jones',
      Specialization: 'Business Analyst',
      Skills: ['Business Analysis', 'Data Analysis', 'SQL'],
      Role: 'Analyst',
      child: [
        {
          Motivation: 'To analyze business processes and suggest improvements.',
          Specialization: 'Business Analysis',
          time_allocated_per_week: '40 hours',
          Job_status: 'Employed',
          Areas: 'Business Analysis',
          About_me: 'Enjoys analyzing and improving processes.',
          Free_link: 'https://example.com/hannahjones',
          Own_link: 'https://hannahjones.biz',
        }
      ]
    },
    {
      id: '11',
      Date_of_registration: '20.11.2024',
      User_profile: 'Ivan Kim',
      Specialization: 'Network Engineer',
      Skills: ['Networking', 'Cisco', 'Linux'],
      Role: 'Engineer',
      child: [
        {
          Motivation: 'To maintain and optimize network infrastructure.',
          Specialization: 'Network Engineering',
          time_allocated_per_week: '42 hours',
          Job_status: 'Employed',
          Areas: 'Networking',
          About_me: 'Loves working with network technologies.',
          Free_link: 'https://example.com/ivankim',
          Own_link: 'https://ivankim.network',
        }
      ]
    },
    {
      id: '12',
      Date_of_registration: '05.12.2024',
      User_profile: 'Jack Lee',
      Specialization: 'QA Engineer',
      Skills: ['Testing', 'Automation', 'Selenium'],
      Role: 'Tester',
      child: [
        {
          Motivation: 'To ensure the quality of software products.',
          Specialization: 'Quality Assurance',
          time_allocated_per_week: '40 hours',
          Job_status: 'Employed',
          Areas: 'Quality Assurance',
          About_me: 'Passionate about testing and quality.',
          Free_link: 'https://example.com/jacklee',
          Own_link: 'https://jacklee.qa',
        }
      ]
    }
  ];

  clonedProducts: { [s: string]: resume } = {};

  constructor(private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef,
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
