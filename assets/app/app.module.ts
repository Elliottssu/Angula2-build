import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { LoginComponent}  from './user';
@NgModule({
	imports:      [
		BrowserModule
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