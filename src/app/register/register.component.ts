import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();

  login=new Login();

  constructor(private UserService:UserService) { }

 

  ngOnInit() {


  }
type:string;
userstatus:String;

  signup()
  {
    
    this.type='user';
    this.login.type=this.type;
    this.user.login=this.login;
    this.userstatus = 'registered';
    this.user.userstatus = this.userstatus;
    console.log(this.user);
    this.UserService.addUser(this.user).subscribe(rs=>{this.user.userid=rs});
  }
  

}
