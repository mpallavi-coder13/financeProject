import { Login } from './login.model';
import { AccountManagement } from './AccountManagement.model';
import { User } from './user.model';

export class Employee
{
    empid:number;
    empfirstname:string;
    emplastname:string;
    email:string;
    mobileno:number;
    currentaddress:string;
    permanentaddress:string;
    birthdate:Date;
    pincode:number;
    pancard:String;
    aadharcard:number;    
    sincedate:Date;
    login=new Login();
    accountmanagement = new AccountManagement();
    //user : User[];
    
}