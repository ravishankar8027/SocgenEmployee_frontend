import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {SocgenEmployeeServiceComponent} from '../socgen-employee-service/socgen-employee-service.component';

interface Department {
  departmentname: string,
  departmentcode: string
}

interface Gender{
  gendername: string,
  gendervalue: string
}

@Component({
  selector: 'app-socgen-employee-regform',
  templateUrl: './socgen-employee-regform.component.html',
  styleUrls: ['./socgen-employee-regform.component.scss']
})
export class SocgenEmployeeRegformComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  departmentnames : Department[]; 
  genderlist:Gender[];
  constructor(private formBuilder: FormBuilder,private sogenemployeeservice :  SocgenEmployeeServiceComponent) { 
    
    // this.departmentnames = [
    //   {departmentname: 'Engineering', departmentcode: 'Engineering'},
    //   {departmentname: 'marketing', departmentcode: 'marketing'},
    //   {departmentname: 'Planning', departmentcode: 'Planning'},
    //   {departmentname: 'HR', departmentcode: 'HR'}
    // ];
    this.genderlist = [
      {gendername:'Male',gendervalue:'Male'},
      {gendername:'Female',gendervalue:'Female'},
      {gendername:'Others',gendervalue:'Others'},
    ];
  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        dob: ['', [Validators.required, Validators.minLength(6)]],
        department: ['', Validators.required]
    });
     this.sogenemployeeservice.getdepartmentNames().subscribe(departmentnames => {
       console.log("departmentnames = ",departmentnames);
       this.departmentnames = departmentnames;
     });
     
  }

    onSubmit(value:String) {
      this.submitted = true;  
      console.log(value);
      this.sogenemployeeservice.createSocgenEmployee(value).subscribe(
        //success => alert("Done"),
        success => console.log("Done"),
        error => alert(error)
      );

      alert(value);
    }
}
