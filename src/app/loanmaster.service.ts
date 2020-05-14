import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loanmanagement } from './model/loanmanagement.model';
import { Loan } from './model/Loan.model';


@Injectable({
  providedIn: 'root'
})
export class LoanmasterService {

  constructor(private http:HttpClient) { }

  url='http://localhost:9997/employee';



loanmaster(loanm)
{
  console.log("In service :" +loanm);
  return this.http.post<number>(this.url+'/addloanmaster',loanm);
}


getAllloanProduct()
{
  return this.http.get<loanmanagement[]>(this.url+'/getAllLoanProduct');
}


getltype(loantype)
{
  return this.http.get<loanmanagement>(this.url+'/getLoantype'+'/'+loantype);

}

editLoanManagementData(loanmanagementid)
{
  return this.http.get<loanmanagement>(this.url+'/loanmanagement/'+loanmanagementid);

}

updatingLoanManagementMaster(loanm)
{
  return this.http.put<loanmanagement[]>(this.url+'/updatingLoanMaster',loanm);

}

getdeleteLoanMaster(loanmanagementid)
{
  console.log("iddd"+loanmanagementid);
  return this.http.delete<loanmanagement[]>(this.url+'/loanMaster/'+loanmanagementid);

}


}
