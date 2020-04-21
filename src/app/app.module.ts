import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoanApplicationComponent} from './loan-application/loan-application.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeService} from './employee.service';
import {StudentService} from './student.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoanApplicationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [EmployeeService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
