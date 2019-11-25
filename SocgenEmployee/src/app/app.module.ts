import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocgenEmployeeListComponent } from './socgen-employee-list/socgen-employee-list.component';
import { SocgenEmployeeRegformComponent } from './socgen-employee-regform/socgen-employee-regform.component';
import { SocgenEmployeeServiceComponent } from './socgen-employee-service/socgen-employee-service.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { TableModule } from 'primeng/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SocgenEmployeeListComponent,
    SocgenEmployeeRegformComponent,
    SocgenEmployeeServiceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    TableModule ,
    DropdownModule

  ],
  providers: [SocgenEmployeeServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
