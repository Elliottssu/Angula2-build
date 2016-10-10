import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

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
})
export class AppModule {}
