import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) { }
  id!:string;
  ngOnInit(): void {
    this.userservice.removeUser(this.id);
    this.userservice.loginauth=false;
    this.router.navigate(['/login']);

  }

}
