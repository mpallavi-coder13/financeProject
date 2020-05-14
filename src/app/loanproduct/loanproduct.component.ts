import { Component, OnInit } from '@angular/core';
import {LoanmasterService} from '../loanmaster.service';
import { loanmanagement } from '../model/loanmanagement.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-loanproduct',
  templateUrl: './loanproduct.component.html',
  styleUrls: ['./loanproduct.component.css']
})
export class LoanproductComponent implements OnInit {
  loanm = new loanmanagement();
loanm1:loanmanagement[]=[];

  constructor(private LoanmasterService:LoanmasterService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.LoanmasterService.getAllloanProduct().subscribe(rs=>{
      this.loanm1=rs;
       console.log(this.loanm1);
    });

  }


  addedsuceessDiv = false;
  addLoanMaster(loanm)
  {  
       this.LoanmasterService.loanmaster(this.loanm).subscribe(rs=>{
         this.loanm.loanmanagementid=rs
        if(rs!=null)
        {
         this.addedsuceessDiv = true;
        }
        
        });

       
  }

  tobeeditDiv=false;
  editLoanMasterData(loanmanagementid)
  {
    console.log(loanmanagementid);
    this.tobeeditDiv=false;    
    this.LoanmasterService.editLoanManagementData(loanmanagementid).subscribe(rs=>{
      console.log(rs);
       this.loanm=rs;
    });
  }
  edittedsuceessDiv = false;
  updating(loanm){
    console.log(loanm);
    this.LoanmasterService.updatingLoanManagementMaster(loanm).subscribe(rs=>{
      this.loanm1=rs;
      if(rs!=null)
      {
        this.edittedsuceessDiv = true;
      }
    });
   }
  
   DelsuceessDiv = false;
   deleteLoanMaster(loanmanagementid)
{
  this.LoanmasterService.getdeleteLoanMaster(loanmanagementid).subscribe(rs=>{
    console.log(rs);
     this.loanm1=rs;

     if(rs !=null)
     {
          this.DelsuceessDiv =true;
     }
  });
}
 

}
