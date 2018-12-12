import { Router } from '@angular/router';
import { MyServiceService } from './../../my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartBook:any=[];
  flag1:boolean=false;
  totalPrice:number=0;
  cartItem:boolean=false;
  constructor(private myService:MyServiceService, 
  private router:Router) {
    const promise = new Promise ((resolve , reject) => {
      this.myService.cartItem().subscribe((data) => {
        if(data) {
          resolve(data);
        }
        else {
          reject();
        }
      })
    })
    promise.then((data) => {
      this.cartBook=data;
      this.flag1=true;
      let array:any=[];
      array=data;
      if(array.length>0)
        this.cartItem=true;
       
      for(let i=0;i<this.cartBook.length;i++)
        this.totalPrice=this.totalPrice + parseInt(this.cartBook[i].price);
   })
  
   }

  ngOnInit() {
}
home(){
  this.router.navigate(['/shop'])
}
placeOrder(){
  this.myService.buyNow()
  .subscribe(
    data=>this.router.navigate(['/shop/orderconfirm']),
    error=>this.router.navigate(['/signin']),
    )
  }
}
