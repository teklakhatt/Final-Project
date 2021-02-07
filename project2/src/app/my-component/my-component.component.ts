import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  mytext: string;
  inputValue: string ="irina";
className: string ="yellow";
applyClass= false;

  constructor() { }


  ngOnInit(): void {
    this.mytext = "My Text From Component"
  }

}
