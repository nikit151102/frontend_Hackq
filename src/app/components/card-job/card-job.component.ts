import { Component, Input } from '@angular/core';

interface itemCard{
  nane: string;
  lastname:string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css'],
  standalone: true,
})
export class CardJobComponent {
  @Input() item :itemCard = {
    nane: "",
    lastname: "",
    title: "",
    description:""
  };
}
