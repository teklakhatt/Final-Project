import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  cardTitle: string = "My Title";
  cardTextValue: string = "";
  textColor: string ="black";
  textColorValue: string = "";
  cardText: string = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  constructor() { }

  ngOnInit(): void {
  }
  changeText(){
    this.cardText = this.cardTextValue;
  }

  changeColor(){
    this.textColor = this.textColorValue;
  }
}
