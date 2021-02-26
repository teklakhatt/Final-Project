import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {

  animalData: any[]=[];
  constructor() {
    this.animalData=[
      {name:"vefxvi",age:10,place:"afrika", link:"tiger"},
      {name:"panda",age:3,place:"chineti", link:"panda"}
    ]
   }
  ngOnInit(): void {
  }

}
