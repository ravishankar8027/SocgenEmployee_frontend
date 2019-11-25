import { Component, OnInit } from '@angular/core';
import {SocgenEmployeeServiceComponent} from '../socgen-employee-service/socgen-employee-service.component';
@Component({
  selector: 'app-socgen-employee-list',
  templateUrl: './socgen-employee-list.component.html',
  styleUrls: ['./socgen-employee-list.component.scss']
})
export class SocgenEmployeeListComponent implements OnInit {

columns : any[];
task : any;
SocgenEmployeelist: any[];



  constructor(private socgenEmployeeService :SocgenEmployeeServiceComponent) { }

  ngOnInit() {
    this.socgenEmployeeService.getSocgenEmployeeList().subscribe(SocgenEmployeelist => {
      console.log("SocgenEmployeelist = ",SocgenEmployeelist);
      this.SocgenEmployeelist = SocgenEmployeelist;
    });

    this.columns  = 
    [
      { field: 'id', header: 'Id' },
      { field: 'firstName', header: 'First  Name' },
      { field: 'lastName', header: 'Last name' },
      { field: 'gender', header: 'Gender' },
      { field: 'dob', header: 'Date of birth' } ,
      { field: 'department', header: 'Department' } ,
    ];
  }
}