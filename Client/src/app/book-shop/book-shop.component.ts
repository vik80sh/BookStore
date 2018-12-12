import { Router } from '@angular/router';
import { MyServiceService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-shop',
  templateUrl: './book-shop.component.html',
  styleUrls: ['./book-shop.component.css']
})
export class BookShopComponent implements OnInit {

  itemInCart:number=0;
  name : string= "";
  booksList:any=""
  constructor(private myService : MyServiceService , private router: Router ) { 
    this.myService.getName()
    .subscribe(
      data => {
          this.name= data.toString();
          const promise2 = new Promise ((resolve , reject) => {
            this.myService.cartItem().subscribe((data) => {
                  if(data) {
                    resolve(data);
                  }
                  else {
                    reject();
                  }
                })
            })
            promise2.then((data) => {
              let array:any=[];
              array=data;
              let numberOfElements=array.length;
              this.myService.cartIncrease(numberOfElements);
            }) 
          },
      error => this.router.navigate(['/signin'])
    );
  }

  ngOnInit() {
      this.myService.emitter.subscribe((data :number) => {
      this.myService.numberOfIteminCart = data 
      this.itemInCart = this.myService.numberOfIteminCart;
    });
  }
  home(){
    this.router.navigate(['/shop'])
  }
  cart(){
    this.router.navigate(['/shop/cart'])
  }
  search(searchValue:string){
    if(searchValue.trim())
        this.router.navigate(['/shop'], { queryParams: { searchValue: searchValue } });
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }

  profile(){
    console.log("hello")
    this.router.navigate(['/shop/profile'])
  }
}
