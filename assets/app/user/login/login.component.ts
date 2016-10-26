import { Component  } 			 from '@angular/core';

import { UserService }      from '../../user';

@Component({
  templateUrl: 'app/user/login/login.component.html'
})
export class LoginComponent{
	 user: any = {};
	 msg: string;
	 state: number;

	 constructor(private userService: UserService){}

	 login(user){
	 	if(!user.account){
	 		this.state == 0;
	 		this.msg = "用户名不能为空";
	 		return
	 	}
	 	if(!user.password){
	 		this.state == 0;
	 		this.msg = "密码不能为空";
	 		return
	 	}
	 	this.userService.login(this.user.account,this.user.password)
	 		.subscribe(
	 				data => {
	 					this.state=data.code;
	 					if(this.state==1) this.msg = "登陆成功";
	 					else this.msg = "用户名或密码错误"
	 					},
	 				error => {this.msg = "登陆失败";}
	 			)
	 }
}

