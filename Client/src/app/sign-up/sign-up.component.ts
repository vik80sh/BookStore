import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

import {MyServiceService} from './../my-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    @ViewChild('data') signupForm :NgForm
    successMessage='';
    defaultQuestion:String='1';
    genders=['Male','Female'];
    
    user={
      name:'',
      email:'',
      password:'',
      gender:'',
      secretQuestion:'',
      answer:''
    }
    constructor(private router : Router , private myService : MyServiceService  ) {
      this.myService.getName()
      .subscribe(
        data =>  this.router.navigate(['/shop']),
        error => this.router.navigate(['/signup'])
      )
     }
  
    ngOnInit() {
    }
    flag:boolean=false;
  
    onSubmit(){
      this.user.name=this.signupForm.value.name;
      this.user.email=this.signupForm.value.email.toLowerCase();
      this.user.password=this.signupForm.value.password;
      this.user.gender=this.signupForm.value.gender;
      this.user.secretQuestion=this.signupForm.value.secret;
      this.user.answer=this.signupForm.value.answer;

      
      this.myService.submitRegister(this.user)
      .subscribe(
        (data:{message: string}) =>  this.successMessage = data.message ,
        error => this.successMessage = "Some Error Occurs" 
      );
    }


}
