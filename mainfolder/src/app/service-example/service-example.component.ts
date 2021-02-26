import { Component, OnInit } from '@angular/core';
import { TestdataService } from '../testdata.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  constructor(private testData : TestdataService) {}
    productsArray: any = [
      {id: 1,name:"apple", price:2, quantity:3000, type:"ხილი"},
      {id: 2,name:"banana", price:3, quantity:300, type:"ხილი"},
      {id: 3,name:"vodka", price:30, quantity:1000, type:"სასმელი"},
      {id: 4,name:"orange", price:5, quantity:3000, type:"ხილი"},
      {id: 5,name:"tomato", price:3, quantity:55000, type:"ხილი"}
    ]
  

  ngOnInit(): void {
  }

}
