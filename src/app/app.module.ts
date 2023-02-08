import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { MiniProductComponent } from './components/mini-product/mini-product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ProcessCircleComponent } from './components/controls/process-circle/process-circle.component';
import { ProcessOrderComponent } from './components/controls/process-order/process-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    MiniProductComponent,
    HomeComponent,
    ProductComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    SignUpComponent,
    ProcessCircleComponent,
    ProcessOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
