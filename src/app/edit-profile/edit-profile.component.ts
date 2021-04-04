import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import {UserService} from '../shared/user.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id!:any;
  editProfile:any=[];

  constructor( public userservice:UserService,private route:Router) { }

  ngOnInit(): void {
    this.id=this.userservice.getid();
   // console.log(this.id);
    this.userservice.getselectedUser(this.id).subscribe((res)=>{
    this.editProfile=res;
    })

  }

  onUpdateUser(F:NgForm)
  {

    this.userservice.UpdateUser(this.id,F.value).subscribe((res)=>{
      alert('Record updated successfully!!');
     this.route.navigate(['/profile'],{"queryParams":{id:this.id}})
    })
  }
}
