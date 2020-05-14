import { Component, OnInit } from '@angular/core';
import {UserService} from '.././user.service'
import { User } from '../model/user.model';
import {EmpService} from '../emp.service';
import { loanmanagement } from '../model/loanmanagement.model';
import {LoanmasterService} from '../loanmaster.service';
import { Loan } from '../model/Loan.model';

@Component({
  selector: 'app-applyforloan',
  templateUrl: './applyforloan.component.html',
  styleUrls: ['./applyforloan.component.css']
})
export class ApplyforloanComponent implements OnInit {

  constructor(private userService:UserService, private EmpService:EmpService,private LoanmasterService:LoanmasterService) { }
  user:User[]=[];
  lmt:loanmanagement[]=[];
user1 = new User();
loan = new Loan();
lmt1= new loanmanagement();

  ngOnInit() {
    console.log("in loan");    

    this.userService.getAllData().subscribe(rs=>{
      this.user=rs;
    });

    this.EmpService.getLoanType().subscribe(rs=>{
      this.lmt=rs;
    });
  }
  userDiv = false;
  varifyDiv = false;

  onOptionsSelected(uservalue)
  {
    this.varifyDiv=true;
    this.userDiv = true;
    console.log("in select method")
     console.log(uservalue);
    this.userService.getUser(uservalue).subscribe(rs=>{
       this.user1=rs; 
       console.log("here");
     console.log(this.user1.firstname);
     });
    console.log("click working");
   // console.log(this.user);

   this.loan.loaninterest = uservalue;
 //  console.log(this.loan.loaninterest);
  }


  loanDiv = false;
  onOptionsLoan(loantype)
  {

    this.LoanmasterService.getltype(loantype).subscribe(rs=>{
      this.lmt1=rs; 
      console.log("here");
    console.log(this.lmt1.loaninterest);
    });
  }
  okDiv = false;
  typeDiv=false;
  varifyLoan(u)  
  {    
    this.loanDiv = true;
this.typeDiv=true;
    this.okDiv=true;
    this.userService.loanapp(u).subscribe(rs=>{
      console.log(rs);
       this.user1=rs;
       console.log(this.loan);
    });

  
  }
  loaninterest =  this.lmt1.loaninterest;
  successDivs = false;
  submitLoan(user)
  {
    this.userDiv=false;
    this.successDivs = true;
     this.user1.loan.loaninterest =this.lmt1.loaninterest  ;
console.log("loan"+this.loaninterest);
    console.log("click is working");
this.userService.loanapp1(user).subscribe(rs=>{
    // console.log(rs);
       this.user1=rs;
       console.log(this.loan);

     });

  }
  
}
