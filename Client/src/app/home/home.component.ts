import { MyServiceService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private router : Router , private myService : MyServiceService) {
    this.myService.getName()
    .subscribe(
      data =>  this.router.navigate(['/shop']),
      error => this.router.navigate([''])
    )
   }
  
    ngOnInit() {
    }
    signup(){
      this.router.navigate(['/signup'])
    }
    singin(){
      this.router.navigate(['/signin'])
    }
}
