import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  iserreur:boolean = false;
  constructor(private userserve: UsersService,private router : Router,private title:Title) {
    this.title.setTitle('Ajouter un utilisateur');
  }

  ngOnInit() {
  }
  useradd(nom,prenom,email,age,description){
    if(nom.value != '' && prenom.value != '' && email.value != '' && age.value != '' && description.value != ''){
    this.userserve.adduser(nom.value,prenom.value,email.value,age.value,description.value);
    this.router.navigate(['/']);
    }else{
      this.iserreur = true;
    }
  }
  retourhome(){
    this.router.navigate(['/']);
  }

}
