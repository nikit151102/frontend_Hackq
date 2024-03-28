import { Component } from '@angular/core';
import { DialogNewApplicationComponent } from '../dialog-new-application/dialog-new-application.component';

@Component({
    selector: 'app-section-one',
    templateUrl: './section-one.component.html',
    styleUrls: ['./section-one.component.css'],
    standalone: true,
    imports: [DialogNewApplicationComponent]
})
export class SectionONEComponent {

}
