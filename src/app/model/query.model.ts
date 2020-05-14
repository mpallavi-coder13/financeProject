import { User } from './user.model';

export class Query
{
    queryid:number;
    querysubject:string;
    query:string;
    querystatus :string;
   
    user = new User();
}