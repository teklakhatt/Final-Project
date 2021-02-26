import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-minus-numbers',
  templateUrl: './plus-minus-numbers.component.html',
  styleUrls: ['./plus-minus-numbers.component.css']
})
export class PlusMinusNumbersComponent implements OnInit {

  myNumber: number = 1;
  newName: string = "";
  names: string[] =["irina", "nino", "tamta", "ana"];
  constructor() { }

  ngOnInit(): void {
  }
damateba(){
  this.myNumber = this.myNumber +=1;
}
gamokleba(){
  this.myNumber = this.myNumber -=1;
}
addName(){
  this.names[0] = this.newName;
}
}
