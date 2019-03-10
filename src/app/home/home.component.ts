import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   constructor( private userserve : UsersService,private title:Title) {
     this.title.setTitle('Accuiel - User angular');
   }

  ngOnInit() {
  }
  supprimer(i){
    this.userserve.deleteuser(i);
  }

}
