import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:Array<User> = [ ];

  constructor() {
    let saveuser = JSON.parse(localStorage.getItem('users'));
    if(saveuser != null) {
      this.users = saveuser;
    }else{
      this.users = [];
    }
  }

  adduser(nom,prenom,email,age,description)
  {
    this.users.push({nom,prenom,email,age,description});
    this.loaduser();
  }
  deleteuser(i){
    this.users.splice(i,1);
    this.loaduser();
  }
  loaduser(){
    localStorage.setItem('users',JSON.stringify(this.users));
  }
}

