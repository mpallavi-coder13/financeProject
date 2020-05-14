import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Login } from '../model/login.model';
import {EmpService} from '../emp.service';
import {ActivatedRoute,Router} from '@angular/router';
import { AccountManagement } from '../model/AccountManagement.model';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  emp = new Employee();
  login=new Login();
  acm = new AccountManagement();

  type='user';

  status='active';
  
  constructor(private EmployeeService:EmpService,private router:Router,private route : ActivatedRoute) { }
  ngOnInit() {
    this.type='employee';
    this.status = 'active';
  }


  employeesignup()
  {
    this.status='active';
    this.type='employee';
    this.login.type=this.type;
    this.acm.status=this.status;
    this.emp.login=this.login;
    this.emp.accountmanagement = this.acm;
    console.log(this.emp);
    this.EmployeeService.addEmp(this.emp).subscribe(rs=>{this.emp.empid=rs});


    this.router.navigate(['employeesignup'],{relativeTo:this.route})
  }

}
