import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './model/login.model';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url='http://localhost:9997/login';  


  getLoginCheck(username,password)
  {
    console.log(username);
    console.log(password);

    return this.http.get<Login>(this.url+'/logincheck'+'/'+username+'/'+password);

  }
}
