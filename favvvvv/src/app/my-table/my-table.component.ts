import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  books: Book[] =[
  {title: "Book1", year: 2000, author: 'author1'},
  {title: "Book2", year: 2007, author: 'author2'},
  {title: "Book3", year: 2008, author: 'author3'},
  {title: "Book4", year: 2002, author: 'author4'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}


class Book {
  constructor(
  title: string,
  year: number,
  author: string
  ) {} 
}

