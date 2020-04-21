import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../classes/employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // declaring list of employee
  listEmployee: Employee [];
  public errorMsg: any;

  // injecting dependent service class as param to constructor
  // tslint:disable-next-line:variable-name


  constructor(private employeeService: EmployeeService) {
  }

  // calling service method to get employee object and need to call subscribe method on that
  ngOnInit() {
    /*this.employeeService.getEmployee().subscribe(
      data =>
        // assigning the data return by get method/api service
        this.listEmployee = data,
      error => this.errorMsg = error
    );*/
    // this.listEmployee = this._employeeService.getEmployeelist();
  }

}
