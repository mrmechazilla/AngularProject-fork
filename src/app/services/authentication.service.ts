import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit{

  email:any
  passwordg:any
 
   private users = [
    {
      email: 'youssef@capgemini.com',
      password: '1234'
    },
    {
      email: 'nouhaila@capgemini.com',
      password: '12345'
    },
    {
      email: 'lukmane@capgemini.com',
      password: '123456'
    }
  ] 
  public isAuthenticated?: boolean;
  public userAuthenticated?: any;
  constructor(private usersp: UserService) { }
  ngOnInit(): void {
    this.usersp.getAllusers()
    .subscribe((value) =>{
      console.log("hhhh");
      this.passwordg=value
      console.log(value);   
    })
  
  }

 
  login(email: string, password:string){
    let user;
    this.users.forEach(element => {
      if(element.email == email && element.password == password){
        user = element;
       console.log("dddd",this.passwordg);
      }});
    if(user){
    this.isAuthenticated = true;
    this.userAuthenticated = user;
    }
    else{
      this.isAuthenticated = false;
      this.userAuthenticated = undefined;
    }
  }

}
