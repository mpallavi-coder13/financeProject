import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'src/app/model/login.model';
import { Employee } from 'src/app/model/employee.model';
import {ActivatedRoute,Router} from '@angular/router';
import {EmpService} from '../emp.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  login : Login;
 @Input() loginId:number;
  
  emp :Employee;
  constructor(private route : ActivatedRoute,private router:Router,private empservice:EmpService) { }
 

  ngOnInit() {
    this.route.params.subscribe(params=>{this.loginId=params['loginId']})
    console.log("Data of params :"+this.loginId);
 this.empservice.getadmin(this.loginId).subscribe(rs=>{
   console.log("AdminDadta :"+rs);
   this.emp=rs;
   console.log("data will print here");
   console.log(this.emp.login.loginId);
 }); 

  }

}
