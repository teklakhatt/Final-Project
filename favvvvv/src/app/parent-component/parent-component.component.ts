import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
animalData: any[] = [];
  constructor() { 
this.animalData = [
 {name: "ვეფხვი", age: 10, place: "აფრიკა", link: "first"},
 {name: "პანდა", age: 5, place: "ჩინეთი", link: "second"}
]
console.log(this.animalData);
}

  ngOnInit(): void {
  }

}
