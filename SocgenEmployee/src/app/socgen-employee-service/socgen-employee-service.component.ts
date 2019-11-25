import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-socgen-employee-service',
  templateUrl: './socgen-employee-service.component.html',
  styleUrls: ['./socgen-employee-service.component.scss']
})

@Injectable()
export class SocgenEmployeeServiceComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createSocgenEmployee(socgenemployeepayod) :  Observable<any>
  {
    var  i =  this.http.post('http://localhost:8080/createsocgenemployee',socgenemployeepayod,{ headers: {
                          //'X-CSRF-TOKEN':'D3234E5131EA6697229F9A8EAFC19A49'
                        }
                           });
     //  alert(JSON.stringify(i));
       return i;
  }

  getSocgenEmployeeList():Observable<any[]>
  {
    return this.http.get<any[]>('http://localhost:8080/socgenemployeelist/')
  }

  getdepartmentNames() :Observable<any[]>
  {
    return this.http.get<any[]>('http://localhost:8080/departmentnames/')
  }
}
