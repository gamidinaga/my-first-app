import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validator, FormControl, FormGroup, Validators} from '@angular/forms';
import {Address} from '../classes/address';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  branchs = ['CSE', 'ECE', 'CIVIL', 'MECHANICAL'];
 // address ;
  constructor(private regForm: FormBuilder) {
  }
   stdRegForm = this.regForm.group({
     stdRollNo: [1234567890, [Validators.required, Validators.maxLength(10)] ],
     stdName: ['Naga'],
     stdAge: [26],
     stdPhone : [1234567890],
     stdEmail : ['g@gmail.com'],
     stdGender : ['M'],
     stdAddress : this.regForm.group({
       stdHno : ['1-332'],
       stdCity : ['gnt'],
       stdState : ['AP'],
       stdPinCode : [987650],
   }),
     stdBranch: [this.branchs],
     stdPercentage : [75]
   });
  /* initialize form group object fields with  form controls fields*/
  /* stdRegForm = new FormGroup({
     stdRollNo : new FormControl('123456789'),
     stdName : new FormControl('Naga'),
     stdAge : new FormControl(''),
     stdPhone : new FormControl(''),
     stdEmail : new FormControl(''),
     stdGender : new FormControl(''),
     stdAddress : new FormGroup({
        stdHno : new FormControl(''),
        stdCity : new FormControl(''),
        stdState : new FormControl(''),
        stdPinCode : new FormControl('')
     }),
     stdBranch : new FormControl(this.branchs),
     stdPercentage : new FormControl('')
   });*/

  ngOnInit(): void {
    this.stdRegForm.setValue({
      stdRollNo : '1234',
    });
  }

}
