import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectDemo } from './employee-subject-demo';

describe('EmployeeSubjectDemo', () => {
  let component: EmployeeSubjectDemo;
  let fixture: ComponentFixture<EmployeeSubjectDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSubjectDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSubjectDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
