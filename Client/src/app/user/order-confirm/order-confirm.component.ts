import { MyServiceService } from './../../my-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

  constructor(private router: Router , private myservice : MyServiceService) { 
     
  }

  ngOnInit() {
    this.myservice.buyNow()
    .subscribe(
      data=>this.myservice.cartIncrease(0),
      error=>{
        localStorage.removeItem('token');
        this.router.navigate(['']);
      }
    )
  }
  home(){
    this.router.navigate(['/shop'])
  }
}
