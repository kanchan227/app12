import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid:any;
  UserDetails:any=[];
  constructor(private userservice:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(){

  if(this.userservice.getToken())
  {
  console.log(this.userservice.getToken());
  }
  if(!this.userservice.isLoggedIn())
  {
    this.router.navigateByUrl('/');
  }

  this.userid=this.activatedRoute.queryParams.subscribe(params=>{
  //  this.userid=params['id'];
    this.userid=this.userservice.getid();
    console.log(this.userservice.getid());
    console.log(this.userid);
    this.userservice.getselectedUser(this.userid).subscribe((res)=>{
      this.UserDetails=res;
      console.log(res);
    });

  },(err)=>{
    console.log(err);
  })
}

 onEditUser()
 {
   this.router.navigate(['/edit-profile'],{"queryParams":{id:this.userid}});
 }

 ondeleteUser()
 {
    console.log(this.userid);
    this.userservice.deleteUser(this.userid).subscribe((res)=>{
      console.log(res);
      alert('Profile deleted successfully !!!!!!');
      this.router.navigate(['/profile'],{"queryParams":{id:this.userid}});
    },(err)=>{
      console.log(err);
    })
 }

}

