import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { CardComponent } from '../card-resume/card.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [SearchComponent, CardComponent]
})
export class HomeComponent {
  value ={
    nane: "nane",
    lastname: "lastname",
    title: "title",
    description:"description description description description"
  };
}