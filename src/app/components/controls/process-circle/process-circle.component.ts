import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-circle',
  templateUrl: './process-circle.component.html',
  styleUrls: ['./process-circle.component.css']
})
export class ProcessCircleComponent implements OnInit {
  @Input()
  percentage: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
