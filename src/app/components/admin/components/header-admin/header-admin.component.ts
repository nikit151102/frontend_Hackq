import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.items = [
      {
        label: 'Профили юзеров',
        icon: 'pi pi-fw pi-calendar',

      },
      {
        label: 'Резюме',
        icon: 'pi pi-fw pi-file',

      },
      {
        label: 'Вакансии',
        icon: 'pi pi-fw pi-pencil',

      },
      {
        label: 'Проекты',
        icon: 'pi pi-fw pi-user',

      }

    ];
  }
}