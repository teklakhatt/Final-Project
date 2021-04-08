import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css']
})
export class MyCalculatorComponent implements OnInit {
  firstNumber: number =0;
  secondNumber: number = 0;
  resultText: string="აქ გამოჩნდება შედეგი";
showDiv: boolean = false;
  nameString: string = "";


  someText: string = "text from ts file";
  constructor() { }

  ngOnInit(): void {
  }

  calculateNumbers()
  {
    var numbersSum = this.firstNumber + this.secondNumber;
    var numbersMultiply = this.firstNumber * this.secondNumber;

    //this.resultText = numbersSum.toString();
    this.resultText = "Sum is: " + numbersSum + " ,Multiply is: " + numbersMultiply;
  }

  checkString()
  {
if(this.nameString.length > 5)
{
  this.showDiv = true;
}
else { this.showDiv = false;}
  }
}
