import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { from } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';
import { UploadingImageComponent } from './uploading-image/uploading-image.component';
//import{MatToolbarModule} from '@angular/material/toolbar';
import { FileSelectDirective,FileUploadModule } from 'ng2-file-upload';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LogoutComponent,
    UploadingImageComponent,
    EditProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    FileUploadModule
  ],
  exports:[
    FileSelectDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
