import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['./toys-list.component.css']
})
export class ToysListComponent implements OnInit {

  toysArray: any[] = [{"id": 1, "name": "pyramid", "price": 10, "type": "პირამიდები"},
  {"id": 2, "name": "teddy bear", "price": 50, "type": "რბილი"},
  {"id": 3, "name": "leggo", "price": 100, "type": "კონსტრუქტორი"}];

  editToy: any;
  max: number = 3;
  constructor() { }

  ngOnInit(): void {
  }
  ToysAddHandler(toy : any)
  {
    var editToy = this.toysArray.findIndex((x: any) => x.id == toy.id);
    console.log(editToy);
    if(editToy > -1)
    {
     var t = this.toysArray.find((x: any) => x.id == toy.id);
t.name = toy.name;
t.price = toy.price;
t.type = toy.type;

    }
    else{
    this.toysArray.push(toy);
    this.max = this.max + 1;
    }
  }
  edit(id: number){
    var toyToEdit = this.toysArray.filter((x:any) => x.id == id);
    //console.log(toyToEdit);
    this.editToy=toyToEdit;
  }
  delete(id: number){
    var deleteToy = this.toysArray.findIndex((x: any) => x.id == id);
    console.log(deleteToy);
    this.toysArray.splice(deleteToy,1);
  }
}
