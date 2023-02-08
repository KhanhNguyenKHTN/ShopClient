import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  dataText: string = '';
  constructor(private headerSv: HeaderService) { }

  ngOnInit(): void {
    this.headerSv.hideMenu = false;
    this.headerSv.setCurrentMenu('search');
    this.headerSv.setTitle('Tra Cứu');
  }

  onSearch(event: any) {
    if(event.key === 'Enter') {
      this.dataText += this.searchText + '\n';
      this.search();
    }
  }

  search() {
    console.log(this.dataText);
  }
}
