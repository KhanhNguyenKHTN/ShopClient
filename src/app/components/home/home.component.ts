import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerSv: HeaderService) { }

  ngOnInit(): void {
    this.headerSv.hideMenu = false;
    this.headerSv.setCurrentMenu('home');
    this.headerSv.setTitle('Trang Chủ');
  }

}
