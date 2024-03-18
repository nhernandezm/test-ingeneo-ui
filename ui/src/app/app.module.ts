import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { DeliveryComponent } from './delivery/delivery.component';
import { HttpClientModule } from '@angular/common/http';
import { NewdeliveryComponent } from './newdelivery/newdelivery.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeliveryComponent,
    NewdeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
