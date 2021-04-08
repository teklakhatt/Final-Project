import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css']
})
export class MyParentComponent implements OnInit {

  childNumberValue: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  numberChangedHanlder(num: number)
  {
    this.childNumberValue = num;
  }
}
