import { Query } from './query.model';

export class Response{
    responseid :number;
    responsemessage:string;
    query = new Query();
}