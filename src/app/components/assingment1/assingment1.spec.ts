import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assingment1 } from './assingment1';

describe('Assingment1', () => {
  let component: Assingment1;
  let fixture: ComponentFixture<Assingment1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assingment1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assingment1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
