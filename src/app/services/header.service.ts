import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  hideMenu: boolean = false;
  currentMenu: string = 'home';
  constructor(private title: Title) { }

  setCurrentMenu(value: string) {
    this.currentMenu = value;
  }

  setTitle(title: string) {
    this.title.setTitle(title);
  }
}
