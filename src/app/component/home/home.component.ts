import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
user:any;
username:any;

constructor(private rs:Router){}

ngOnInit(){
    if(localStorage.getItem("loggedin")==null){
      this.rs.navigateByUrl("/");
    }
    else {
       this.user=localStorage.getItem("loggedin");
       this.username=JSON.parse(this.user).username;
       console.log(this.username);
    }
}

}
