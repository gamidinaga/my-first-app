import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  public appComponentName = 'AppToLoan';
  public message = 'FirstApplication';
  public pipes = 'Usingpipes';
  public product = {
    // 'pid': 10,
    // 'pName': 'Pipe',
    // 'pCost': 100
  };
  public num = 0.20;
  public date = new Date();

}
