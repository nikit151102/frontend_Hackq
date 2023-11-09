import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('customFadeIn', [
      state('void', style({ opacity: 0 })), // Состояние компонента при его создании
      transition(':enter', animate('500ms ease-out', style({ opacity: 1 }))) // Анимация при входе
    ])
  ]
})

export class HomeComponentdirector implements OnInit {
  
  constructor() { }

  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500); 
  }

}