import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routing } 		  from './app.routing';
import { AppComponent }   from './app.component';
import { LoginComponent}  from './user';
@NgModule({
	imports:      [
		BrowserModule,
		routing
	],
    declarations: [
    	AppComponent,
    	LoginComponent
	],
    bootstrap:    [
    	AppComponent
	],
  providers: [
      {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
        }//我们刷新页面，不是像服务器请求跟目录，而是请求的是/about或者/contact，但是，服务器不知道该路径，会返回一个404页面回来。
  ]//hash strategy的策略是基于锚标记的，像/#/home 或者 /#/contact，并且，服务器会理解/标签，后面的不用管，这样就能拿到正确的资源
})
export class AppModule {}
