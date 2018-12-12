import { MyServiceService } from './my-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private firstData: MyServiceService) {
    this.firstData.entireData()
    .subscribe(
      data=>{
        this.firstData.booksData = data;
      },
      error=>{console.log("In App component ",error)}
    );

  }
}
