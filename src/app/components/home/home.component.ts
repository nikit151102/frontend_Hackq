import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { CardComponent } from '../card-resume/card.component';
import { HomeService } from './home.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [SearchComponent, CardComponent, NgFor]
})
export class HomeComponent {
  
  constructor(private homeService:HomeService){}

  cards: any[] = []

  ngOnInit() {
    this.homeService.getvacancies().subscribe(
      (data: any) => {
        console.log(data);
        this.cards = data
      },
      (error) => {
        console.error('AJAX error:', error);
      }
    );
  }

  value ={
    nane: "nane",
    lastname: "lastname",
    title: "title",
    description:"description description description description"
  };
}