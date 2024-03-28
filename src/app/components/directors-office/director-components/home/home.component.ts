import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HomeChartsComponent } from './home-charts/home-charts.component';
import { HomeStatCounterComponent } from './home-stat-counter/home-stat-counter.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('customFadeIn', [
            state('void', style({ opacity: 0 })),
            transition(':enter', animate('500ms ease-out', style({ opacity: 1 }))) // Анимация при входе
        ])
    ],
    standalone: true,
    imports: [NgIf, HomeStatCounterComponent, HomeChartsComponent]
})

export class HomeComponentdirector implements OnInit {
  
  constructor() { }

  isLoading: boolean = true;
  activeTab:string =''

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500); 
  
  }
  
}