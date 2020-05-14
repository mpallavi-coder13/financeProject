import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Login } from '../model/login.model';
import { QueryService } from '../query.service';
import { Query } from '../model/query.model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
user = new User();
user1:User[]=[];
login = new Login();
queries :Query[]=[];
queries1 = new Query();
@Input() userid:number;

constructor(private route : ActivatedRoute,private router:Router,private UserService:UserService,private QueryService:QueryService) {
 }

  ngOnInit() { 
    this.route.params.subscribe(params=>{this.userid=params['userid']})
    console.log("Data of params :"+this.userid);
 this.UserService.getsingleUser(this.userid).subscribe(rs=>{
   console.log("userDadta :"+rs);
   this.user=rs;

 }); 

  }


  submitQuery(userid)
  {         
    this.QueryService.getQuerysubmitted(this.userid).subscribe(rs=>{
      this.queries1=rs;
    });    
  }
}
