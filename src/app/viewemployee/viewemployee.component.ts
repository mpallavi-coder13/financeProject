import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import {EmpService} from '../emp.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private EmployeeService:EmpService,private router:Router,private route : ActivatedRoute) { }

  emp:Employee[];
  emp1 = new Employee();
  typeOfEmp :String = '';
countEmp :number ;
  ngOnInit() {
      this.typeOfEmp = 'employee'
      this.EmployeeService.getAllEmpData(this.typeOfEmp).subscribe(rs=>{
      this.emp=rs;        
    });   

    this.EmployeeService.getEmployeeCount().subscribe(rs=>
      {
        this.emp=rs;
        console.log("here count is = "+this.emp);        
      });     
  }



  deleteData(empid)
  {
   
      this.EmployeeService.deleteEmp(empid).subscribe(rs=>{
        this.emp=rs;
       // this.router.navigate(['viewemployee'],{relativeTo:this.route})
      });
   
  }

  tobeeditDiv=false;

  editData(empid)
  {
    console.log(empid);
    this.tobeeditDiv=true;
    this.EmployeeService.editData(empid).subscribe(rs=>{
      console.log(rs);
       this.emp1=rs;
    });
  }

  updating(u){
    this.tobeeditDiv = false;
    console.log(u);
    this.EmployeeService.updating(u).subscribe(rs=>{
      this.emp=rs;
    });
   }

}
