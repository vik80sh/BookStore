import { MatSnackBar } from '@angular/material';
import {  NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private notification: NotificationService , public snackBar : MatSnackBar) { 
    this.notification.emitter.subscribe(
      (data: {type:String , message:String})=>{
        console.log("hello",data) 
        this.openSnackBar(data.message , data.type)
      }
    )
  }

  openSnackBar(message , type){
    this.snackBar.open(message,type,{
      duration:2000
    })
  }
  ngOnInit() {
  }
}
