import {Component, OnInit} from '@angular/core';
import {Employee} from '../classes/employee';
import {EmployeeService} from '../employee.service';
import {Address} from '../classes/address';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {
   submitted = false;
   errorMsg = '';

  public jobTitles = ['OracleDeveloper', 'JavaDeveloper', 'PHPDeveloper'];
  empAddr = new Address();
  // tslint:disable-next-line:align
  empModel = new Employee('naga', 'gamidi', 'default', 'g@gmail.com', 25000, 1234567890, this.empAddr, 'F');

  jobHasErrors = true;

  constructor(private empService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  validateJob(value) {
    if (value === 'default') {
      this.jobHasErrors = true;
    } else {
      this.jobHasErrors = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.empService.registerEmployee(this.empModel)
      .subscribe(
         data => console.log('Success!!!!', data),
         error => this.errorMsg = error.statusText
      );
   // console.log(this.empModel);
  }


}
