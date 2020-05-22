import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Login } from '../model/login.model';
import { Employee } from '../model/employee.model';
import { EmpService } from '../emp.service';
import { RatingModule } from 'ng-starrating';
import {AuthService} from './../auth.service';
  

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  
  login : Login;
 @Input() loginId:number;

 emp1:Employee[]=[];
  emp :Employee;
  constructor(private route : ActivatedRoute,private router:Router,private adminservice:EmpService,private RatingModule:RatingModule,private AuthService: AuthService) { }
 
  statusOfUser:String=''; 

  
  ngOnInit() {  
    
    this.statusOfUser = 'registered';
    
    this.route.params.subscribe(params=>{this.loginId=params['loginId']})
          console.log("Data of params :"+this.loginId);
       this.adminservice.getadmin(this.loginId).subscribe(rs=>{
         console.log("AdminDadta :"+rs);
         this.emp=rs;
         console.log("data will print here");
         console.log(this.emp.login.password);
       }); 
      }

      profileDiv = true;

      getHome()
      {
        this.router.navigate(['#'],{relativeTo:this.route})
      }

      addEmp()
      {
        this.profileDiv = false;
        this.router.navigate(['addemployee'],{relativeTo:this.route})
      }

      viewEmp(typeOfEmp)
      {
        
        this.profileDiv = false;
        this.router.navigate(['viewemployee'],{relativeTo:this.route})
      }

      getReport()
      {
        this.profileDiv = false;
        this.router.navigate(['adminprofile'],{relativeTo:this.route})
        console.log("in service");
       this.adminservice.getEmployeeCount().subscribe(rs=>{
        this.emp1=rs;
        console.log("count will print here");
         console.log(this.emp1);
      });
      }

      tobeeditDiv=false;
      editData(empid)
      {
        console.log(empid);
        this.tobeeditDiv=true;
        this.adminservice.editData(empid).subscribe(rs=>{
          console.log(rs);
           this.emp=rs;
        });
      }
      upSucess = false;
      updating(u){
        
        this.tobeeditDiv = false;
        console.log(u);
        this.adminservice.updating(u).subscribe(rs=>{
          this.emp1=rs;
        });
        this.upSucess = true;
       }


       addLoanProduct()
       {
         this.profileDiv = false; 
         this.router.navigate(['loanproduct'],{relativeTo:this.route}) 
       }


       getLoanProduct()
       {
        this.profileDiv = false; 
        this.router.navigate(['viewloanproduct'],{relativeTo:this.route})
       }



       allotUser(statusOfUser)
      {
        console.log("st"+statusOfUser);
        this.profileDiv = false;
        this.router.navigate(['allotUsers'],{relativeTo:this.route})


        
      }
       



      test()
      {
        this.profileDiv = false;
        this.router.navigate(['testMe'],{relativeTo:this.route})
      }

      getUserDetails()
      {
        this.profileDiv = false;
        this.router.navigate(['letuserViewed'],{relativeTo:this.route})
      }

      getQueryDetail()
      {
        this.profileDiv = false;
        this.router.navigate(['letQueryViewed'],{relativeTo:this.route})
      }


      handleLogout()
      {
this.AuthService
      }
      
closeDiv()
{
  this.tobeeditDiv=false;
}
}
