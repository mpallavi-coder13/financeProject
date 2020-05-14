import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';
import { Query } from '../model/query.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-querydetail',
  templateUrl: './querydetail.component.html',
  styleUrls: ['./querydetail.component.css']
})
export class QuerydetailComponent implements OnInit {
queries :Query[]=[];
queries1 = new Query();
user =new User();
responses = new Response();
res:Response[]=[];
  constructor(private QueryService:QueryService) { }

  ngOnInit(): void {
    this.QueryService.getAllQueries().subscribe(rs=>{
      this.queries=rs;
      console.log("ch"+this.user.userid);
      console.log(this.queries);
    });
  }

  responseDiv = false;
  sendResponse(queryid)
  {
    this.responseDiv = true;
    this.QueryService.getSingleQueryData(queryid).subscribe(rs=>{
      console.log(rs);
       this.queries1=rs;
    });
  }



  letsendResponse()
  {
   console.log();
   this.QueryService.getSendResponse(this.responses).subscribe(rs=>{
    console.log(rs);
     this.responses=rs;
  });


  }

}
