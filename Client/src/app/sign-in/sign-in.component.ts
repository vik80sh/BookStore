import { MyServiceService } from './../my-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(private myService : MyServiceService ,private router : Router ) { 
    this.myService.getName()
    .subscribe(
      data =>  this.router.navigate(['/shop']),
      error => this.router.navigate(['/signin'])
    )
  }

  ngOnInit() {
  }
  flag:boolean=false;
  message:String=""
  login(email:String,password:String){
      if(email===''|| password===''){
            this.message="Please Fill all the input Box"
            return;
      }
      else{
        this.myService.login(email.toLowerCase(), password)
        .subscribe(
          data => {
         
            localStorage.setItem('token', data.toString());
            this.router.navigate(['/shop']);
          },
          error => { 
            this.message=error.error.message
          }
        );
      }
  }
}
