import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: 'home', component:HomeComponent },
      { path: 'product', component:ProductComponent },
      { path: 'search', component:SearchComponent },
      { path: 'cart', component:CartComponent },
      { path: 'login', component:LoginComponent },
      { path: 'sign-up', component:SignUpComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
