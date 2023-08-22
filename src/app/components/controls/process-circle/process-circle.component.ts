import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-circle',
  templateUrl: './process-circle.component.html',
  styleUrls: ['./process-circle.component.css']
})
export class ProcessCircleComponent implements OnInit {
  @Input()
  percentage: number = 0;

  @Input()
  processName: string = '';

  color: number = 0; // 0: gray, 1: orange, 2: blue, 3: green

  constructor() { }

  ngOnInit(): void {
    if (this.percentage === 100) {
      this.color = 3;
    }else if (this.percentage > 10) {
      this.color = 2;
    }else if (this.percentage > 0) {
      this.color = 1;
    }
  }

}
