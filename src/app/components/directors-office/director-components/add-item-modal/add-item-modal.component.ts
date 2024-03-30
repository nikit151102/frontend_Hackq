import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewApplicationService } from './view-application.service';
import { StatusApplication, StatusPayment } from './model-interface';
import { MenuItem } from 'primeng/api';
import { Initials } from '../chart-analytic/chart-anakytic.interface';
import { DataChartAnalyticService } from '../chart-analytic/data-chart-analytic.service';
import { ButtonModule } from 'primeng/button';
import { NgFor, NgIf } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

@Component({
    selector: 'app-add-item-modal',
    templateUrl: './add-item-modal.component.html',
    styleUrls: ['./add-item-modal.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, TabViewModule, InputTextModule, DropdownModule, FormsModule, InputTextareaModule, MenubarModule, NgFor, ButtonModule, NgIf]
})
export class AddItemModalComponent implements OnInit {

  @Input() parameter: string = '';
  form: FormGroup;
  activeIndex: number = 0;

  isRecordAdded: boolean = false;
  dataStatusApplication: StatusApplication[] | undefined = [];
  dataStatusPayment: StatusPayment[] | undefined = [];
  dataApplication: any = [];


  Initials: Initials[] | undefined = []
  valueinitials: { valueinitials: string } = { valueinitials: '' };

  constructor(public modalService: ModalService, private fb: FormBuilder, private dataChartAnalyticService: DataChartAnalyticService, private viewApplicationService: ViewApplicationService) {
    this.form = this.fb.group({
      company: ['', Validators.required],
      street: ['', Validators.required],
      house: ['', Validators.required],
      office: [''],
      content: ['', Validators.required],
      comment: ['', Validators.required],
      clientlastname: ['', Validators.required],
      clientfirstname: ['', Validators.required],
      clientmiddlename: [''],
      phone: ['', Validators.required],
      employee: [''],
      statusRequest: [''],
      discharged: [''],
      statusPayment: [''],
      expenses: [''],
      revenue: [''],
      profit: [{ value: '', disabled: true }],
      paymentAmount: [''],
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
    this.dataChartAnalyticService.getInitials().subscribe(
      (response: Initials[]) => {
        this.Initials = response;
        console.log("this.Initials", this.Initials)
      }
    );
    this.viewApplicationService.getApplication(this.parameter).subscribe(
      (response) => {
        this.dataApplication = response;
        console.log("this.response", response)
        this.form.patchValue({
          company: this.dataApplication.namecompany,
          street: this.dataApplication.street,
          house: this.dataApplication.house,
          office: this.dataApplication.office,
          discharged: this.dataApplication.discharged,
          content: this.dataApplication.reason,
          comment: this.dataApplication.comment,
          phone: this.dataApplication.clientphone,
          statuspayment: this.dataApplication.statuspayment,
          clientlastname: this.dataApplication.clientlastname,
          clientfirstname: this.dataApplication.clientfirstname,
          clientmiddlename: this.dataApplication.clientmiddlename,
          expenses: this.dataApplication.expenses,
          revenue: this.dataApplication.revenue,
          profit: this.dataApplication.profit,

        });

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
