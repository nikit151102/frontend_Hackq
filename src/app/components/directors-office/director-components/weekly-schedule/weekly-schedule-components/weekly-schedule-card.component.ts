import { Component, Input } from '@angular/core';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-weekly-schedule-card',
  templateUrl: './weekly-schedule-card.component.html',
  styleUrls: ['./weekly-schedule-card.component.css'],
})

export class WeeklySchedulCardComponent {

  constructor(public modalService: ModalService){}

  @Input() contentrequest: {
    "id": string,
    "requestnumber": string,
    "statusrequest": string,
    "statuspayment": string,
    "discharged": string,
    "reason": string,
    "comment": string,
    "submissiondate": string,
    "completiondate": string,
    "estimation": number,
    "revenue": number,
    "expenses": number,
    "profit": number,
    "employeelastname": string,
    "employeefirstname": string,
    "employeemiddlename": string,
    "clientlastname": string,
    "clientfirstname": string,
    "clientmiddlename": string,
    "clientphone": string,
    "street": string,
    "house": string,
    "office": string,
    "namecompany": string
  } = {
      "id": "",
      "requestnumber": "",
      "statusrequest": "",
      "statuspayment": "",
      "discharged": "",
      "reason": "",
      "comment": "",
      "submissiondate": "",
      "completiondate": "",
      "estimation": 0,
      "revenue": 0,
      "expenses": 0,
      "profit": 0,
      "employeelastname": "",
      "employeefirstname": "",
      "employeemiddlename": "",
      "clientlastname": "",
      "clientfirstname": " ",
      "clientmiddlename": "",
      "clientphone": "",
      "street": "",
      "house": "",
      "office": "",
      "namecompany": ""
    }


  viewItem(id:string){
    this.modalService.someValue = id;
    this.modalService.showDialog = true;
  }
}
