import { Login } from './login.model';
import { Loan } from './Loan.model';
import { Query } from './query.model';
import { Employee } from './employee.model';

export class User{

    userid:number;
    firstname:string;
    lastname:string;
    email:string;
    mobileno:number;
    currentaddress:string;
    permanentaddress:string;
    birthdate:Date;
    pincode:number;
    pancard:String;
    aadharcard:number;    
    usersince:Date;
    userstatus:String;
    login = new Login();
    loan = new Loan();  
    employee = new Employee();
}