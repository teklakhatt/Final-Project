import { Component, OnInit, Input } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
@Input() inputSearch: string = "";
@Input() inputId: number = 0;
@Input() inputBody: string = "";
showWarning : boolean = false;
fullUserData: any[] = [];
  usersData: any[] = [];
  constructor(public userService : UsersServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
      this.usersData = data;
      this.fullUserData = data;

      this.showWarning = data.length == 0;
      }
    );
   }

   ngOnChanges(changes: any){
    for(let property in changes)
    {
      if(property == "inputSearch")
      {
        var search = changes[property].currentValue;
        console.log(search);
        if(search != "" && search != undefined)
        {
          this.usersData = this.fullUserData.filter((x:any)=>
           x.id == search ||
          x.userId == search ||
          x.title.indexOf(search)> -1 ||
          x.body.indexOf(search)> -1
          );
          
        }
        else{
          this.usersData = this.fullUserData;
        }

        this.showWarning = this.usersData.length == 0;
      }

      else if(property == "inputId"){
          var id = changes[property].currentValue;
        if (id != undefined && id != 0){

         this.usersData = this.fullUserData.filter((x: any) => x.id == id);
        }
        else{

         this.usersData = this.fullUserData;
          }
     
    }
    if(property == "inputBody"){
      var body = changes[property].currentValue;
      if(body != undefined && body != "")
      {
        this.usersData = this.usersData.filter((x: any) => x.body.indexOf(body) > -1)
      }
    }
  }
    
  }

}
