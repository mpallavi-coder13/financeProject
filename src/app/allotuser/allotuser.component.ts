import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { EmpService } from '../emp.service';
import { User } from '../model/user.model';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-allotuser',
  templateUrl: './allotuser.component.html',
  styleUrls: ['./allotuser.component.css']
})
export class AllotuserComponent implements OnInit {

  constructor(private userService:UserService, private EmpService:EmpService) { }
  user1 = new User();
user:User[]=[];
emp:Employee[]=[];
emp1 = new Employee();
statusOfUser:String=''; 
typeOfEmp :String = '';
  ngOnInit() {

this.typeOfEmp = 'employee';
    this.EmpService.getAllEmpData(this.typeOfEmp).subscribe(rs=>{
      console.log("emp"+this.emp);
          this.emp=rs;
        });


        this.statusOfUser = "registered";
        console.log("in allot"+this.statusOfUser);
    this.userService.getAllData().subscribe(rs=>{      
      this.user=rs;
    });


   

  }


  onOptionsSelected(uservalue)
  {
   
    console.log("in select method")
     console.log(uservalue);
    this.userService.getUser(uservalue).subscribe(rs=>{
       this.user1=rs; 
       console.log("here");
     console.log(this.user1.firstname);
     });
    console.log("click working");
   // console.log(this.user);  
  }

  onOptionsSelectedemp(empvalue)
  {
   
    console.log("in select method")
     console.log(empvalue);
    this.EmpService.getEmp(empvalue).subscribe(rs=>{
       this.emp1=rs; 
       console.log("here");
     console.log(this.emp1.empfirstname);
     });
    console.log("click working");
   // console.log(this.user);  
  }


  eId:number;
uId :number;
  allotDiv = false;
  getUserInfo(uId,eId)
  {
this.uId = this.user1.userid;
this.allotDiv = true;
    this.userService.userget(this.uId).subscribe(rs=>{
      console.log(rs);
       this.user1=rs;       
    });
this.eId = this.emp1.empid;
console.log("eId"+eId);
    this.EmpService.getSingleempData(this.eId).subscribe(rs=>{
      console.log(rs);
       this.emp1=rs;       
    });
    

   

  }
  allotedDiv = true;
  allotsuccessDiv = false;
  userstatus:string;
  alloted()
  {
    
    this.userstatus = 'alloted';
this.user1.userstatus = this.userstatus;
this.user1.employee = this.emp1;
console.log(this.user1)

    this.userService.getAlloted(this.user1).subscribe(rs=>{      
      this.user1=rs;
      this.allotedDiv = false;
    this.allotsuccessDiv = true;
    });
  }

}
