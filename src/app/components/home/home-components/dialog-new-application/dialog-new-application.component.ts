import { Component } from '@angular/core';
import { NewApplicationComponent } from '../../../new-application/new-application.component';

@Component({
    selector: 'app-dialog-new-application',
    templateUrl: './dialog-new-application.component.html',
    styleUrls: ['./dialog-new-application.component.css'],
    standalone: true,
    imports: [NewApplicationComponent]
})
export class DialogNewApplicationComponent {

}
