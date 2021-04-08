import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviseService {

  users: any[] = [];
  constructor(public http: HttpClient) { }

  getUsers()
{
  this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts")
  .subscribe(
    data =>{
      this.users = data;
      console.log(this.users);
      return this.users;
    }
  );
}
}


