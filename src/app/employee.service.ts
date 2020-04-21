import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Employee} from './classes/employee';
import {catchError} from 'rxjs/operators';
// import './rxjs/add/operator/catch';
// import './rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  // public error;
//  while working with external services/RestApi's
//  we need to inject http/HttpCLient to this service class
  public BASE_URL = 'http://localhost:9090/employeeApi';
  //  private BASE_URL: string;
  public EMPLOYEE_REGISTER = this.BASE_URL + '/registerEmployee';
  public GET_EMPLOYEE_LIST = this.BASE_URL + '/getEmployeeList';

  constructor(private httpClient: HttpClient) {
  }

  registerEmployee(employee: Employee) {
    console.log(employee);
    return this.httpClient.post<any>(this.EMPLOYEE_REGISTER, employee).pipe(catchError(this.exceptionHandler));
  }

/* catching Exception if raised above throwing to caller below */
  exceptionHandler(error: HttpErrorResponse) {
    return throwError(error);
  }


  /* getEmployee(): Observable<any> {
      this.BASE_URL = '';
     // @ts-ignore
     return this.httpClient.get('http://localhost/').catch(this.errorHandler);
   }
  errorHandler(error: HttpErrorResponse) {
     return Observable.throw(error.message || 'server error');
  }*/
  /*getEmployeelist() {
    return [
      {'eId': 100, 'eName': 'Naga', 'eSal': 150000, 'designation': 'developer'},
      {'eId': 101, 'eName': 'Raju', 'eSal': 250000, 'designation': 'BA'},
      {'eId': 102, 'eName': 'Gamidi', 'eSal': 350000, 'designation': 'QATester'}
    ];
  }*/
}
