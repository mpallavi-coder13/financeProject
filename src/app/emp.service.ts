import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee.model';
import { AccountManagement } from './model/AccountManagement.model';
import { loanmanagement } from './model/loanmanagement.model';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }

url='http://localhost:9997/employee';

 getadmin(loginId){
      console.log(loginId);
  return this.http.get<Employee>(this.url+'/'+loginId);
}

addEmp(emp)
{
  console.log("In service :" +emp);
  return this.http.post<number>(this.url+'/empadd',emp);

}


// useremp(empid)
// {
//   return this.http.get<Employee>(this.url+'/empupdating'+'/'+empid);

// }

typeOfEmp :String = '';
getAllEmpData(typeOfEmp)
{
  this.typeOfEmp = 'employee';
  return this.http.get<Employee[]>(this.url+'/getemployeealldata'+'/'+typeOfEmp);
}

getEmp(empvalue)
{
  return this.http.get<Employee>(this.url+'/getEmp'+'/'+empvalue);

}


deleteEmp(empid)
{
  return this.http.delete<Employee[]>(this.url+'/'+empid);
}

editData(empid)
{

  return this.http.get<Employee>(this.url+'/up/'+empid);
}

updating(emp)
{

  return this.http.put<Employee[]>(this.url+'/up',emp);
}

getEmployeeCount()
{
  return this.http.get<Employee[]>(this.url+'/count');

}

getLoanType()
{
  return this.http.get<loanmanagement[]>(this.url+'/getAllLoanProduct');

}


userfetch(empid)
{
  return this.http.get<Employee>(this.url+'/bb/'+empid);

}



// getAlloted(user)
// {
//   return this.http.post<User>(this.url+'/employee/user',user);

// }


getUserDetails()
{
  return this.http.get<User[]>(this.url+'/getusersalldata');
}




getSingleData(userid)
{
  return this.http.get<User>(this.url+'/getSingleUser'+'/'+userid);

}



}
