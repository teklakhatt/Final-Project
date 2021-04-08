import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.css']
})
export class SelectComponentComponent implements OnInit {
selectValues: number[]=[];
showInfo: boolean = false;
selectedValue: string = "";


  constructor() { }

  ngOnInit(): void {
    console.log("hi");
    for(let i =0; i < 20; i++)
    {
      this.selectValues.push(i);
    }
  }

  valueChange(event : any)
  {
    if(event.target.value == "")
    {
      this.showInfo = false;
    }
    else{
    this.selectedValue = event.target.value;
    this.showInfo = true;
    }
  }

}
