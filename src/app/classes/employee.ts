import {Address} from './address';
export class Employee {
   constructor(
         public empFirstName: string,
         public empLastName: string,
         public empJob: string,
         public empEmail: string,
         public empSalary: number,
         public empPhNumber: number,
         public empAddress: Address,
         public empGender: string
   ) {
   }
}
