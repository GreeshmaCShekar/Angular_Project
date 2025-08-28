import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservalbeDemo1 } from './observalbe-demo1';

describe('ObservalbeDemo1', () => {
  let component: ObservalbeDemo1;
  let fixture: ComponentFixture<ObservalbeDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservalbeDemo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservalbeDemo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
