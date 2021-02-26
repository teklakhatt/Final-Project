import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-hello',
  templateUrl: './my-hello.component.html',
  styleUrls: ['./my-hello.component.css']
})
export class MyHelloComponent implements OnInit {

  num:number=1;
  constructor() { }

  ngOnInit(): void {
  }
plus(){
 this.num=this.num+1;
}
minus(){
  this.num=this.num-1;
 }
}
