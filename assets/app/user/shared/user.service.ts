import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  constructor(private http: Http){}

  login(account,password) {
  	return this.http.post('/api/user/login',{ account: account, password: password})
  		.map((response: Response) => response.json());
  }
}