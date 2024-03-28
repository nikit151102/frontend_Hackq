import { Component } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-section-two',
    templateUrl: './section-two.component.html',
    styleUrls: ['./section-two.component.css'],
    standalone: true,
    imports: [CardModule, SharedModule]
})
export class SectionTwoComponent {

}
