import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputText: string= "ddd";
  showDiv: boolean=this.inputText == "ddd"?true:false;

  isLoggedIn: boolean=true;
  isLoggedOut: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
