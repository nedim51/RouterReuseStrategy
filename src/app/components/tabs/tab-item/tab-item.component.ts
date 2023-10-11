import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent {

  @Input({ required: true, alias: 'path' })
  path: string  = '';
}
