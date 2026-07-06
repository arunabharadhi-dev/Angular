import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-login',
  imports: [FormsModule,DialogModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  username = "";
  password = "";

  login(){
  if(this.username === "admin" && this.password === "1234"){
    alert("login successfully")
  }else{
    alert("invalid")
  }
  }
}

