import { Component, Input } from '@angular/core';
import { ITabs } from '../tab.interface';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent {

  @Input({ required: true, alias: 'tabs' })
  tabs: ITabs = [];

}