import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './home-components/footer/footer.component';
import { SectionFourComponent } from './home-components/section-four/section-four.component';
import { SectionThreeComponent } from './home-components/section-three/section-three.component';
import { SectionTwoComponent } from './home-components/section-two/section-two.component';
import { SectionONEComponent } from './home-components/section-one/section-one.component';
import { HeaderComponent } from './home-components/header/header.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [HeaderComponent, SectionONEComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, FooterComponent]
})

export class HomeComponent implements OnInit {
  dataFromServer: any = [];

  constructor() {}

  ngOnInit() {
  }

}

