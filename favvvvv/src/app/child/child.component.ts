import { Component, Input, OnChanges, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  count: number = 0;

  @Input()
  name: string = "";

  @Input()
  val1: number = 0;

  @Input()
  val2: number = 0;

  @Output()
  countChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any){
    for(let property in changes)
    {
      console.log(property);
      if(property == "count")
      {
        console.log(changes[property].previousValue);
        console.log(changes[property].currentValue);
        console.log(changes[property].firstChange);
      }
      if(property == "name")
      {
        console.log(changes[property].previousValue);
        console.log(changes[property].currentValue);
        console.log(changes[property].firstChange);
      }
    }
  }
}
