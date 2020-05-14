import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { User } from '../model/user.model';
import { Login } from '../model/login.model';
import {UserService} from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router:Router,private UserService:UserService) { }
user = new User();
login = new Login();
@Input() loginId:number;

  ngOnInit() {

    this.route.params.subscribe(params=>{this.loginId=params['loginId']})
          console.log("Data of params :"+this.loginId);
       this.UserService.getUserdata(this.loginId).subscribe(rs=>{
         console.log("AdminDadta :"+rs);
         this.user=rs;
         console.log("data will print here");
         console.log(this.user.login.password);
       }); 
   
  }

  showUserDiv=true;
  showOtherDiv = false;
  getQuery(userid)
  {
    console.log("id"+userid);
    this.showOtherDiv = true;
    this.showUserDiv = false;
    this.router.navigate(['query',this.user.userid],{relativeTo:this.route});


  }

}
