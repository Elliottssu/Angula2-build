import { Component } from '@angular/core';

import { User }      from '../models';

@Component({
  templateUrl: 'app/user/login/login.component.html'
})
export class LoginComponent{
	 user: User[]=[
	 {account:"slg",password:"111"}
	];
	}

