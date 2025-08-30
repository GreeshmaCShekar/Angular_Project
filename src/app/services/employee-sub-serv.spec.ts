import { TestBed } from '@angular/core/testing';

import { EmployeeSubServ } from './employee-sub-serv';

describe('EmployeeSubServ', () => {
  let service: EmployeeSubServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSubServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
