import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SocgenEmployeeRegformComponent} from './socgen-employee-regform/socgen-employee-regform.component';
import {SocgenEmployeeListComponent} from './socgen-employee-list/socgen-employee-list.component';

const routes: Routes = [
  {path: 'socgenemployeelist', component: SocgenEmployeeListComponent},
  {path: 'socgenemployeeregform', component: SocgenEmployeeRegformComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
