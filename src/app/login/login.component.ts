import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

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
  client={
	  email:'',
	  password:''

  };

  constructor(private fb: FormBuilder, private auth:AuthenticationService, private route:Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
    });
  }

  submit() {
   /*  // do something with the form data
    this.client.email = this.form.value['email'];
    this.client.password = this.form.value['password'];
    this.auth.login(this.client.email,this.client.password)
    if(this.auth.isAuthenticated){
      //this.auth.saveAuthUser();
      console.log("gfggfgfgf");
      this.route.navigate(["register"]);
      
    }else
    {
      this.errorAuth = "Votre email ou password est incorrect";
    } */
    }


  get f() {
    return this.form.controls;
  }

}
