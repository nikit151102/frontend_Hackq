import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css'],
  standalone: true,
  imports:[CardComponent]
})
export class VacancyComponent {

  value ={
    nane: "nane",
    lastname: "lastname",
    title: "title",
    description:"description description description description"
  };
}
