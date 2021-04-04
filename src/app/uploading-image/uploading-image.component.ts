import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import { FileUploadModule,FileSelectDirective } from 'ng2-file-upload';
import { UserService } from '../shared/user.service';
//const url="http://localhost:3000/uploadingImage";
@Component({
  selector: 'app-uploading-image',
  templateUrl: './uploading-image.component.html',
  styleUrls: ['./uploading-image.component.css']
})
export class UploadingImageComponent implements OnInit {
 //object of fileuploader
  public uploader:FileUploader=new FileUploader({
     url:'http://localhost:3000/uploads',
     itemAlias:'photo'
  });

  constructor(public userservice:UserService,private router:Router,public http:HttpClient) { }

  ngOnInit(){
     this.uploader.onAfterAddingFile=(file)=>{
       file.withCredentials=false;
     }

     this.uploader.onCompleteItem=(item:any, status:any,response:any,header:any)=>{
       alert("File uploaded successfully...");
       console.log("imageUpload",item,status,response);
     }
  }
  }

