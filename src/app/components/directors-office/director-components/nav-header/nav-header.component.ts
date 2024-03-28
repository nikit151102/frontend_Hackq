import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav-header',
    templateUrl: './nav-header.component.html',
    styleUrls: ['./nav-header.component.css'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink]
})
export class NavHeaderComponent {

  exit(){
    localStorage.removeItem('token');
  }
  
}
