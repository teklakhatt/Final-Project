import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  title: string= "card";
  text:string='skfvhsihvisdfhsfghfifghverhourhuohfiihfuifeh';
  textValue:string="";
  textColor:string="black";
  textColorValue:string="";
  constructor() { }

  ngOnInit(): void {
  }
  showText(){
   this.text="hello world"
  }

  changeText(){
    this.textValue=this.text;
  }
  changeColor(){
    this.textColor=this.textColorValue;
  }
}
