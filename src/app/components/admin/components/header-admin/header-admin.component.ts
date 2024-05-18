import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
  standalone: true,
  imports: [MenubarModule]
})
export class HeaderAdminComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(private router: Router){}

  ngOnInit() {
    this.items = [
      {
        label: 'Профили юзеров',
        icon: 'pi pi-fw pi-calendar',
        routerLink: ['userprofiles']
      },
      {
        label: 'Резюме',
        icon: 'pi pi-fw pi-file',
        routerLink: ['resume']
      },
      {
        label: 'Вакансии',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['JobOpenings']
      },
      {
        label: 'Проекты',
        icon: 'pi pi-fw pi-user',
        routerLink: ['project']
      }
    ];
  }

}