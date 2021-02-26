import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-calculator',
  templateUrl: './new-calculator.component.html',
  styleUrls: ['./new-calculator.component.css']
})
export class NewCalculatorComponent implements OnInit {

  firstNumber: number =0;
  secondNumber: number = 0;
  result: number = 0;
  showError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  calculateNumbers(){
    if(this.secondNumber == 0)
    {
      this.showError = true;
    }
    else{
      this.showError = false;
      this.result = this.firstNumber /this.secondNumber;
    }
  }
  clearValues(){
    this.firstNumber = 0;
    this.secondNumber = 0;
  }
}
