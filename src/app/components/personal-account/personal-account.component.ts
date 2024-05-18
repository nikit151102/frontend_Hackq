import { Component } from '@angular/core';
import { CardComponent } from '../card-resume/card.component';
import { CardJobComponent } from '../card-job/card-job.component';
import { CardProjectComponent } from '../card-project/card-project.component';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css'],
  standalone: true,
  imports: [CardComponent, CardJobComponent, CardProjectComponent]
})
export class PersonalAccountComponent {
  value = {
    nane: "nane",
    lastname: "lastname",
    title: "title",
    description: "description description description description"
  };
  currentUser = {
    firstName: "string",
    lastname: "string",
    city: "string"
  }
}
