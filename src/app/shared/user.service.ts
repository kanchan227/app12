import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginuser, User } from './user.model';
import{environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  newUser: User={
    name:' ',
    email:' ',
    password:' ',
    contact:' ',

  }

  existinguser:loginuser={
    email:' ',
    password:' '
  }

  loginauth=false;

  constructor(private http:HttpClient) { }

  addNewUser(user:User)
  {
    return this.http.post(environment.apiBaseUrl + 'newUser',user);
  }

  loginuser(verifyUser:loginuser)
  {
    return this.http.post(environment.apiBaseUrl+'auth',verifyUser);
  }
  setUserid(id:string)
  {
    localStorage.setItem('userid',id);
  }
  getid()
  {
    return localStorage.getItem('userid');
  }

  getselectedUser(id:string)
  {
   return this.http.get(environment.apiBaseUrl+'selecteduser/'+id);
  }

  UpdateUser(id:string, data:string) {
    return this.http.put(environment.apiBaseUrl+'updaterecord/'+id,data);
  }

  deleteUser(id:any)
  {
    return this.http.delete(environment.apiBaseUrl+'deleteuser/'+id);
  }

  //store token
  setToken(token:string)
  {
    localStorage.setItem('token',token);
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  removeToken()
  {
    localStorage.removeItem('token');
  }
  //token verification

  getPayload()
  {
    var token=JSON.stringify(this.getToken());
    var userPayload=atob(token.split('.')[1]);

    if(userPayload)
    {
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }
  }

  isLoggedIn()
  {
    var userpayload=this.getPayload();
    if(userpayload)
    {
      return userpayload.exp>Date.now()/1000;
    }
    else{
      return null;
    }
  }
  removeUser(id:string){
    localStorage.removeItem(id);
  }
  isauthen(){
    return localStorage.getItem('user')!=null;
   }
   onlogin()
  {
    this.loginauth=true;
  }

  isauthenticated()
  {

    return localStorage.getItem('user')!=null;
  }
  }



