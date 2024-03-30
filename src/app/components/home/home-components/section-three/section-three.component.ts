import { Component } from '@angular/core';
import { FAQAccordionComponent } from './faq-accordion/faq-accordion.component';
import { StagesOfWorkComponent } from './stages-of-work/stages-of-work.component';

@Component({
    selector: 'app-section-three',
    templateUrl: './section-three.component.html',
    styleUrls: ['./section-three.component.css'],
    standalone: true,
    imports: [FAQAccordionComponent, StagesOfWorkComponent]
})
export class SectionThreeComponent {

}
