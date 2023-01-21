import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ]
})
export class AppModule { }
