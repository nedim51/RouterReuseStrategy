import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TabsContainerComponent,
    TabItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TabsContainerComponent,
    TabItemComponent  
  ]
})
export class TabsModule { }
