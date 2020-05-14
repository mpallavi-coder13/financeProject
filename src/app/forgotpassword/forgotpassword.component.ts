import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  user = new User();
  user1 = new User();
  constructor(private UserService:UserService) { }


  ngOnInit() {
    
  }

  forgotDiv = false;
  forgotPass(email)
  {        
   this.forgotDiv =true;
    // this.UserService.forgotPassword(this.user).subscribe(rs=>{this.user.email=rs});
    this.UserService.forgotPassword(email).subscribe(rs=>{
    this.user1; 
    });
  }
}




  
