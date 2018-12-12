import { OrderConfirmComponent } from './user/order-confirm/order-confirm.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './user/cart/cart.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { BookShopComponent } from './book-shop/book-shop.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ResetPasswordComponent } from './sign-in/reset-password/reset-password.component';
import { UserComponent } from './user/user.component';
import { BookListComponent  } from './book-shop/book-list/book-list.component';
import { BookPreviewComponent } from './book-shop/book-preview/book-preview.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'signup' , component : SignUpComponent},
  {path : 'signin' , component : SignInComponent},
  {path : 'shop' , component : BookShopComponent,
    children:[
      {path:'' , component:BookListComponent },
      {path:'cart' , component:CartComponent},
      {path:'profile' , component:UserComponent},
      {path:'preview/:id' , component:BookPreviewComponent},
      {path:'orderconfirm' , component:OrderConfirmComponent},

    ]
  },
  {path:'cartq' , component:CartComponent},
  {path :'forgotPassword', component:ResetPasswordComponent},
  {path :'**', component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }