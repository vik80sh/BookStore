import { NotificationService } from './../../notification.service';
import { MyServiceService } from './../../my-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {

  book;
  flag1     :boolean = false;
  flag      :boolean = false;
  message   :string  = "read more";
  id        :string  = ''
  

  constructor(
      private myService     : MyServiceService ,
      private activateRoute : ActivatedRoute,
      private router        : Router,
      private notification  : NotificationService
  ) {}

  ngOnInit() {
    this.id=this.activateRoute.snapshot.params['id'];
    console.log("id   ", this.id)
    this.myService.entireData().subscribe((data) => {
        this.book = data;
        this.book=this.book.find(x => x._id === this.id);
        this.flag1=true;
    });
 }

  changeFlag(){
    if(this.flag){
        this.flag = false;
        this.message="read more"
    }else{
        this.flag=true;
        this.message="read less"
    }
  }

  addToCart(){
    this.myService.addToCartService(this.book)
    .subscribe(
      data=>{ 
        if(data){  
            this.notification.display('success', 'asd');
            console.log("hello herer")
            this.myService.cartIncrease(this.myService.numberOfIteminCart + 1)
        }
      },
      error=>{this.router.navigate(['/signin'])}
    )
  }
  buy(){
    this.router.navigate(['/shop/orderconfirm'])
  }
}
