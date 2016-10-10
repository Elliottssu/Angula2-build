import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent}  		from './user';
const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
