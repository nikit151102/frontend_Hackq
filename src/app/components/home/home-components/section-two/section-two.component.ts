import { Component } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsPointsComponent } from './about-us-points/about-us-points.component';
import { AdvantagesComponent } from './advantages/advantages.component';

@Component({
    selector: 'app-section-two',
    templateUrl: './section-two.component.html',
    styleUrls: ['./section-two.component.css'],
    standalone: true,
    imports: [AboutUsComponent, AboutUsPointsComponent, AdvantagesComponent]
})
export class SectionTwoComponent {

}
