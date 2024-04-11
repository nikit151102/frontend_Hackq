import { Component } from '@angular/core';
import { DialogNewApplicationComponent } from '../dialog-new-application/dialog-new-application.component';
import { ButtonModule } from 'primeng/button';
import { NewApplicationModule } from '../../../new-application/new-application.module';
@Component({
    selector: 'app-section-one',
    templateUrl: './section-one.component.html',
    styleUrls: ['./section-one.component.css'],
    standalone: true,
    imports: [ButtonModule,DialogNewApplicationComponent, NewApplicationModule]
})
export class SectionONEComponent {

}
