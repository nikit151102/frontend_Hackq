import { Component } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css'],
  standalone: true,
  imports: [CardModule, SharedModule]
})
export class AdvantagesComponent {

}
