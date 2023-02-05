import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private header: HeaderService) { }

  ngOnInit(): void {
    this.header.hideMenu = false;
    this.header.setCurrentMenu('cart');
    this.header.setTitle('Giỏ Hàng');
  }

}
