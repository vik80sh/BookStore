import { NotificationService } from './notification.service';
import { OrderConfirmComponent } from './user/order-confirm/order-confirm.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgModel}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { MatSnackBarModule} from '@angular/material';

import { UserComponent } from './user/user.component';
import { CartComponent } from './user/cart/cart.component';
import { MyServiceService } from './my-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ResetPasswordComponent } from './sign-in/reset-password/reset-password.component';
import { BookShopComponent } from './book-shop/book-shop.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { MaterialModule } from './angular-material';
import { BookListComponent } from './book-shop/book-list/book-list.component';
import { PipePipe } from './pipe/pipe.pipe';
import {MatProgressBarModule} from '@angular/material';
import { BookPreviewComponent } from './book-shop/book-preview/book-preview.component';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    BookShopComponent,
    PageNotfoundComponent,
    CartComponent,
    UserComponent,
    BookListComponent,
    PipePipe,
    BookPreviewComponent,
    OrderConfirmComponent,
    NotificationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatProgressBarModule,
    
  ],
  providers: [MyServiceService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
