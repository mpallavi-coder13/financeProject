import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user.model';
import { Query } from './model/query.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private http:HttpClient) { }

  url='http://localhost:9997/query';


  getqueryUser(userid)
  {   
      console.log(userid);
  return this.http.get<User>(this.url+'/query/'+userid);

  }

  uId:number;
getQuerysubmitted(userid)
{
 this.uId = userid;
  console.log("into service"+this.uId);
  return this.http.post<Query>(this.url+'/user/queries/',+this.uId);
}

getAllQueries()
{
  return this.http.get<Query[]>(this.url+'/getQueryalldata');

}

getSingleQueryData(queryid)
{
  console.log("in service"+queryid);
  return this.http.get<Query>(this.url+'/singlequery'+'/'+queryid);


}

getSendResponse(responses)
{
  console.log(responses);
  return this.http.post<Response>(this.url+'/sendQueryMail',responses);

}

}
