import { Component } from '@angular/core';
import { ITabs } from './components/tabs/tab.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs: ITabs = [
    {
      title: 'Главная',
      path: 'home'
    },
    {
      title: 'Закупка',
      path: 'purchase'
    },
    {
      title: 'Контракт',
      path: 'contract'
    },
    {
      title: 'О нас',
      path: 'about'
    },
  ];
}
