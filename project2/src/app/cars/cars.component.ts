import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
nameControl = new FormControl('')
  constructor() { }
  carArray: any = [
  {id: 1, name: "Honda", year: 2011, color: "black"},
  {id: 2, name: "Bmw", year: 2013, color: "brown"},
  {id: 3, name: "Suzuki", year: 2016, color: "blue"},
  {id: 4, name: "Ferrari", year: 2019, color: "red"}
 
]

  ngOnInit(): void {
  }

}
