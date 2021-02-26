import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {

  showParagraph: boolean=true;
  books: string[] =["book1","book2","book3","book4"];
  myNums: number[]=[10,20,30,40,50,60,70]
  constructor() { }

  ngOnInit(): void {
  }
hideElement(){
  console.log("hello from function!");
 // alert("hello");
 this.showParagraph=false;
}
showElement(){
  this.showParagraph = true;
}
toggleElement(){
  this.showParagraph = !this.showParagraph;
}
toggleElement2(){
  if(this.showParagraph==true)
  {
    this.showParagraph=false;
  }
  else
  {
    this.showParagraph=true;
  }
}
}

