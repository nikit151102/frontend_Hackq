import { Component, Input } from '@angular/core';

interface itemCard{
  nane: string;
  lastname:string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css'],
  standalone:true
})
export class CardProjectComponent {

  @Input() item :itemCard = {
    nane: "",
    lastname: "",
    title: "",
    description:""
  };

}
