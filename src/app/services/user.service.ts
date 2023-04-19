import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllusers():Observable<any>{
    let host="http://localhost:8080";
    return this.http.get<any>(host+"/users/getAllUsers");
  }

}
