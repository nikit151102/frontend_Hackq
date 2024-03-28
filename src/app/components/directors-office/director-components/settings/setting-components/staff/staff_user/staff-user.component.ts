import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-staff-user',
    templateUrl: './staff-user.component.html',
    styleUrls: ['./staff-user.component.css'],
    standalone: true,
    imports: [NgIf, ButtonModule, ToastModule, ConfirmPopupModule]
})
export class StaffUserComponent {
  @Input() contentUser: {
    id: string,
    lastname: string,
    firstname: string,
    middlename: string,
    position: string,
  } = {
      id: '',
      lastname: '',
      firstname: '',
      middlename: '',
      position: '',
    };
  showdetails: boolean = false;
  
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService){}
    
  clickdcard(){
    this.showdetails = !this.showdetails
  }

  confirm2(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Вы действительно хотитье удалить аккаунт сотрудника?',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass: 'p-button-danger p-button-sm',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
}
}
