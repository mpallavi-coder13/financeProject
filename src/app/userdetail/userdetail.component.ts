import { Component, OnInit } from '@angular/core';
import {EmpService} from '../emp.service';
import { User } from '../model/user.model';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user:User[]=[];
  emp1 :Employee[];
  emp = new Employee();
  user1 = new User();

  constructor(private EmpService:EmpService) { }

  ngOnInit(): void {
    this.EmpService.getUserDetails().subscribe(rs=>{
      this.user=rs;
       console.log(this.user);
    });
  }

  viewDetailsDiv = false;
  viewDetails(userid)
  {
    console.log("userId :"+userid);
this.viewDetailsDiv = true;
this.EmpService.getSingleData(userid).subscribe(rs=>{
  console.log(rs);
   this.user1=rs;
   console.log(this.user1.userid)
   
});
  }


  closeDiv()
  {
    this.viewDetailsDiv = false;
  }

}
