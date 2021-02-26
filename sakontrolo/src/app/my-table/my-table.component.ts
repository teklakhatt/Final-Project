import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  bookss:Books[]=[
    {titles:"book1",years:2000,authors:"amirejibi1"},
    {titles:"book1",years:2000,authors:"amirejibi2"},
    {titles:"book1",years:2000,authors:"amirejibi3"},
    {titles:"book1",years:2000,authors:"amirejibi4"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
class Books{
  constructor(
    titles:string,
    years:number,
    authors:string
  ){}
}