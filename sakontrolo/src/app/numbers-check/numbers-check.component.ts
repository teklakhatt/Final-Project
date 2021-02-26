import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-check',
  templateUrl: './numbers-check.component.html',
  styleUrls: ['./numbers-check.component.css']
})
export class NumbersCheckComponent implements OnInit {

  number1:number=0;
  number2:number=0;
  result:string="";
  constructor() { }

  ngOnInit(): void {
  }
checkNums(){
  if(this.number1>this.number2){
   this.result="1 metia"
  }
  else if(this.number1<this.number2){
    this.result="2 metia"
  }
  else{
    this.result="tolia"
  }
}
}
