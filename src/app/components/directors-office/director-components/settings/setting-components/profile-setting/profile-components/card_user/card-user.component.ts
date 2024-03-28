import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-card-user',
    templateUrl: './card-user.component.html',
    styleUrls: ['./card-user.component.css'],
    standalone: true,
    imports: [NgIf]
})
export class CardUserComponent {

  @Input() CurrentUser: any = []

  constructor( ) { }

  ngOnInit(): void {}

}
