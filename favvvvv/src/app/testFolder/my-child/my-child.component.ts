import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit {

  @Output()
  numberChanged: EventEmitter<number> = new EventEmitter();

  childValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
increment()
{
  this.childValue ++;
  this.numberChanged.emit(this.childValue);
}

decrement(){
  this.childValue --;
  this.numberChanged.emit(this.childValue);
}
}
