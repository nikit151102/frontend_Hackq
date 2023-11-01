import { Component, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent {

  @Input() parameter: string = '';

 // Поля для ввода данных
 statusPayment: string = "";
 statusRequest: string = "";
 employee: string = "";
 issued: string = "";
 company: string = "";
 address: string = "";
 content: string = "";
 phone: string = "";
 costs: string = "";
 paymentAmount: string = "";
 profit: string = "";

 isRecordAdded: boolean = false;

 constructor(public modalService: ModalService) { }


closeModal() {
  this.modalService.showDialog = false
  this.statusPayment = "";
  this.statusRequest = "";
  this.employee = "";
  this.issued = "";
  this.company = "";
  this.address= "";
  this.content = "";
  this.phone= "";
  this.costs= "";
  this.paymentAmount = "";
  this.profit = "";
}

 submitItem() {
  const data = {
    name: "изменение",
    SToplata: this.statusPayment,
    STzaiavki: this.statusRequest,
    employee: this.employee,
    vipiska: this.issued,
    company: this.company,
    adres: this.address,
    opisanie: this.content,
    nomer: this.phone,
    sale_zatrat: Number(this.costs) ,
    obfaia_sale: Number(this.paymentAmount) ,
  };
  this.RecordAdded()
 
  this.modalService.sendDataToServer(data).subscribe((response) => {
    console.log('Ответ сервера:', response);
  
  });
  
 }
 RecordAdded(){
  this.isRecordAdded = true;
  setTimeout(() => {
    console.log("isRecordAdded")
    this.isRecordAdded = false;
      this.modalService.showDialog = false
   
  }, 2000); // Скрываем сообщение через 3 секунды
  
 }

}
