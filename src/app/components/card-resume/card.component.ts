import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

interface itemCard{
  nane: string;
  lastname:string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone:true,
  imports: [AvatarModule]
})

export class CardComponent {

  @Input() item :itemCard = {
    nane: "",
    lastname: "",
    title: "",
    description:""
  };

}
