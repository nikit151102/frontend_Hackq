import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  animations: [
    trigger('customFadeIn', [
      state('void', style({ opacity: 0 })), 
      transition(':enter', animate('500ms ease-out', style({ opacity: 1 }))) 
    ])
  ]
})
export class SettingsComponent implements OnInit {
  isLoading: boolean = true;

  ngOnInit(): void  {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
}
}