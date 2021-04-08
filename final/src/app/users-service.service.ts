
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(public http: HttpClient) { }

  getUsers() : Observable<any[]>
{
  return this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts"); 
}
}
