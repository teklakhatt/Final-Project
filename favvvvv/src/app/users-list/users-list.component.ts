import { Component, OnInit } from '@angular/core';
import { UserserviseService } from '../userservise.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: any[]=[];
  constructor(public userServise: UserserviseService) { }

  ngOnInit(): void {
    console.log(this.userServise.getUsers());
  }

}
