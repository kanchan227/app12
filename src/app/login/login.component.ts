import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userservice:UserService,
    private routes:Router) { }
 // showmessage=false;
  errormessage=false;
  err:string=' ';
  resData:any=[];
  id!:string
  ngOnInit(): void {
  }

  login(f:NgForm)
  {
    //console.log(f.value);
    this.userservice.loginuser(f.value).subscribe((res)=>
    {
      console.log(res);
      this.resData=res;
      console.log(this.resData.token);
      this.userservice.setToken(this.resData.token);
      this.id=this.resData.data._id;
      this.userservice.setUserid(this.id);
      console.log(this.id);
      this.routes.navigate(['/profile'],{"queryParams":{id:this.id}})

    },(err)=>{
      this.errormessage=true;
      this.err=err;
      console.log(err);
      alert('please register first!!!');
    })

  }

}
