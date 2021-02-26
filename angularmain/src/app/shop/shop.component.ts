import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 
  productsArray: any = [
    {id: 1,name:"apple", price:2, quantity:3000, type:"ხილი"},
    {id: 2,name:"banana", price:3, quantity:300, type:"ხილი"},
    {id: 3,name:"vodka", price:30, quantity:1000, type:"სასმელი"},
    {id: 4,name:"orange", price:5, quantity:3000, type:"ხილი"},
    {id: 5,name:"tomato", price:3, quantity:55000, type:"ხილი"}
  ]