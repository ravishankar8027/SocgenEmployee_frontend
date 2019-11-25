import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocgenEmployeeListComponent } from './socgen-employee-list.component';

describe('SocgenEmployeeListComponent', () => {
  let component: SocgenEmployeeListComponent;
  let fixture: ComponentFixture<SocgenEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocgenEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocgenEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
