import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css']
})
export class MyCalculatorComponent implements OnInit {

  num1:number=0;
  num2:number=0;
  resultSum:string="";
  result:string="";
  constructor() { }

  ngOnInit(): void {
  }
  calculatesum(){
    var sum = this.num1+this.num2;
    this.resultSum="jami aris: "+sum;
  }
  calculate(){
    var mult = this.num1*this.num2;
    this.result="namravlia: "+ mult;
  }
}
