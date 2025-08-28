import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userclass } from '../models/userclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsercrudService {

  constructor(public httpClient: HttpClient){
}
  getAllUsers(): Observable<Userclass[]>{
    return this.httpClient.get<Userclass[]>("http://localhost:3000/users");
  }
  //post
  addNewUser(newUser: Userclass){
    return this.httpClient.post("http://localhost:3000/users", newUser)
  }
  //put
  updateUser(userId:any, updatedUser: Userclass){
    return this.httpClient.put("http://localhost:3000/users/"+userId, updatedUser)
  }
  //delete
  deleteUser(userId: string){
    return this.httpClient.delete("http://localhost:3000/users/"+userId);
  }
  getAll(){
    return fetch("http://localhost:3000/users");
  }
}
