import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyCardComponent } from './shared/company-card/company-card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    // MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CompanyCardComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
