import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDemo } from './employee-demo';

describe('EmployeeDemo', () => {
  let component: EmployeeDemo;
  let fixture: ComponentFixture<EmployeeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
