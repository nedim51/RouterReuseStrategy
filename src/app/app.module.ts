import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from './components/tabs/tabs.module';
import { HomeComponent } from './pages/home/home.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { ContractComponent } from './pages/contract/contract.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmModule } from './components/confirm/confirm.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PurchaseComponent,
    ContractComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Custom
    TabsModule,
    ConfirmModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
