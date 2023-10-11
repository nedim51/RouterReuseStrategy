import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent {

  contractForm: FormGroup

  constructor() {
    this.contractForm = this.createContractForm();
  }

  onContractFormSubmit(): void {
    
  }

  createContractForm(): FormGroup {
    return new FormGroup({
      contractType: new FormControl({ value: '', disabled: false }),
      contractNumber: new FormControl({ value: '', disabled: false }),
      contractPrice: new FormControl({ value: '', disabled: false }),
      contractNCK: new FormControl({ value: '', disabled: false }),
      contractSupplierName: new FormControl({ value: '', disabled: false }),
      contractSupplierINN: new FormControl({ value: '', disabled: false }),
      contractSupplierOGRN: new FormControl({ value: '', disabled: false }),
      contractSupplierAddress: new FormControl({ value: '', disabled: false }),
    })
  }
}
