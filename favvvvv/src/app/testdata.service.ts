import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TestdataService {

  constructor() { }

  getData() 
  {
    var productsArray: any = [
      {id: 1,name:"apple", price:2, quantity:3000, type:"ხილი"},
      {id: 2,name:"banana", price:3, quantity:300, type:"ხილი"},
      {id: 3,name:"banana", price:30, quantity:1000, type:"სასმელი"},
      {id: 4,name:"banana", price:5, quantity:3000, type:"ხილი"},
      {id: 5,name:"tomato", price:3, quantity:55000, type:"ხილი"}
    ]
    return productsArray;
  }

}
