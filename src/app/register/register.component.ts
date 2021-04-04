import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import{User} from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id:any;
  constructor(public userservice:UserService) { }

  ngOnInit() : void{

  }
  onSubmit(f:NgForm)
  {
    console.log(f.value);

    this.userservice.addNewUser(f.value).subscribe((res)=>{
      console.log(res);
      alert('User Registered Successfully!!!!!')
    },(err)=>{
      console.log(err);
    })
  }

}
