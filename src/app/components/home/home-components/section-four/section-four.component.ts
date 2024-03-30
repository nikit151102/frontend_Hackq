import { Component } from '@angular/core';
import { NewApplicationComponent } from '../../../new-application/new-application.component';
import { MapComponent } from './map/map.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
    selector: 'app-section-four',
    templateUrl: './section-four.component.html',
    styleUrls: ['./section-four.component.css'],
    standalone: true,
    imports: [NewApplicationComponent, MapComponent, StatisticsComponent, ContactsComponent]
})
export class SectionFourComponent {

}
