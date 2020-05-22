import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';
import { Query } from '../model/query.model';
import { User } from '../model/user.model';
import { Response } from '../model/Response.model';

@Component({
  selector: 'app-querydetail',
  templateUrl: './querydetail.component.html',
  styleUrls: ['./querydetail.component.css']
})
export class QuerydetailComponent implements OnInit {
queries :Query[]=[];
queries1 = new Query();
user =new User();
response = new Response();
res:Response[]=[];
  constructor(private QueryService:QueryService) { }
  noDataDiv = false;
  queryDiv=true;
  ngOnInit(): void {
    this.QueryService.getAllQueries().subscribe(rs=>{
      this.queries=rs;
      console.log("ch"+this.user.userid);
      console.log(this.queries);
console.log("rs"+rs);
if(rs==null)
      {
        this.noDataDiv = true;
        this.queryDiv = false; 
           }
    });
  }

  responseDiv = false;
  sendResponse(queryid)
  {
    this.queries1.user = this.user;
    this.responseDiv = true;
    this.QueryService.getSingleQueryData(queryid).subscribe(rs=>{
      console.log(rs);
       this.queries1=rs;
    });
  }

  respondDiv=false;
  querystatus:'responded';
  letsendResponse()
  {
      
   // this.response.query.querystatus=this.querystatus;
        //this.queries1.querystatus=this.querystatus;
    console.log(this.queries1);
    this.queries1.user = this.user;
this.response.query=  this.queries1;
console.log(this.response.query.querystatus);
   this.QueryService.getSendResponse(this.response).subscribe(rs=>{this.response.responseid=rs});
   this.responseDiv = false;
   this.respondDiv = true;
   console.log( this.response.query.querystatus);
  //  this.QueryService.getSendResponse(this.response).subscribe(rs=>{
  //    this.response = rs;
  //});


  }

}
