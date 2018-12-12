
import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class MyServiceService {
  cartValue = new Subject();
  emitter = this.cartValue.asObservable();

  booksData:any=[];
  numberOfIteminCart:number=0;
  cartIncrease(data : number) {
    this.cartValue.next(data);
 }
  constructor(private http: HttpClient) { 
   }
  entireData () {
    return  this.http.get('http://localhost:4000/books/bookslist');
  }
  submitRegister(userData:any){
    return this.http.post('http://localhost:4000/users/register', userData,{
      observe:'body'
    });
  }
  login(email,password){
    const body={
      email:email,
      password : password
    }
    return this.http.post('http://localhost:4000/users/login', body,{
      observe:'body'
    });
  }
  getName() {
    return this.http.get('http://localhost:4000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
  addToCartService(book){
    const body={
      book:book,
      token:localStorage.getItem('token')
    }
   
    return this.http.post('http://localhost:4000/carts/addtocart', body , {
      observe:'body'
    });
  }
  cartItem(){
  
    return this.http.get('http://localhost:4000/carts/cartItem', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
 buyNow(){
    return this.http.get('http://localhost:4000/carts/buy', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
}
