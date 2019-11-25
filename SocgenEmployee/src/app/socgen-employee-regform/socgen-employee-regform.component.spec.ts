import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SocgenEmployeeRegformComponent } from './socgen-employee-regform.component';

describe('SocgenEmployeeRegformComponent', () => {
  let component: SocgenEmployeeRegformComponent;
  let fixture: ComponentFixture<SocgenEmployeeRegformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocgenEmployeeRegformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocgenEmployeeRegformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
