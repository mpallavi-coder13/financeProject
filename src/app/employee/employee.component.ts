import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {EmpService} from '../emp.service';
import { Employee } from '../model/employee.model';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
emp = new Employee();
login = new Login();
@Input() loginId:number;

  constructor(private route:ActivatedRoute,private router:Router,private EmpService:EmpService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{this.loginId=params['loginId']})
    console.log("Data of params :"+this.loginId);
 this.EmpService.getadmin(this.loginId).subscribe(rs=>{
   console.log("AdminDadta :"+rs);
   this.emp=rs;
   console.log("data will print here");
   console.log(this.emp.login.password);
 }); 
  }


  welcomeDiv = true;
  applyLoan()
  {
    console.log("loginid"+this.loginId);
    this.welcomeDiv = false;
    this.router.navigate(['loanApplication'],{relativeTo:this.route});
  }


}
