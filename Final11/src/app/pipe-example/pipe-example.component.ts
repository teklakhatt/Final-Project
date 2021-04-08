import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
currentDate: Date = new Date ();
  constructor() { }

  ngOnInit(): void {
    console.log (this.currentDate);
    console.log(this.currentDate.getDay());
    console.log(w )
  }

}
