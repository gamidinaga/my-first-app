import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmpRegistrationComponent} from './emp-registration/emp-registration.component';
import {StudentRegistrationComponent} from './student-registration/student-registration.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';

const routes: Routes = [
  {path : '', redirectTo : '/', pathMatch: 'full'},
  {path : 'empRegistration', component: EmpRegistrationComponent},
  {path : 'stdRegistration', component: StudentRegistrationComponent},
  {path : 'empList', component: EmployeeListComponent}
  // {path : '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
export const routingComponents = [EmpRegistrationComponent, StudentRegistrationComponent, EmployeeListComponent];
