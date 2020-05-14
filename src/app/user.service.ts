import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url='http://localhost:9997/user';


  addUser(user)
  {
    console.log("In service :" +user);
    return this.http.post<number>(this.url+'/useradd',user);
  
  }


  getUserdata(loginId)
  {   
      console.log(loginId);
  return this.http.get<User>(this.url+'/getuserlogin/'+loginId);

  }

  getsingleUser(userid)
  {   
      console.log(userid);
  return this.http.get<User>(this.url+'/getUser/'+userid);

  }

  forgotPassword(email)
  {    
    return this.http.get<String>(this.url+'/forgotPassword'+email);  
  }

  statusOfUser:string = 'alloted';
  getAllData()
{
  this.statusOfUser = 'alloted';
  return this.http.get<User[]>(this.url+'/status/'+this.statusOfUser);
}



getUser(uservalue)
{
  return this.http.get<User>(this.url+'/getUser'+'/'+uservalue);

}


loanapp(userid)
{
  return this.http.get<User>(this.url+'/'+userid);

}

loanapp1(user)
{
  console.log("working");
  //console.log(user);
  return this.http.post<User>(this.url+'/loanadd',user);

}

      getUserStatus(uservalue)
      {
        return this.http.post<User>(this.url+'/status',uservalue);

      }


      userget(uId)
{
  return this.http.get<User>(this.url+'/bb'+'/'+uId);

}


getAlloted(eId)
{
  console.log("id here"+eId);
  
  return this.http.post<User>(this.url+'/employee/users'+'/',+eId);

}

 

}
