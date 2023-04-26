import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { User } from "../model/user.model";
import { Router } from "@angular/router";

@Injectable({providedIn:"root"})

export class UserService{
jwt:any | undefined;
name:string | undefined;
roles:Array<any> | undefined;


  constructor(private http: HttpClient,private router: Router) { }

  login(data: User):Observable<any>{
    let host="http://localhost:8081";
    return this.http.post<User>(host+"/login",data, {observe:'response'});
  }

  getAllusers():Observable<any>{
    let host="http://localhost:8081";
    return this.http.get(host+"/users");
  }

  save(client:User):Observable<any>{
    let host="http://localhost:8081";
    return this.http.post<User>(host+"/users", client);
  }

  saveToken(jwt:string){
    localStorage.setItem("token",jwt);
    this.jwt=jwt;
    this.parseJwt();

  }

  parseJwt(){
    
    let jwtHelper=new JwtHelperService();
  
    this.name=jwtHelper.decodeToken(this.jwt)['sub'];
    
    this.roles=jwtHelper.decodeToken(this.jwt)['roles'];

    console.log(this.name);
    console.log(this.roles);
    console.log(this.isAuthenticated());
    console.log("admin",this.isAdmin());
    console.log("user",this.isUser());
    
  }

  isAdmin(){
      return this.roles?.indexOf('ADMIN');
  }

  isUser(){

    return this.roles?.indexOf('USER');
  }

  isAuthenticated(){

    return this.roles!=undefined;
  }

  loadToken(){
    this.jwt=localStorage.getItem("token");
    this.parseJwt();
  }

  logout(){
    localStorage.removeItem("token");
    this.jwt=undefined;
    this.name=undefined;
    this.roles=undefined;

  }
  isUserLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem('token')) {
      // TODO il faut verifier si le access token est valid
      return true;
    }
    
      this.router.navigate(['login']);
    
    
    return false;
  }
    
  



}