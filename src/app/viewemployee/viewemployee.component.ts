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
empDiv = false;
noDataDiv = false;

  ngOnInit() {

    this.empDiv = true;
      this.typeOfEmp = 'employee'
      this.EmployeeService.getAllEmpData(this.typeOfEmp).subscribe(rs=>{
      this.emp=rs;     
      console.log("rs ="+this.emp);   
      if(rs ==null)
      {
        this.noDataDiv = true;
      }
    });   

    this.EmployeeService.getEmployeeCount().subscribe(rs=>
      {
        this.emp=rs;
        console.log("here count is = "+this.emp);        
      });     
  }
  tobeeditDiv=false;

  viewDetailsDiv = false;
  viewData(empid)
  {
    this.tobeeditDiv=false;

    console.log("empid :"+empid);
    this.viewDetailsDiv = true;
    this.EmployeeService.getEmp(empid).subscribe(rs=>{
      console.log(rs);
       this.emp1=rs;
       console.log(this.emp1.empid)
       
    });
  }

  delSucess =false;
  deleteData(empid)
  {
    this.tobeeditDiv=false;
    this.viewDetailsDiv = false;

   console.log(empid);
      this.EmployeeService.deleteEmp(empid).subscribe(rs=>{
        this.emp=rs;
      });
      this.delSucess =true;
   
  }

  editData(empid)
  {
    this.viewDetailsDiv = false;
    //console.log(empid);
    this.tobeeditDiv=true;
    this.EmployeeService.editData(empid).subscribe(rs=>{
      console.log(rs);
       this.emp1=rs;
    });
  }
  upSucess =false;
  updating(u){
    this.tobeeditDiv = false;
    console.log(u);
    this.EmployeeService.updating(u).subscribe(rs=>{
      this.emp=rs;
    });
    this.upSucess = true;
   }

   closeDiv()
   {
     this.viewDetailsDiv = false;
this.tobeeditDiv = false;
   }

}
