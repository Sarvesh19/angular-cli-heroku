import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';  // we need to import this now
import { Observable } from 'rxjs';

interface UserNamePasswd {
    userName?: string;
    password?: string;
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  
  
  
  getDataObservable(url:string,userNamePasswd: UserNamePasswd) : any {

         // ...using get request
         return this.http.get(url)
        //return this.http.post(url,userNamePasswd)
                        // ...and calling .json() on the response to return data
                        //  .map((res:any) => res.json())
                        //  //...errors if any
                        //  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}