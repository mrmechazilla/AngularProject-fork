import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

form!: FormGroup;
isLogin = false
errorAuth?: string;
verify = "";
usersSub: Subscription | undefined;
client: User={
name:'',
lastName:'',
password: '',
};
user!: User[] ;
isSucces!: boolean;
email: FormControl;
password: FormControl;


constructor( private fb: FormBuilder,private userService:UserService,
    private route:Router) {
    this.email=this.fb.control("",[Validators.minLength(3)])
    this.password=this.fb.control("",[Validators.required,Validators.minLength(3)]) 
    this.form = this.fb.group({
      email:this.email,
      password:this.password
      });
  
    }

ngOnInit(): void {
  

  this.usersSub=this.userService.getAllusers()
  .subscribe({
    next:(value:User[])=>{
      this.user=value;
        console.log(this.user);
        
    },
    error:(error:any)=>{
      console.log(error);  
    },
    complete:()=>{
      console.log("Completed");
      console.log(this.user[0]);
      console.log(this.email.value);
      console.log(this.password.value);
    }
  })
}

submit() {
    this.client.name=this.email.value;
    this.client.password=this.password.value;
    console.log(this.client.name);
    console.log(this.client.password);
  
    this.isSucces=this.userService.isAuthenticated();
    
    this.userService.login(this.client).subscribe(resp=>{
  
      let jwt=resp.headers.get('Authorization');  
      console.log(jwt);
      this.userService.saveToken(jwt);
      
    if (this.isSucces) {
      if(this.userService.isAdmin()==-1){
        this.route.navigate(["/home"]); 
      }
      
      
    }
    
    },err=>{
  
      if (this.isSucces==false) {
      
        this.errorAuth="Incorrect Email or Password"
      }
      
  
    })
    
  
  

  
  
  }


get f() {
  return this.form.controls;
}

}