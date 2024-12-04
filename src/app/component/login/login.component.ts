import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 username:any;
 password:any;
 reqpwd:any;
 user:any;

 loginform:FormGroup=new FormGroup({});

 constructor(private rs:Router,private fb:FormBuilder){
   this.loginform=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
   })
 }

 //logic for login
checklogin(){
    this.reqpwd=this.loginform.value.username.slice(0,3)+"123";
    console.log(this.reqpwd);
    if(this.loginform.value.username=="admin" && this.loginform.value.password==this.reqpwd){
         //local storage
         this.user={
          username:this.loginform.value.username
         }
         console.log(this.user);
         localStorage.setItem("loggedin",JSON.stringify(this.user));
         //end for local storage
         //router
         this.rs.navigateByUrl("user");
         //sweetalert2
         Swal.fire({
          
          text: "Successfully into Home Page",
          icon: "success"
        });
    }
    else{
      Swal.fire({
       
        text: "Failed login credentials",
        icon: "error"
      });
    }
}
}
