import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: './app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
  @ViewChild('nameInput') loanAmount1: ElementRef;
  @Input() parentData;
  @Output() public childEvent = new EventEmitter();
   public username = 'nagaraju';
   public loanAmount = 1000000;
   public siteUrl = window.location.href;
   public isDisabled = 'false';
   public greet = 'hi';
   public fullName: string;
   public ngifcheck = false;
   public color = 'blue';
  constructor() {
    /**//*this.loanAmount=loanAmount;*/
  }

  ngOnInit(): void {
  }

   // user defined method greet user
      greetUser() {
         return 'Goodnight ' + this.username ;
}

  // user defined method to work for event binding
           onClick(event) {
             console.log(event);
             this.greet = 'Welcome to Angular';
             //  return this.loanAmount = this.loanAmount1.nativeElement.value;
           }
       //  to take input value from user and do some logic here
          logMessage(value) {
            console.log(value);
          }

          fireEvent() {
            this.childEvent.emit('hey i am fired event from child to you');
          }
}
