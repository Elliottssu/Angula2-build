import { Component } from '@angular/core';

import { User }      from '../models';

@Component({
  templateUrl: 'app/user/login/login.component.html'
})
export class LoginComponent{
	 user: User[] = [];

	 msg = "";

	 onSubmit(user){
	 	if(!user.account){
	 		this.msg = "用户名不能为空"
	 	}else if(!user.password){
	 		this.msg = "密码不能为空"
	 	}
	 }
}

