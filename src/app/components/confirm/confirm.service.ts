import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfirmComponent } from './confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  
  viewContainerRef: any;

  setRoot(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

  createConfirm(): Observable<boolean> {
    const componentRef: ComponentRef<ConfirmComponent> = this.viewContainerRef.createComponent(ConfirmComponent);
    componentRef.instance.close.subscribe(res => res === true ? componentRef.destroy() : undefined);

    return componentRef.instance.close;
  }
}
