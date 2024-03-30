import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-stages-of-work',
  templateUrl: './stages-of-work.component.html',
  styleUrls: ['./stages-of-work.component.css'],
  standalone: true,
  imports:[CommonModule, TimelineModule, CardModule]
})


export class StagesOfWorkComponent {
  events: EventItem[];

  constructor() {
      this.events = [
          { status: 'Оформление заявки.', icon: 'pi pi-shopping-cart' },
          { status: 'Бесплатный выезд диагностики.', icon: 'pi pi-cog' },
          { status: 'Согласование плана работ.', icon: 'pi pi-shopping-cart' },
          { status: 'Проведение ремонтных работ.', icon: 'pi pi-check' }
      ];
  }
}
