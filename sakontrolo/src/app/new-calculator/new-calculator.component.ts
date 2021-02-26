import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-calculator',
  templateUrl: './new-calculator.component.html',
  styleUrls: ['./new-calculator.component.css']
})
export class NewCalculatorComponent implements OnInit {

  num1:number=0;
  num2:number=0;
  result:number=0;
  error:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
plus(){
  this.result=this.num1+this.num2;
}
minus(){
  this.result=this.num1-this.num2;
}
multyplie(){
    this.result=this.num1*this.num2;
}
devide(){
 if(this.num2==0){
   this.error=true;
 }
 else{
   this.error=false;
   this.result=this.num1/this.num2;
 }
}
clear(){
  this.result=0;
  this.num1=0;
  this.num2=0;
}
}
