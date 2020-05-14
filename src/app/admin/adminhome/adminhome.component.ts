import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Chart} from 'chart.js'
import { EmpService } from 'src/app/emp.service';
import { Employee } from 'src/app/model/employee.model';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  emp:Employee[]=[];
  constructor(public router: ActivatedRoute,private EmpService:EmpService) { }

  BarChart=[];
  ngOnInit() {

    this.EmpService.getEmployeeCount().subscribe(rs=>{
      this.emp=rs;
      console.log("count print here");
       console.log(this.emp);
    });


 
    // Bar chart:
this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
  // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],

 labels: ["Employee", "Users", "Loan Approved", "Loan Pending"],
 datasets: [{
   // label: '#Employee',
   // label1: 'Users',
     
   //  data: [9,7 , 3, 5, 2, 10],
       data: [this.emp, 7 , 3, 5, 2, 10],

     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(255, 159, 64, 0.2)'
         
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(255, 159, 64, 1)'
         

        
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
    // text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

  }

  empDiv=false;
  showEmp()
  {
    this.userDiv=false;
    this.lapprovedDiv=false;
    this.lpendingDiv=false;
      this.empDiv = true;
  }

  userDiv = false;
  showUser()
  {
    this.empDiv=false;
    this.lpendingDiv=false;
    this.lapprovedDiv=false;
this.userDiv = true;

  }


  lapprovedDiv=false;
  lapp()
  {
    this.lpendingDiv=false;
    this.userDiv=false;
    this.empDiv=false;
    this.lapprovedDiv=true;
  }

  lpendingDiv=false;
  lpen()
  {
    this.userDiv=false;
    this.empDiv=false;
    this.lapprovedDiv=false;
    this.lpendingDiv = true;
  }

 
bodyDiv = true;
displayAdmin = false;
  showAdmin()
  {
this.bodyDiv = false;
this.displayAdmin = true;
this.displayAddEmp=false;

  }

  
  homeCall()
  {
  this.bodyDiv = true;
   this.displayAdmin = false;
   this.displayAddEmp=false;

  }

  displayAddEmp = false;
  addEmp()
  {
   this.displayAddEmp=true;
    this.bodyDiv = false;
    this.displayAdmin = false;

  }
  
  

}
