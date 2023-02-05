import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private headerSv: HeaderService) { }

  ngOnInit(): void {
    this.headerSv.hideMenu = false;
    this.headerSv.setCurrentMenu('search');
    this.headerSv.setTitle('Tra Cứu');
  }

}
