import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


interface job {
  id: string
  Date_of_registration: string;
  User_profile: string;
  Project : string;
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


  products: job[] = [
    {
      id: '1',
      Date_of_registration: '01.01.2024',
      User_profile: 'John Doe',
      Project: 'Project Alpha',
      Card_title: ['Software Engineer', 'Full Stack Developer'],
      child: [
        {
          Specialization: 'Frontend Development',
          Skills: ['JavaScript', 'Angular', 'TypeScript'],
          Work_schedule: 'Full-time',
          Areas: 'Web Development',
          About_me: 'Experienced in developing web applications.',
          Payment_format: 'Hourly'
        }
      ]
    },
    {
      id: '2',
      Date_of_registration: '15.02.2024',
      User_profile: 'Jane Smith',
      Project: 'Project Beta',
      Card_title: ['Web Developer', 'UI/UX Designer'],
      child: [
        {
          Specialization: 'UI/UX Design',
          Skills: ['HTML', 'CSS', 'JavaScript'],
          Work_schedule: 'Part-time',
          Areas: 'Design',
          About_me: 'Skilled in creating user-friendly interfaces.',
          Payment_format: 'Fixed'
        }
      ]
    },
    {
      id: '3',
      Date_of_registration: '10.03.2024',
      User_profile: 'Alice Johnson',
      Project: 'Project Gamma',
      Card_title: ['Data Scientist', 'Machine Learning Engineer'],
      child: [
        {
          Specialization: 'Data Analysis',
          Skills: ['Python', 'Machine Learning', 'R'],
          Work_schedule: 'Full-time',
          Areas: 'Data Science',
          About_me: 'Expert in analyzing and interpreting data.',
          Payment_format: 'Hourly'
        }
      ]
    },
    {
      id: '4',
      Date_of_registration: '25.04.2024',
      User_profile: 'Bob Brown',
      Project: 'Project Delta',
      Card_title: ['DevOps Engineer', 'Cloud Architect'],
      child: [
        {
          Specialization: 'Cloud Infrastructure',
          Skills: ['AWS', 'Docker', 'Kubernetes'],
          Work_schedule: 'Contract',
          Areas: 'Cloud Computing',
          About_me: 'Proficient in setting up and managing cloud infrastructure.',
          Payment_format: 'Fixed'
        }
      ]
    },
    {
      id: '5',
      Date_of_registration: '05.05.2024',
      User_profile: 'Charlie Davis',
      Project: 'Project Epsilon',
      Card_title: ['Project Manager', 'Scrum Master'],
      child: [
        {
          Specialization: 'Project Management',
          Skills: ['Agile', 'Scrum', 'Kanban'],
          Work_schedule: 'Full-time',
          Areas: 'Management',
          About_me: 'Experienced in leading project teams to success.',
          Payment_format: 'Hourly'
        }
      ]
    },
    {
      id: '6',
      Date_of_registration: '12.06.2024',
      User_profile: 'Dana Edwards',
      Project: 'Project Zeta',
      Card_title: ['Graphic Designer', 'Creative Director'],
      child: [
        {
          Specialization: 'Graphic Design',
          Skills: ['Photoshop', 'Illustrator', 'InDesign'],
          Work_schedule: 'Part-time',
          Areas: 'Design',
          About_me: 'Creative and innovative graphic designer.',
          Payment_format: 'Fixed'
        }
      ]
    },
    {
      id: '7',
      Date_of_registration: '18.07.2024',
      User_profile: 'Evan Fox',
      Project: 'Project Eta',
      Card_title: ['Cybersecurity Specialist', 'Ethical Hacker'],
      child: [
        {
          Specialization: 'Cybersecurity',
          Skills: ['Network Security', 'Ethical Hacking', 'Penetration Testing'],
          Work_schedule: 'Full-time',
          Areas: 'Security',
          About_me: 'Dedicated to protecting systems from cyber threats.',
          Payment_format: 'Hourly'
        }
      ]
    },
    {
      id: '8',
      Date_of_registration: '22.08.2024',
      User_profile: 'Fiona Green',
      Project: 'Project Theta',
      Card_title: ['Marketing Specialist', 'SEO Expert'],
      child: [
        {
          Specialization: 'Digital Marketing',
          Skills: ['SEO', 'Content Marketing', 'Social Media'],
          Work_schedule: 'Contract',
          Areas: 'Marketing',
          About_me: 'Expert in crafting effective marketing strategies.',
          Payment_format: 'Fixed'
        }
      ]
    },
    {
      id: '9',
      Date_of_registration: '30.09.2024',
      User_profile: 'George Harris',
      Project: 'Project Iota',
      Card_title: ['Product Manager', 'Product Owner'],
      child: [
        {
          Specialization: 'Product Management',
          Skills: ['Agile', 'Product Development', 'UX'],
          Work_schedule: 'Full-time',
          Areas: 'Product Development',
          About_me: 'Skilled in developing and managing products.',
          Payment_format: 'Hourly'
        }
      ]
    },
    {
      id: '10',
      Date_of_registration: '10.10.2024',
      User_profile: 'Hannah Jones',
      Project: 'Project Kappa',
      Card_title: ['Business Analyst', 'Data Analyst'],
      child: [
        {
          Specialization: 'Business Analysis',
          Skills: ['Data Analysis', 'SQL', 'Excel'],
          Work_schedule: 'Full-time',
          Areas: 'Analysis',
          About_me: 'Adept at analyzing and improving business processes.',
          Payment_format: 'Fixed'
        }
      ]
    },
    {
      id: '11',
      Date_of_registration: '20.11.2024',
      User_profile: 'Ivan Kim',
      Project: 'Project Lambda',
      Card_title: ['Network Engineer', 'Systems Administrator'],
      child: [
        {
          Specialization: 'Networking',
          Skills: ['Cisco', 'Linux', 'Network Troubleshooting'],
          Work_schedule: 'Full-time',
          Areas: 'IT',
          About_me: 'Experienced in managing network systems.',
          Payment_format: 'Hourly'
        }
      ]
    },
    {
      id: '12',
      Date_of_registration: '05.12.2024',
      User_profile: 'Jack Lee',
      Project: 'Project Mu',
      Card_title: ['QA Engineer', 'Automation Tester'],
      child: [
        {
          Specialization: 'Quality Assurance',
          Skills: ['Selenium', 'Test Automation', 'Manual Testing'],
          Work_schedule: 'Part-time',
          Areas: 'Testing',
          About_me: 'Passionate about ensuring software quality.',
          Payment_format: 'Fixed'
        }
      ]
    },
    {
      id: '13',
      Date_of_registration: '15.12.2024',
      User_profile: 'Karen Moore',
      Project: 'Project Nu',
      Card_title: ['HR Specialist', 'Recruiter'],
      child: [
        {
          Specialization: 'Human Resources',
          Skills: ['Recruitment', 'Employee Relations', 'HR Policies'],
          Work_schedule: 'Full-time',
          Areas: 'HR',
          About_me: 'Dedicated to managing employee relations and recruitment.',
          Payment_format: 'Hourly'
        }
      ]
    }
  ];

  clonedProducts: { [s: string]: job } = {};

  constructor(private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.fetchData();
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
