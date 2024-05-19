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
  token: any;

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

    this.items = [
      counts.resume > 0 ? 
        { label: 'Моя страница', icon: 'pi pi-user', command: () => { } } : 
        { label: 'Создать резюме', icon: 'pi pi-plus', command: () => { } },
      counts.vacancies > 0 ? 
        { label: 'Мои вакансии', icon: 'pi pi-briefcase', command: () => { } } : 
        { label: 'Создать вакансию', icon: 'pi pi-plus', command: () => { } },
      counts.projects > 0 ? 
        { label: 'Мои проекты', icon: 'pi pi-folder', command: () => { } } : 
        { label: 'Создать проект', icon: 'pi pi-plus', command: () => { } },
      { label: 'Помощь', icon: 'pi pi-question-circle', command: () => { } },
      { label: 'About', icon: 'pi pi-info-circle', command: () => { } },
      { label: 'Настройки', icon: 'pi pi-cog', command: () => { } },
      { label: 'Выйти', icon: 'pi pi-sign-out', command: () => { } }
    ];
  }
}
