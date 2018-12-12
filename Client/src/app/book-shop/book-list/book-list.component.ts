import { Router} from '@angular/router';
import { MyServiceService } from './../../my-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  booksList ;
  flag: boolean = false;
  constructor(private myService: MyServiceService,private router:Router ) {
    this.flag = true;
     const promise = new Promise ((resolve , reject) => {
        this.myService.entireData().subscribe((data) => {
          if(data) {
            resolve(data);
          }
          else {
            reject();
          }
        })
     })
     promise.then((data) => {
        this.flag = false;
        this.booksList = data;
     })
   }
  ngOnInit() {
    
  }

  oneBook(_id : String){
    this.router.navigate(['shop/preview', _id])
  }
}
