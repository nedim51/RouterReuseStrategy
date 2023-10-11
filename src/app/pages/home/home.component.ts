import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selfForm: FormGroup
  searchByPurchaseForm: FormGroup
  searchByContractForm: FormGroup

  constructor() {
    this.selfForm = this.createSelfForm();
    this.searchByPurchaseForm = this.createSearchByPurchaseForm();
    this.searchByContractForm = this.createSearchByContractForm();
  }

  onSelfFormSubmit(): void { }
  onSearchByPurchaseFormSubmit(): void { }
  onSearchByContractFormSubmit(): void { }

  createSelfForm(): FormGroup {
    return new FormGroup({
      fio: new FormControl({ value: 'Suinov N.A.', disabled: false }),
      phone: new FormControl({ value: '+79785676747', disabled: false }),
      email: new FormControl({ value: 'SuinovNA@mail.ru', disabled: false }),
      address: new FormControl({ value: 'Simferopol', disabled: false }),
      company: new FormControl({ value: 'RNCB', disabled: false }),
      post: new FormControl({ value: 'Developer', disabled: false }),
    })
  }

  createSearchByPurchaseForm(): FormGroup {
    return new FormGroup({
      purchaseNumber: new FormControl({ value: '', disabled: false }),
    })
  }
  createSearchByContractForm(): FormGroup {
    return new FormGroup({
      contractNumber: new FormControl({ value: '', disabled: false }),
    })
  }
}
