import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewApplicationService } from './view-application.service';
import { StatusApplication, StatusPayment } from './model-interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent implements OnInit {

  @Input() parameter: string = '';
  form: FormGroup;
  activeIndex: number = 0;

  isRecordAdded: boolean = false;
  dataStatusApplication: StatusApplication[] | undefined = [];
  dataStatusPayment: StatusPayment[] | undefined = [];
  dataApplication: any = [];

  constructor(public modalService: ModalService, private fb: FormBuilder, private viewApplicationService: ViewApplicationService) {
    this.form = this.fb.group({
      company: ['', Validators.required],
      address: ['', Validators.required],
      content: ['', Validators.required],
      phone: ['', Validators.required],
      employee: [''],
      statusRequest: [''],
      issued: [''],
      statusPayment: [''],
      costs: [''],
      profit: [{ value: '', disabled: true }],
      paymentAmount: [''],
      comments: [''],
      positions: this.fb.array([])
    });
  }

  get positions() {
    return (this.form.get('positions') as FormArray);
  }
  
  addPosition() {
    const positions = this.form.get('positions') as FormArray;
    positions.push(this.createPosition());
  }
  
  removePosition(index: number) {
    const positions = this.form.get('positions') as FormArray;
    positions.removeAt(index);
  }
  
  createPosition(): FormGroup {
    return this.fb.group({
      position: [{ value: '', disabled: true }],
      quantity: [{ value: '', disabled: true }],
    });
  }
  enableFields(index: number) {
    const positions = this.form.get('positions') as FormArray;
    const positionGroup = positions.at(index) as FormGroup;
  
    positionGroup.get('position')?.enable();
    positionGroup.get('quantity')?.enable();
  }
  itemsMenuPositions: MenuItem[] | undefined;

  ngOnInit(): void {
    this.itemsMenuPositions = [
      {
          label: 'Дабать услугу',
          command: () => {
            this.addPosition();
        }
      },
      {
        label: 'Дабать товар',
        command: () => {
          this.addPosition();
      }
    },
    ]
    console.log("parameter", this.parameter)
    this.viewApplicationService.getApplication(this.parameter).subscribe(
      (response) => {
        this.dataApplication = response;
        console.log("this.dataApplication", this.dataApplication)
      }
    );

    this.viewApplicationService.getStatusApplication().subscribe(
      (response: StatusApplication[]) => {
        this.dataStatusApplication = response;
      }
    );

    this.viewApplicationService.getStatusPayment().subscribe(
      (response: StatusPayment[]) => {
        this.dataStatusPayment = response;
      }
    );
  }

  closeModal() {
    this.modalService.showDialog = false;
  }

  submitItem() {
    // Обработка отправки формы
    this.RecordAdded()
  }

  RecordAdded() {
    this.isRecordAdded = true;
    setTimeout(() => {
      console.log("isRecordAdded")
      this.isRecordAdded = false;
      this.modalService.showDialog = false;
    }, 2000);
  }
}
