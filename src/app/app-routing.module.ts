import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { ContractComponent } from './pages/contract/contract.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }, 
  {
    title: 'Главная',
    path: 'home',
    component: HomeComponent,
  },
  {
    title: 'Закупка',
    path: 'purchase',
    component: PurchaseComponent,
  },
  {
    title: 'Контракт',
    path: 'contract',
    component: ContractComponent,
  },
  {
    title: 'О нас',
    path: 'about',
    component: AboutComponent,
  },
  {
    title: 'Страница не существует',
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
