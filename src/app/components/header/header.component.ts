import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterLink, AvatarModule, NgIf, ButtonModule, MenuModule, ToastModule],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  items: MenuItem[] | undefined;
  expanded: boolean = true;
  token: any

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.loadMenuItems();
  }

  loadMenuItems() {
    const counts: any = {
      vacancies: 1,
      projects: 0,
      resume: 0
    };

    const menuItems: MenuItem[] = [];
    menuItems.push(
      counts.resume > 0 ? { label: 'Моя страница', icon: 'pi pi-times', command: () => { } } : { label: 'Создать резюме', icon: 'pi pi-times', command: () => { } },
      counts.vacancies > 0 ? { label: 'Мои вакансии', icon: 'pi pi-times', command: () => { } } : { label: 'Создать вакансию', icon: 'pi pi-times', command: () => { } },
      counts.projects > 0 ? { label: 'Мои проекты', icon: 'pi pi-times', command: () => { } } : { label: 'Создать проект', icon: 'pi pi-times', command: () => { } },
      { label: 'Помощь', icon: 'pi pi-times', command: () => { } },
      { label: 'About', icon: 'pi pi-times', command: () => { } },
      { label: 'Настройки', icon: 'pi pi-refresh', command: () => { } },
      { label: 'Выйти', icon: 'pi pi-refresh', command: () => { } }
  );

    this.items = menuItems;
  };

  //   this.headerService.getCounts().subscribe(counts => {
  //   const menuItems: (MenuItem | null)[] = [
  //     { label: 'Создать резюме', icon: 'pi pi-times', command: () => { } },
  //     { label: 'Моя страница', icon: 'pi pi-times', command: () => { } },
  //     { label: 'Создать вакансию', icon: 'pi pi-times', command: () => { } },
  //     counts.vacancies > 0 ? { label: 'Мои вакансии', icon: 'pi pi-times', command: () => { } } : null,
  //     { label: 'Создать проект', icon: 'pi pi-times', command: () => { } },
  //     counts.projects > 0 ? { label: 'Проекты', icon: 'pi pi-times', command: () => { } } : null,
  //     { label: 'Помощь', icon: 'pi pi-times', command: () => { } },
  //     { label: 'About', icon: 'pi pi-times', command: () => { } },
  //     { label: 'Настройки', icon: 'pi pi-refresh', command: () => { } },
  //     { label: 'Выйти', icon: 'pi pi-refresh', command: () => { } }
  //   ];
  //   this.items = menuItems.filter(item => item !== null) as MenuItem[];
  // });
}
