import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {

  @Input() CurrentUser: any = []

  constructor( ) { }

  ngOnInit(): void {}

}
