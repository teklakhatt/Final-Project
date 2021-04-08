import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';
  searchWord : string = "";
  searchInput : string = "";


  idWord: number = 0;
  idInput: number = 0;

  bodyWord: string ="";
  bodyInput: string = "";

  searchData(){
this.searchWord = this.searchInput;
  }

  searchById(){
    this.idWord = this.idInput;
    this.bodyWord = this.bodyInput;
  }
}
