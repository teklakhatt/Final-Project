import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentCounter: number = 10;
  inputName: string = "";
  childName: string = "";

  parentVal1: number = 0;
  parentVal2: number = 0;

  childVal1: number = 0;
  childVal2: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addNumber(){
  this.parentCounter ++;  
  }

  minusNumber(){
    this.parentCounter --;
  }

  hello(){
this.childName = this.inputName;
  }

  sum(){
this.childVal1 = this.parentVal1;
this.childVal2 = this.parentVal2;
  }
}
