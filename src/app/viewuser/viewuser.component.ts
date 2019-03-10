import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  userId;
  usertab;
  constructor(private userserve: UsersService, private route: ActivatedRoute,private title:Title) {
    this.title.setTitle('Profile');
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    //console.log(this.userId);
    this.usertab = this.userserve.users[this.userId];
  }

}
