import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocgenEmployeeServiceComponent } from './socgen-employee-service.component';

describe('SocgenEmployeeServiceComponent', () => {
  let component: SocgenEmployeeServiceComponent;
  let fixture: ComponentFixture<SocgenEmployeeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocgenEmployeeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocgenEmployeeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
